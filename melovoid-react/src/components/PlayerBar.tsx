import React, { useState, useEffect, useRef } from 'react';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { useUser } from '../context/UserContext';
import { BANDS_RICH } from '../data/musicData';
import { SyncedLyricsDisplay } from './SyncedLyricsDisplay';
import { CircularMobilePlayer } from './CircularMobilePlayer';

export const PlayerBar: React.FC = () => {
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    repeatMode,
    shuffleMode,
    playbackSpeed,
    playlist,
    queue,
    togglePlay,
    seek,
    changeVolume,
    toggleMute,
    nextSong,
    prevSong,
    toggleRepeat,
    toggleShuffle,
    setPlaybackSpeed,
    closePlayer,
    removeFromQueue,
    clearQueue,
    playSong,
    toggleLikeSong,
    isSongLiked
  } = useAudioPlayer();

  const { openAddToPlaylistModal } = useUser();

  // Modals & Drawers state
  const [showLyricsModal, setShowLyricsModal] = useState(false);
  const [showQueueDrawer, setShowQueueDrawer] = useState(false);
  const [showFullscreenMode, setShowFullscreenMode] = useState(false);
  const [showMobileFullPlayer, setShowMobileFullPlayer] = useState(false);
  const [hoverSeekTime, setHoverSeekTime] = useState<number | null>(null);
  const [hoverSeekPos, setHoverSeekPos] = useState<number>(0);

  const progressBarRef = useRef<HTMLDivElement | null>(null);

  // Format seconds into MM:SS
  const formatTime = (time: number) => {
    if (isNaN(time) || time < 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  // Global Keyboard Shortcuts (Spotify style)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (e.code === 'ArrowRight' && !e.shiftKey) {
        seek(Math.min(duration, currentTime + 5));
      } else if (e.code === 'ArrowLeft' && !e.shiftKey) {
        seek(Math.max(0, currentTime - 5));
      } else if (e.code === 'ArrowRight' && e.shiftKey) {
        nextSong();
      } else if (e.code === 'ArrowLeft' && e.shiftKey) {
        prevSong();
      } else if (e.key === 'm' || e.key === 'M') {
        toggleMute();
      } else if (e.key === 'l' || e.key === 'L') {
        setShowLyricsModal((prev) => !prev);
      } else if (e.key === 'q' || e.key === 'Q') {
        setShowQueueDrawer((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, seek, currentTime, duration, nextSong, prevSong, toggleMute]);

  if (!currentSong) return null;

  // Determine theme color based on artist
  const artistInfo = BANDS_RICH.find(
    (b) => b.name.toLowerCase() === (currentSong.artist || '').toLowerCase()
  );
  const fallbackColors: Record<string, string> = {
    'The Neighbourhood': '#4b5563',
    Nirvana: '#5DADE2',
    Radiohead: '#DC2626',
    'Cigarettes After Sex': '#059669',
    'Arctic Monkeys': '#dc267f',
    Coldplay: '#ffc107',
    'The Smiths': '#dc6626'
  };
  const themeColor = artistInfo?.accentColor || fallbackColors[currentSong.artist] || '#f97316';

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;
  const isLiked = isSongLiked(currentSong.id);

  // Cycle playback speed: 1.0x -> 1.25x -> 1.5x -> 0.8x -> 1.0x
  const handleCycleSpeed = () => {
    if (playbackSpeed === 1.0) setPlaybackSpeed(1.25);
    else if (playbackSpeed === 1.25) setPlaybackSpeed(1.5);
    else if (playbackSpeed === 1.5) setPlaybackSpeed(0.8);
    else setPlaybackSpeed(1.0);
  };

  // Hover over progress bar to preview timestamp
  const handleProgressMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || duration <= 0) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setHoverSeekTime(pos * duration);
    setHoverSeekPos(e.clientX - rect.left);
  };

  const handleProgressMouseLeave = () => {
    setHoverSeekTime(null);
  };

  // Upcoming songs list (combining custom queue and remaining playlist)
  const currentSongIndex = playlist.findIndex((s) => s.id === currentSong.id);
  const upcomingPlaylistSongs =
    currentSongIndex !== -1 ? playlist.slice(currentSongIndex + 1) : [];

  return (
    <>
      {/* ─── Bottom Spotify-Style Player Bar ────────────────────── */}
      <div 
        id="player-bar" 
        className="fixed bottom-0 left-0 right-0 h-20 md:h-[88px] bg-black/95 backdrop-blur-2xl border-t border-white/10 px-4 md:px-6 z-50 flex items-center justify-between select-none shadow-[0_-10px_40px_rgba(0,0,0,0.85)]"
        style={{ '--player-accent': themeColor } as React.CSSProperties}
      >
        {/* Subtle top progress hairline */}
        <div 
          className="absolute top-0 left-0 h-[2px] transition-all duration-300 pointer-events-none"
          style={{
            width: `${progressPercentage}%`,
            background: `linear-gradient(to right, var(--player-accent), #ffffff)`
          }}
        ></div>

        {/* ─── Mobile Mini-Player Bar (Screens < 768px) ─────────── */}
        <div 
          onClick={() => setShowMobileFullPlayer(true)}
          className="flex md:hidden items-center justify-between w-full h-full cursor-pointer px-1 relative"
        >
          {/* Left: Thumbnail & Song / Artist */}
          <div className="flex items-center space-x-3 min-w-0 pr-3">
            <img 
              src={currentSong.coverImage} 
              alt={currentSong.title} 
              className="w-11 h-11 rounded-lg object-cover shadow-md border border-white/10 shrink-0" 
            />
            <div className="min-w-0 truncate">
              <h4 className="text-xs sm:text-sm font-orbitron font-bold text-white truncate">
                {currentSong.title}
              </h4>
              <p className="text-[11px] text-gray-400 truncate font-mono mt-0.5">
                {currentSong.artist}
              </p>
            </div>
          </div>

          {/* Right: Streamlined Touch-Friendly Controls (Clean & Spacious) */}
          <div className="flex items-center space-x-2 shrink-0 text-white" onClick={(e) => e.stopPropagation()}>
            {/* Heart */}
            <button
              onClick={() => toggleLikeSong(currentSong.id)}
              className={`p-2 transition-transform cursor-pointer active:scale-125 ${
                isLiked ? 'text-emerald-400' : 'text-gray-400 hover:text-white'
              }`}
              title={isLiked ? 'Liked' : 'Like'}
            >
              <i className={`fa${isLiked ? 's' : 'r'} fa-heart text-base`}></i>
            </button>

            {/* Play/Pause White Circle */}
            <button 
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg mx-1"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play ml-0.5'} text-sm text-black`}></i>
            </button>

            {/* Next Track */}
            <button 
              onClick={nextSong}
              className="p-2 text-gray-300 hover:text-white cursor-pointer active:scale-95"
              title="Next Track"
            >
              <i className="fas fa-step-forward text-base"></i>
            </button>
          </div>

          {/* Bottom hairline progress on mobile */}
          <div 
            className="absolute bottom-0 left-0 h-[2.5px] transition-all duration-300 pointer-events-none"
            style={{
              width: `${progressPercentage}%`,
              backgroundColor: themeColor
            }}
          ></div>
        </div>

        {/* ─── Desktop 3-Panel Spotify Bar (Screens >= 768px) ─────── */}
        <div className="hidden md:flex items-center justify-between w-full h-full flex-nowrap">
          {/* ─── Left Panel: Now Playing Artwork & Meta ───────────── */}
          <div className="flex items-center space-x-3.5 w-1/4 min-w-[240px] max-w-xs shrink-0">
          <div className="relative group/art shrink-0 cursor-pointer" onClick={() => setShowFullscreenMode(true)}>
            <img 
              src={currentSong.coverImage} 
              alt={currentSong.title} 
              className="w-13 h-13 rounded-lg object-cover shadow-lg border border-white/10 group-hover/art:scale-105 transition-transform" 
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/art:opacity-100 rounded-lg flex items-center justify-center transition-opacity">
              <i className="fas fa-expand-alt text-xs text-white"></i>
            </div>
          </div>

          <div className="flex-1 min-w-0 pr-2">
            <h4 
              onClick={() => setShowFullscreenMode(true)}
              className="text-sm font-orbitron font-bold text-white truncate cursor-pointer hover:underline"
            >
              {currentSong.title}
            </h4>
            <p className="text-xs text-gray-400 truncate font-mono mt-0.5">
              <span>{currentSong.artist}</span>
              {currentSong.album && <span className="text-gray-500"> • {currentSong.album}</span>}
            </p>
          </div>

          {/* Spotify Heart / Like Button */}
          <button
            onClick={() => toggleLikeSong(currentSong.id)}
            className={`p-2 transition-transform duration-200 cursor-pointer active:scale-125 ${
              isLiked ? 'text-emerald-400 scale-110' : 'text-gray-400 hover:text-white'
            }`}
            title={isLiked ? 'Remove from Your Library' : 'Save to Your Library'}
          >
            <i className={`fa${isLiked ? 's' : 'r'} fa-heart text-base`}></i>
          </button>

          {/* Add to Playlist Button */}
          <button
            onClick={() => openAddToPlaylistModal(currentSong)}
            className="p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
            title="Add to Playlist"
          >
            <i className="fas fa-folder-plus text-sm"></i>
          </button>
        </div>

        {/* ─── Center Panel: Controls & Scrubbing Bar ───────────── */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl px-4">
          
          {/* Controls Button Row */}
          <div className="flex items-center space-x-5 sm:space-x-6 text-white mb-1.5">
            
            {/* Shuffle Button with Active Dot Indicator */}
            <button 
              onClick={toggleShuffle}
              className={`relative p-1.5 transition-colors cursor-pointer ${
                shuffleMode ? 'text-[var(--player-accent)]' : 'text-gray-400 hover:text-white'
              }`}
              title={shuffleMode ? 'Disable Shuffle' : 'Enable Shuffle'}
            >
              <i className="fas fa-random text-sm"></i>
              {shuffleMode && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--player-accent)]"></span>
              )}
            </button>

            {/* Previous Button */}
            <button 
              onClick={prevSong}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer p-1"
              title="Previous (or Restart Track)"
            >
              <i className="fas fa-step-backward text-base"></i>
            </button>

            {/* Play / Pause Primary Button */}
            <button 
              onClick={togglePlay}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer shadow-xl shadow-black/60"
              style={{
                boxShadow: isPlaying ? `0 0 20px ${themeColor}66` : 'none'
              }}
              title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
            >
              <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play ml-0.5'} text-sm sm:text-base`}></i>
            </button>

            {/* Next Button */}
            <button 
              onClick={nextSong}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer p-1"
              title="Next Track"
            >
              <i className="fas fa-step-forward text-base"></i>
            </button>

            {/* 3-State Repeat Button (Off -> All -> One) */}
            <button 
              onClick={toggleRepeat}
              className={`relative p-1.5 transition-colors cursor-pointer ${
                repeatMode !== 'off' ? 'text-[var(--player-accent)]' : 'text-gray-400 hover:text-white'
              }`}
              title={
                repeatMode === 'all'
                  ? 'Repeat All (click for Repeat One)'
                  : repeatMode === 'one'
                  ? 'Repeat One (click to turn off)'
                  : 'Enable Repeat'
              }
            >
              <i className="fas fa-redo-alt text-sm"></i>
              {repeatMode === 'one' && (
                <span className="absolute -top-1 -right-1 text-[9px] font-mono font-bold bg-[var(--player-accent)] text-black rounded-full w-3.5 h-3.5 flex items-center justify-center">
                  1
                </span>
              )}
              {repeatMode === 'all' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--player-accent)]"></span>
              )}
            </button>
          </div>

          {/* Time & Progress Slider */}
          <div className="flex items-center w-full space-x-3 text-xs font-mono text-gray-400">
            <span className="w-10 text-right shrink-0">{formatTime(currentTime)}</span>
            
            {/* Interactive Progress Bar */}
            <div 
              ref={progressBarRef}
              onMouseMove={handleProgressMouseMove}
              onMouseLeave={handleProgressMouseLeave}
              className="flex-1 h-1.5 hover:h-2.5 bg-white/20 rounded-full relative cursor-pointer group transition-all"
            >
              {/* Filled progress */}
              <div 
                className="absolute top-0 bottom-0 left-0 rounded-full transition-all duration-75 pointer-events-none"
                style={{
                  width: `${progressPercentage}%`,
                  backgroundColor: themeColor
                }}
              ></div>

              {/* Scrubber thumb */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity -ml-1.5 pointer-events-none z-20"
                style={{ left: `${progressPercentage}%` }}
              ></div>

              {/* Draggable transparent input overlay */}
              <input 
                type="range" 
                min="0" 
                max="100" 
                step="0.1"
                value={progressPercentage} 
                onChange={(e) => {
                  if (duration > 0) {
                    seek((parseFloat(e.target.value) / 100) * duration);
                  }
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />

              {/* Hover Timestamp Tooltip */}
              {hoverSeekTime !== null && (
                <div 
                  className="absolute -top-8 -translate-x-1/2 px-2 py-0.5 rounded bg-black/95 border border-white/20 text-[10px] font-mono text-white pointer-events-none shadow-lg z-30"
                  style={{ left: `${hoverSeekPos}px` }}
                >
                  {formatTime(hoverSeekTime)}
                </div>
              )}
            </div>

            <span className="w-10 text-left shrink-0">{formatTime(duration)}</span>
          </div>

        </div>

        {/* ─── Right Panel: Tools, Volume, Lyrics & Queue ─────────── */}
        <div className="flex items-center justify-end space-x-3 w-1/4 min-w-[200px] shrink-0">
          
          {/* Playback Speed Pill */}
          <button
            onClick={handleCycleSpeed}
            className="hidden lg:flex items-center justify-center px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-[10px] font-mono text-white transition-all cursor-pointer border border-white/10"
            title="Cycle Playback Speed"
          >
            {playbackSpeed}x
          </button>

          {/* Karaoke Synced Lyrics Button */}
          <button 
            onClick={() => {
              setShowLyricsModal(!showLyricsModal);
              setShowQueueDrawer(false);
            }}
            className={`p-2 transition-colors cursor-pointer ${
              showLyricsModal ? 'text-[var(--player-accent)]' : 'text-gray-400 hover:text-white'
            }`}
            title="Lyrics (L)"
          >
            <i className="fas fa-microphone-alt text-base"></i>
          </button>

          {/* Up Next Queue Drawer Button */}
          <button 
            onClick={() => {
              setShowQueueDrawer(!showQueueDrawer);
              setShowLyricsModal(false);
            }}
            className={`p-2 transition-colors cursor-pointer ${
              showQueueDrawer ? 'text-[var(--player-accent)]' : 'text-gray-400 hover:text-white'
            }`}
            title="Play Queue (Q)"
          >
            <i className="fas fa-list-ul text-base"></i>
          </button>

          {/* Lossless Quality Badge */}
          <div className="hidden xl:flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[9px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Hi-Res</span>
          </div>

          {/* Volume Control */}
          <div className="hidden sm:flex items-center space-x-2">
            <button 
              onClick={toggleMute}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1"
              title={isMuted ? 'Unmute (M)' : 'Mute (M)'}
            >
              <i className={`fas ${
                isMuted || volume === 0 
                  ? 'fa-volume-mute text-red-400' 
                  : volume <= 0.4 
                  ? 'fa-volume-down' 
                  : 'fa-volume-up'
              } text-sm`}></i>
            </button>
            <input 
              type="range" 
              value={isMuted ? 0 : volume * 100} 
              onChange={(e) => changeVolume(parseFloat(e.target.value) / 100)}
              min="0" 
              max="100" 
              className="w-18 h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-[var(--player-accent)]"
            />
          </div>

          {/* Fullscreen Immersion Mode Button */}
          <button 
            onClick={() => setShowFullscreenMode(true)}
            className="p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
            title="Fullscreen Immersion"
          >
            <i className="fas fa-expand text-sm"></i>
          </button>

          {/* Close Player Bar */}
          <button 
            onClick={closePlayer}
            className="p-2 text-gray-400 hover:text-red-400 transition-colors cursor-pointer ml-1"
            title="Close Player"
          >
            <i className="fas fa-times text-base"></i>
          </button>
        </div>

        </div>

      </div>

      {/* ─── Spotify-Style Up Next Queue Drawer ─────────────────── */}
      {showQueueDrawer && (
        <div className="fixed bottom-22 right-4 w-96 max-w-[95vw] max-h-[70vh] bg-black/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 shadow-2xl z-50 overflow-hidden flex flex-col font-mono text-white animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2">
              <i className="fas fa-list-ul text-emerald-400 text-sm"></i>
              <h3 className="font-orbitron font-bold text-sm tracking-wider uppercase">Play Queue</h3>
            </div>
            <div className="flex items-center gap-3">
              {queue.length > 0 && (
                <button 
                  onClick={clearQueue}
                  className="text-[10px] text-gray-400 hover:text-red-400 transition-colors cursor-pointer"
                >
                  Clear Queue
                </button>
              )}
              <button 
                onClick={() => setShowQueueDrawer(false)}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>

          <div className="overflow-y-auto space-y-4 pr-1 no-scrollbar flex-1">
            {/* Now Playing Section */}
            <div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">// Now Playing</div>
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10 border border-emerald-500/30">
                <img src={currentSong.coverImage} alt={currentSong.title} className="w-10 h-10 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-emerald-400 truncate">{currentSong.title}</div>
                  <div className="text-[10px] text-gray-400 truncate">{currentSong.artist}</div>
                </div>
                <div className="flex items-center gap-0.5">
                  <span className="w-1 h-3 bg-emerald-400 rounded-full wave-bar-1"></span>
                  <span className="w-1 h-3 bg-emerald-400 rounded-full wave-bar-2"></span>
                  <span className="w-1 h-3 bg-emerald-400 rounded-full wave-bar-3"></span>
                </div>
              </div>
            </div>

            {/* Custom User Added Queue */}
            {queue.length > 0 && (
              <div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">// Next In Queue</div>
                <div className="space-y-1.5">
                  {queue.map((s, idx) => (
                    <div 
                      key={`q-${idx}-${s.id}`} 
                      className="group flex items-center gap-2.5 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                      onClick={() => {
                        removeFromQueue(idx);
                        playSong(s);
                      }}
                    >
                      <img src={s.coverImage} alt={s.title} className="w-8 h-8 rounded object-cover" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-white truncate">{s.title}</div>
                        <div className="text-[10px] text-gray-400 truncate">{s.artist}</div>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFromQueue(idx);
                        }}
                        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-400 p-1 cursor-pointer"
                        title="Remove from queue"
                      >
                        <i className="fas fa-trash-alt text-[10px]"></i>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Next From Album / Playlist */}
            {upcomingPlaylistSongs.length > 0 && (
              <div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">// Next From Album</div>
                <div className="space-y-1.5">
                  {upcomingPlaylistSongs.map((s, idx) => (
                    <div 
                      key={`pl-${idx}-${s.id}`} 
                      className="group flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                      onClick={() => playSong(s)}
                    >
                      <img src={s.coverImage} alt={s.title} className="w-8 h-8 rounded object-cover" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-gray-200 group-hover:text-white truncate">{s.title}</div>
                        <div className="text-[10px] text-gray-400 truncate">{s.artist}</div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLikeSong(s.id);
                        }}
                        className={`p-1 text-xs cursor-pointer ${
                          isSongLiked(s.id) ? 'text-emerald-400' : 'text-gray-500 group-hover:text-gray-300'
                        }`}
                      >
                        <i className={`fa${isSongLiked(s.id) ? 's' : 'r'} fa-heart`}></i>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── Spotify-Style Lyrics Modal ─────────────────────────── */}
      {showLyricsModal && (
        <div 
          className="fixed inset-0 z-[125] flex items-center justify-center bg-black/85 backdrop-blur-2xl p-3 sm:p-6 md:p-10 select-none animate-fade-in"
          style={{ '--player-accent': themeColor } as React.CSSProperties}
        >
          {/* Ambient dynamic radial halo matching track tone */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full blur-[170px] opacity-25 pointer-events-none transition-all duration-700"
            style={{ backgroundColor: themeColor }}
          ></div>

          <div className="w-full h-full max-w-5xl max-h-[90vh] bg-[#0d0a09]/95 backdrop-blur-2xl rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.95)] flex flex-col md:flex-row overflow-hidden border border-white/15 relative z-10">
            
            {/* Left Sidebar: Artwork, Meta & Full Playback Console (matching Image 2) */}
            <div className="hidden md:flex w-5/12 bg-black/85 border-r border-white/10 p-6 lg:p-8 flex-col justify-between items-center relative select-none">
              
              {/* Top: Streaming Badge */}
              <div className="w-full flex justify-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-mono tracking-widest text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>NOW STREAMING</span>
                  <div className="flex items-center gap-0.5 ml-1">
                    <span className="w-0.5 h-2 bg-emerald-400 rounded-full animate-bounce"></span>
                    <span className="w-0.5 h-3 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.15s]"></span>
                    <span className="w-0.5 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.3s]"></span>
                  </div>
                </div>
              </div>

              {/* Center: Large Album Artwork (Clean & Framed like Image 2) */}
              <div className="relative my-auto w-52 h-52 sm:w-64 sm:h-64 flex items-center justify-center">
                <div 
                  className="absolute inset-0 rounded-2xl blur-2xl opacity-40 pointer-events-none transition-all duration-700"
                  style={{ backgroundColor: themeColor }}
                ></div>
                <img 
                  src={currentSong.coverImage} 
                  alt={currentSong.title} 
                  className="relative z-10 w-full h-full rounded-2xl object-cover shadow-2xl border border-white/20 transition-transform hover:scale-[1.02]"
                  style={{
                    boxShadow: `0 20px 50px -10px ${themeColor}66`
                  }}
                />
              </div>

              {/* Bottom: Meta, Progress Bar & Audio Console */}
              <div className="w-full space-y-3.5 text-center">
                {/* Title & Artist */}
                <div className="px-2">
                  <h3 className="text-white text-xl sm:text-2xl font-orbitron font-bold truncate cursor-pointer hover:underline" title={currentSong.title}>
                    {currentSong.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm font-mono truncate mt-1">
                    {currentSong.artist}
                    {currentSong.album && <span className="text-gray-500"> • {currentSong.album}</span>}
                  </p>
                </div>

                {/* Progress Bar with Timestamps */}
                <div className="space-y-1.5 px-1">
                  <div className="relative w-full h-1.5 hover:h-2.5 bg-white/15 rounded-full cursor-pointer group transition-all">
                    <div 
                      className="absolute top-0 bottom-0 left-0 rounded-full transition-all duration-75 pointer-events-none"
                      style={{
                        width: `${progressPercentage}%`,
                        backgroundColor: themeColor
                      }}
                    ></div>
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity -ml-1.5 pointer-events-none z-20"
                      style={{ left: `${progressPercentage}%` }}
                    ></div>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      step="0.1"
                      value={progressPercentage} 
                      onChange={(e) => {
                        if (duration > 0) {
                          seek((parseFloat(e.target.value) / 100) * duration);
                        }
                      }}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400 px-0.5">
                    <span>{formatTime(currentTime)}</span>
                    <span style={{ color: themeColor }}>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Controls Row (matching Image 2) */}
                <div className="flex items-center justify-center space-x-6 w-full text-white pt-1">
                  {/* Previous */}
                  <button 
                    onClick={prevSong} 
                    className="p-2 text-gray-300 hover:text-white transition-colors cursor-pointer active:scale-90 text-xl"
                    title="Previous"
                  >
                    <i className="fas fa-step-backward"></i>
                  </button>

                  {/* Play / Pause White Circle */}
                  <button 
                    onClick={togglePlay}
                    className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-xl"
                    style={{
                      boxShadow: isPlaying ? `0 0 25px ${themeColor}77` : '0 8px 25px rgba(0,0,0,0.6)'
                    }}
                    title={isPlaying ? 'Pause' : 'Play'}
                  >
                    <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play ml-1'} text-black text-lg`}></i>
                  </button>

                  {/* Next */}
                  <button 
                    onClick={nextSong} 
                    className="p-2 text-gray-300 hover:text-white transition-colors cursor-pointer active:scale-90 text-xl"
                    title="Next"
                  >
                    <i className="fas fa-step-forward"></i>
                  </button>
                </div>

              </div>

            </div>

            {/* Right Side: Karaoke Synced Lyrics Display */}
            <div className="flex-1 flex flex-col overflow-hidden bg-gradient-to-b from-[#14100e] to-[#0a0807] relative p-6 sm:p-10">
              {/* Header (matching reference Image 2 & 6) */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4 z-20 shrink-0">
                <div className="flex items-center gap-2.5">
                  <i className="fas fa-microphone-alt text-lg" style={{ color: themeColor }}></i>
                  <h2 className="text-white text-base sm:text-lg font-orbitron font-bold tracking-wider">
                    Synced Lyrics
                  </h2>
                </div>

                <button 
                  onClick={() => setShowLyricsModal(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all flex items-center justify-center cursor-pointer border border-white/10 active:scale-95"
                  title="Close Lyrics (L or ESC)"
                >
                  <i className="fas fa-times text-sm"></i>
                </button>
              </div>

              {/* Interactive Lyrics Renderer */}
              <SyncedLyricsDisplay song={currentSong} currentTime={currentTime} onSeek={seek} />
            </div>

          </div>
        </div>
      )}

      {/* ─── Fullscreen Spotify-Style Immersion Player ──────────── */}
      {showFullscreenMode && (
        <div 
          className="fixed inset-0 z-[120] bg-black flex flex-col justify-between p-6 sm:p-12 font-mono select-none overflow-hidden"
          style={{ '--player-accent': themeColor } as React.CSSProperties}
        >
          {/* Ambient dynamic radial halo */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[180px] opacity-25 pointer-events-none transition-all duration-1000"
            style={{ backgroundColor: themeColor }}
          ></div>

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
                MELOVOID // IMMERSION MODE
              </span>
            </div>

            <button
              onClick={() => setShowFullscreenMode(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
              title="Exit Fullscreen (ESC)"
            >
              <i className="fas fa-compress text-base"></i>
            </button>
          </div>

          {/* Center Stage: Rotating Vinyl Record & Large Artwork */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            <div className="relative flex items-center justify-center w-72 h-72 sm:w-96 sm:h-96 mb-8">
              
              {/* Spinning Vinyl Record */}
              <div 
                className={`absolute right-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full vinyl-grooves flex items-center justify-center transition-all duration-1000 ${
                  isPlaying ? 'translate-x-16 sm:translate-x-28 animate-spin-slow' : 'translate-x-6 sm:translate-x-12'
                }`}
              >
                <div 
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white/20 flex flex-col items-center justify-center text-center p-1 text-[8px] font-mono shadow-inner"
                  style={{ backgroundColor: themeColor }}
                >
                  <span className="font-bold text-black uppercase line-clamp-1">{currentSong.title}</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-black mt-1"></div>
                </div>
              </div>

              {/* Album Jacket */}
              <img 
                src={currentSong.coverImage} 
                alt={currentSong.title} 
                className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-2xl shadow-2xl object-cover border border-white/20"
                style={{
                  boxShadow: `0 25px 60px -15px ${themeColor}66`
                }}
              />
            </div>

            {/* Song Meta */}
            <div className="text-center max-w-xl">
              <h1 className="text-3xl sm:text-5xl font-orbitron font-black text-white uppercase tracking-wider mb-2">
                {currentSong.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 font-mono">
                {currentSong.artist}
              </p>
              <p className="text-sm text-gray-500 font-mono mt-1">
                {currentSong.album}
              </p>
            </div>
          </div>

          {/* Bottom Controls Bar */}
          <div className="relative z-10 max-w-3xl w-full mx-auto space-y-6">
            
            {/* Progress Slider */}
            <div className="flex items-center space-x-4 text-xs font-mono text-gray-400">
              <span>{formatTime(currentTime)}</span>
              <div 
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = (e.clientX - rect.left) / rect.width;
                  seek(pos * duration);
                }}
                className="flex-1 h-1.5 bg-white/20 hover:h-2.5 rounded-full relative cursor-pointer group transition-all"
              >
                <div 
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${progressPercentage}%`,
                    backgroundColor: themeColor
                  }}
                ></div>
              </div>
              <span>{formatTime(duration)}</span>
            </div>

            {/* Primary Controls Row */}
            <div className="flex items-center justify-between text-white">
              <button 
                onClick={() => toggleLikeSong(currentSong.id)}
                className={`text-2xl cursor-pointer transition-transform hover:scale-125 ${
                  isLiked ? 'text-emerald-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                <i className={`fa${isLiked ? 's' : 'r'} fa-heart`}></i>
              </button>

              <div className="flex items-center space-x-8">
                <button 
                  onClick={toggleShuffle} 
                  className={`text-xl cursor-pointer ${shuffleMode ? 'text-[var(--player-accent)]' : 'text-gray-400 hover:text-white'}`}
                >
                  <i className="fas fa-random"></i>
                </button>
                <button onClick={prevSong} className="text-2xl text-gray-300 hover:text-white cursor-pointer">
                  <i className="fas fa-step-backward"></i>
                </button>
                <button 
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer shadow-2xl"
                  style={{ backgroundColor: themeColor, color: '#000000' }}
                >
                  <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play ml-1'}`}></i>
                </button>
                <button onClick={nextSong} className="text-2xl text-gray-300 hover:text-white cursor-pointer">
                  <i className="fas fa-step-forward"></i>
                </button>
                <button 
                  onClick={toggleRepeat} 
                  className={`text-xl cursor-pointer ${repeatMode !== 'off' ? 'text-[var(--player-accent)]' : 'text-gray-400 hover:text-white'}`}
                >
                  <i className="fas fa-redo-alt"></i>
                </button>
              </div>

              <button 
                onClick={() => {
                  setShowFullscreenMode(false);
                  setShowLyricsModal(true);
                }}
                className="text-xl text-gray-400 hover:text-white cursor-pointer"
                title="View Lyrics"
              >
                <i className="fas fa-microphone-alt"></i>
              </button>
            </div>

          </div>

        </div>
      )}

      {/* ─── Circular Mobile Fullscreen Player ─────────────────── */}
      {showMobileFullPlayer && (
        <CircularMobilePlayer 
          currentSong={currentSong}
          currentTime={currentTime}
          duration={duration}
          progressPercentage={progressPercentage}
          isPlaying={isPlaying}
          togglePlay={togglePlay}
          nextSong={nextSong}
          prevSong={prevSong}
          seek={seek}
          toggleShuffle={toggleShuffle}
          shuffleMode={shuffleMode}
          toggleRepeat={toggleRepeat}
          repeatMode={repeatMode}
          isLiked={isLiked}
          toggleLike={() => toggleLikeSong(currentSong.id)}
          isMuted={isMuted}
          toggleMute={toggleMute}
          playbackSpeed={playbackSpeed}
          onCycleSpeed={handleCycleSpeed}
          onClose={() => setShowMobileFullPlayer(false)}
          onSlideToLyrics={() => {
            setShowMobileFullPlayer(false);
            setShowLyricsModal(true);
          }}
          onOpenQueue={() => {
            setShowMobileFullPlayer(false);
            setShowQueueDrawer(true);
          }}
          themeColor={themeColor}
        />
      )}
    </>
  );
};
