import React, { useRef, useState } from 'react';
import type { Song } from '../types/music';
import type { RepeatMode } from '../context/AudioPlayerContext';
import { BANDS_RICH } from '../data/musicData';
import { SyncedLyricsDisplay } from './SyncedLyricsDisplay';

interface CircularMobilePlayerProps {
  currentSong: Song;
  currentTime: number;
  duration: number;
  progressPercentage: number;
  isPlaying: boolean;
  togglePlay: () => void;
  nextSong: () => void;
  prevSong: () => void;
  seek: (time: number) => void;
  toggleShuffle: () => void;
  shuffleMode: boolean;
  toggleRepeat: () => void;
  repeatMode: RepeatMode;
  isLiked: boolean;
  toggleLike: () => void;
  isMuted: boolean;
  toggleMute: () => void;
  playbackSpeed: number;
  onCycleSpeed: () => void;
  onClose: () => void;
  onSlideToLyrics?: () => void;
  onOpenQueue?: () => void;
  themeColor: string;
}

export const CircularMobilePlayer: React.FC<CircularMobilePlayerProps> = ({
  currentSong,
  currentTime,
  duration,
  progressPercentage,
  isPlaying,
  togglePlay,
  nextSong,
  prevSong,
  seek,
  toggleShuffle,
  shuffleMode,
  toggleRepeat,
  repeatMode,
  isLiked,
  toggleLike,
  isMuted,
  toggleMute,
  playbackSpeed,
  onCycleSpeed,
  onClose,
  onOpenQueue,
  themeColor
}) => {
  const [showLyrics, setShowLyrics] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  // Artist backdrop for atmospheric visual (seen in reference Image 5)
  const artistInfo = BANDS_RICH.find(
    (b) => b.name.toLowerCase() === (currentSong.artist || '').toLowerCase()
  );
  const backdropImage = artistInfo?.headerImage || artistInfo?.aboutImage || currentSong.coverImage;

  // Format seconds into MM:SS
  const formatTime = (time: number) => {
    if (isNaN(time) || time < 0) return '00:00';
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  // SVG Gauge calculations
  // Radius 44 inside 100x100 viewBox
  const r = 44;
  const cx = 50;
  const cy = 50;
  const circumference = 2 * Math.PI * r;
  
  // 270 degree arc (75% of circumference) with 90 degree bottom gap
  const strokeLength = circumference * 0.75;
  const gapLength = circumference * 0.25;
  const clampedProgress = Math.max(0, Math.min(100, progressPercentage));
  const currentProgressLength = (clampedProgress / 100) * strokeLength;

  // Pointer event calculation for smooth touch/drag scrubbing
  const calculateProgressFromPointer = (clientX: number, clientY: number) => {
    if (!containerRef.current || duration <= 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - (rect.left + rect.width / 2);
    const y = clientY - (rect.top + rect.height / 2);
    
    let angle = Math.atan2(y, x) * (180 / Math.PI);
    if (angle < 0) angle += 360;
    
    // Gauge starts at 135° (bottom left) and spans 270° clockwise to 45° (bottom right)
    let relativeAngle = angle - 135;
    if (relativeAngle < 0) relativeAngle += 360;
    
    if (relativeAngle > 270) {
      if (relativeAngle < 315) relativeAngle = 270;
      else relativeAngle = 0;
    }
    
    const newProgress = Math.max(0, Math.min(1, relativeAngle / 270));
    seek(newProgress * duration);
  };

  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    isDraggingRef.current = true;
    try {
      (e.target as Element).setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
    calculateProgressFromPointer(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isDraggingRef.current) return;
    calculateProgressFromPointer(e.clientX, e.clientY);
  };

  const handlePointerUp = (e: React.PointerEvent<SVGSVGElement>) => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      try {
        (e.target as Element).releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[120] w-full h-[100dvh] flex flex-col items-center justify-between select-none overflow-hidden text-white font-mono animate-fade-in md:hidden bg-[#0c0807] pt-[calc(0.75rem+env(safe-area-inset-top,10px))] pb-[calc(1.75rem+env(safe-area-inset-bottom,24px))] px-5"
      style={{
        backgroundColor: '#0c0807',
        backgroundImage: `radial-gradient(circle at 50% 28%, ${themeColor}44 0%, #1a120e 45%, #0f0a08 80%, #060404 100%)`,
        opacity: 1,
        '--player-accent': themeColor
      } as React.CSSProperties}
    >
      {/* Subtle Artist Backdrop Silhouette with Dark Vignette (seen in reference Image 5) */}
      {backdropImage && (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-20 filter contrast-125"
          style={{ 
            backgroundImage: `url(${backdropImage})`,
            maskImage: 'radial-gradient(circle at 50% 35%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 35%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 85%)'
          }}
        ></div>
      )}

      {/* ─── Top Bar ────────────────────────────────────────────── */}
      <div className="w-full flex items-center justify-between z-10 pt-1 px-1">
        {/* Down Chevron Minimize */}
        <button 
          onClick={onClose} 
          className="p-2 text-gray-300 hover:text-white transition-opacity active:scale-90 cursor-pointer"
          title="Minimize"
        >
          <i className="bx bx-chevron-down text-3xl"></i>
        </button>

        {/* Album / Playlist Name */}
        <span className="font-orbitron text-xs sm:text-sm font-semibold tracking-wider text-gray-200 truncate max-w-[200px] text-center">
          {currentSong.album || currentSong.artist || 'Melovoid'}
        </span>

        {/* Top Right: Synced Lyrics + Options */}
        <div className="flex items-center space-x-1">
          <button 
            onClick={() => setShowLyrics(!showLyrics)} 
            className={`p-2 transition-all active:scale-90 cursor-pointer rounded-full ${
              showLyrics ? 'text-[var(--player-accent)] bg-white/10' : 'text-gray-300 hover:text-white'
            }`}
            title="Toggle Synced Lyrics"
          >
            <i className="fas fa-microphone-alt text-base"></i>
          </button>
          <button 
            onClick={() => setShowLyrics(!showLyrics)} 
            className="p-2 text-gray-300 hover:text-white transition-opacity active:scale-90 cursor-pointer"
            title="Options"
          >
            <i className="bx bx-dots-horizontal-rounded text-2xl"></i>
          </button>
        </div>
      </div>

      {/* ─── Track Meta: Title, Artist & Accent Timestamps ──────── */}
      <div className="w-full flex flex-col items-center z-10 mt-1 sm:mt-2 text-center px-4">
        {/* Title */}
        <h2 className="font-orbitron text-2xl sm:text-3xl font-bold tracking-wide text-white truncate max-w-full">
          {currentSong.title}
        </h2>
        
        {/* Artist */}
        <p className="font-mono text-sm sm:text-base text-gray-300 tracking-wide font-normal truncate max-w-full mt-1.5 opacity-100">
          {currentSong.artist}
        </p>

        {/* Reference Image Style Timestamps: MM:SS | MM:SS */}
        <div 
          className="flex items-center justify-center gap-3 font-mono text-xs sm:text-sm font-semibold tracking-widest mt-2 sm:mt-3 opacity-100"
          style={{ color: themeColor }}
        >
          <span>{formatTime(currentTime)}</span>
          <span className="text-white/40 font-light">|</span>
          <span className="text-gray-300">{formatTime(duration)}</span>
        </div>
      </div>

      {/* ─── Center Stage: Circular Album Disc OR Synced Lyrics ───── */}
      {showLyrics ? (
        <div className="relative w-full flex-1 my-2 max-h-[50vh] flex flex-col items-center justify-between overflow-hidden rounded-2xl bg-black/85 border border-white/15 p-3 shadow-2xl backdrop-blur-md z-10">
          <div className="w-full flex items-center justify-between pb-2 border-b border-white/10 mb-2 px-2 shrink-0">
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Synced Lyrics
            </span>
            <button
              onClick={() => setShowLyrics(false)}
              className="text-xs text-gray-300 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded bg-white/10 border border-white/10 cursor-pointer active:scale-95 transition-all"
            >
              <i className="bx bx-disc"></i>
              <span>View Disc</span>
            </button>
          </div>
          <div className="w-full flex-1 overflow-hidden">
            <SyncedLyricsDisplay song={currentSong} currentTime={currentTime} onSeek={seek} />
          </div>
        </div>
      ) : (
        <div 
          className="relative w-64 h-64 xs:w-72 xs:h-72 my-auto flex items-center justify-center shrink-0 z-10" 
          ref={containerRef}
        >
          {/* Ambient Warm Atmosphere Glow */}
          <div 
            className="absolute inset-0 rounded-full blur-3xl opacity-35 pointer-events-none transition-all duration-700"
            style={{ backgroundColor: themeColor }}
          ></div>

          {/* Outer Circular Ring Frame */}
          <div className="absolute inset-[-6px] rounded-full border border-white/5 pointer-events-none"></div>

          {/* SVG Circular Scrubber Track & Scrubber Knob */}
          <svg 
            viewBox="0 0 100 100" 
            className="absolute inset-0 w-full h-full cursor-pointer z-20 touch-none select-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            style={{ transform: 'rotate(135deg)' }}
          >
            {/* Inactive Track Arc (270 degrees) */}
            <circle
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke="rgba(255, 255, 255, 0.16)"
              strokeWidth="3"
              strokeDasharray={`${strokeLength} ${gapLength}`}
              strokeLinecap="round"
            />

            {/* Active Progress Track Arc */}
            <circle
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke={themeColor}
              strokeWidth="3.5"
              strokeDasharray={`${currentProgressLength} ${circumference}`}
              strokeLinecap="round"
              className="transition-all duration-75 ease-linear"
            />

            {/* Scrubber Knob Thumb Dot matching Image 4 & 5 */}
            <circle
              cx={cx + r}
              cy={cy}
              r="4.5"
              fill={themeColor}
              stroke="#ffffff"
              strokeWidth="1.5"
              className="transition-all duration-75 ease-linear shadow-xl cursor-grab"
              style={{ 
                transformOrigin: '50px 50px', 
                transform: `rotate(${(clampedProgress / 100) * 270}deg)`,
                filter: `drop-shadow(0 0 4px ${themeColor})`
              }}
            />
          </svg>

          {/* Circular Cropped Album Artwork (clickable to flip to lyrics) */}
          <div 
            onClick={() => setShowLyrics(true)}
            className="relative z-10 w-[78%] h-[78%] rounded-full overflow-hidden shadow-2xl border-2 border-white/15 flex items-center justify-center bg-black cursor-pointer group/disc"
            title="Tap for Synced Lyrics"
          >
            <img 
              src={currentSong.coverImage} 
              alt={currentSong.title} 
              className={`w-full h-full object-cover pointer-events-none transition-transform duration-700 ${
                isPlaying ? 'scale-105' : 'scale-100 filter brightness-90'
              }`}
            />
            {/* Subtle Vinyl Grooves Radial Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none rounded-full"></div>
            {/* Subtle tap hint */}
            <div className="absolute bottom-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-[8px] font-mono text-white/80 opacity-0 group-hover/disc:opacity-100 transition-opacity">
              LYRICS
            </div>
          </div>
        </div>
      )}

      {/* ─── Lyrics Quick Pill Button ───────────────────────────── */}
      <div className="w-full flex items-center justify-center z-10 my-0.5">
        <button 
          onClick={() => setShowLyrics(!showLyrics)}
          className={`flex items-center gap-1.5 px-3.5 py-1 rounded-full border transition-all cursor-pointer active:scale-95 text-[11px] font-mono tracking-widest shadow-md ${
            showLyrics 
              ? 'bg-[var(--player-accent)] text-black border-[var(--player-accent)] font-bold shadow-[var(--player-accent)]/40' 
              : 'bg-white/10 text-gray-200 hover:text-white border-white/20 hover:bg-white/15'
          }`}
        >
          <i className={`fas ${showLyrics ? 'fa-compact-disc' : 'fa-microphone-alt'} text-[10px]`}></i>
          <span>{showLyrics ? 'VIEW DISC' : 'LYRICS'}</span>
        </button>
      </div>

      {/* ─── Controls Row 1: Primary Playback Bar ───────────────── */}
      <div className="w-full flex items-center justify-between px-6 z-10 mb-2 max-w-sm">
        {/* Speed / Minus Circle (matches reference Image 4 & 5 far left icon) */}
        <button 
          onClick={onCycleSpeed}
          className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white active:scale-90 transition-transform cursor-pointer"
          title={`Playback Speed: ${playbackSpeed}x`}
        >
          <i className="bx bx-minus-circle text-2xl"></i>
        </button>

        {/* Previous Track */}
        <button 
          onClick={prevSong} 
          className="w-12 h-12 flex items-center justify-center text-white hover:text-gray-300 transition-colors active:scale-90 cursor-pointer"
          title="Previous Track"
        >
          <i className="bx bx-skip-previous text-3xl"></i>
        </button>

        {/* Prominent White Circular Play/Pause Button */}
        <button 
          onClick={togglePlay}
          className="w-16 h-16 sm:w-18 sm:h-18 bg-white rounded-full flex items-center justify-center text-black shadow-2xl active:scale-95 transition-transform cursor-pointer"
          style={{
            boxShadow: isPlaying ? `0 0 30px ${themeColor}66` : '0 10px 30px rgba(0,0,0,0.8)'
          }}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          <i className={`bx ${isPlaying ? 'bx-pause' : 'bx-play ml-1'} text-3xl sm:text-4xl text-black`}></i>
        </button>

        {/* Next Track */}
        <button 
          onClick={nextSong} 
          className="w-12 h-12 flex items-center justify-center text-white hover:text-gray-300 transition-colors active:scale-90 cursor-pointer"
          title="Next Track"
        >
          <i className="bx bx-skip-next text-3xl"></i>
        </button>

        {/* Solid Heart (Like / Library) */}
        <button 
          onClick={toggleLike}
          className="w-10 h-10 flex items-center justify-center active:scale-125 transition-transform cursor-pointer"
          title={isLiked ? 'Remove from Liked' : 'Save to Liked'}
        >
          <i 
            className={`bx bxs-heart text-2xl transition-colors ${
              isLiked ? 'text-emerald-400' : 'text-white/30 hover:text-white'
            }`}
          ></i>
        </button>
      </div>

      {/* ─── Controls Row 2: Secondary Utility Bar (4 Icons matching Image 4 & 5) ─── */}
      <div className="w-full flex items-center justify-between px-6 sm:px-8 z-10 max-w-sm">
        {/* Shuffle Button */}
        <button 
          onClick={toggleShuffle} 
          className={`p-2 transition-colors cursor-pointer relative active:scale-90 ${
            shuffleMode ? 'text-[var(--player-accent)]' : 'text-gray-400 hover:text-white'
          }`}
          title={shuffleMode ? 'Shuffle Active' : 'Enable Shuffle'}
        >
          <i className="bx bx-shuffle text-2xl"></i>
          {shuffleMode && (
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--player-accent)]"></span>
          )}
        </button>

        {/* Queue Button */}
        <button 
          onClick={onOpenQueue} 
          className="p-2 text-gray-400 hover:text-white transition-colors cursor-pointer active:scale-90"
          title="Play Queue"
        >
          <i className="bx bx-list-ul text-2xl"></i>
        </button>

        {/* Volume / Mute Button */}
        <button 
          onClick={toggleMute}
          className={`p-2 transition-colors cursor-pointer active:scale-90 ${
            isMuted ? 'text-red-400' : 'text-gray-400 hover:text-white'
          }`}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          <i className={`bx ${isMuted ? 'bx-volume-mute' : 'bx-volume-full'} text-2xl`}></i>
        </button>

        {/* Repeat Button (highlighted with orange outline when active, matching Image 4 & 5) */}
        <button 
          onClick={toggleRepeat} 
          className={`p-1.5 transition-all cursor-pointer relative active:scale-90 rounded-lg ${
            repeatMode !== 'off' 
              ? 'text-[var(--player-accent)] border border-[var(--player-accent)] shadow-[0_0_10px_var(--player-accent)]/30' 
              : 'text-gray-400 hover:text-white border border-transparent'
          }`}
          title={`Repeat: ${repeatMode}`}
        >
          <i className="bx bx-repeat text-2xl"></i>
          {repeatMode === 'one' && (
            <span className="absolute -top-1 -right-1 text-[8px] font-bold bg-[var(--player-accent)] text-black rounded-full w-3.5 h-3.5 flex items-center justify-center font-mono">
              1
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
