import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BANDS_RICH } from '../data/musicData';
import type { BandRichInfo } from '../data/musicData';
import { useAudioPlayer } from '../context/AudioPlayerContext';

export const BandsCarousel: React.FC = () => {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const { currentSong, isPlaying, playSong, togglePlay } = useAudioPlayer();

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragMoved, setDragMoved] = useState(false);
  const [hoveredBandId, setHoveredBandId] = useState<string | null>(null);

  // Check if a band's track is playing in player
  const isBandCurrentlyPlaying = (band: BandRichInfo) => {
    if (!isPlaying || !currentSong) return false;
    const bandNameClean = band.name.toLowerCase();
    const currentArtistClean = (currentSong.artist || '').toLowerCase();
    return (
      currentArtistClean.includes(bandNameClean) ||
      bandNameClean.includes(currentArtistClean) ||
      (band.popularTracks && band.popularTracks.some((t) => t.id === currentSong.id))
    );
  };

  // Instant preview toggle
  const handleToggleBandAudio = (e: React.MouseEvent, band: BandRichInfo) => {
    e.stopPropagation();
    if (isBandCurrentlyPlaying(band)) {
      togglePlay();
    } else {
      if (band.popularTracks && band.popularTracks.length > 0) {
        playSong(band.popularTracks[0], band.popularTracks);
      }
    }
  };

  const nextBands = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  const prevBands = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setDragMoved(false);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
    if (Math.abs(walk) > 6) {
      setDragMoved(true);
    }
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseEnterCard = (e: React.MouseEvent<HTMLDivElement>, bandId: string) => {
    setHoveredBandId(bandId);
    const video = e.currentTarget.querySelector('video') as HTMLVideoElement | null;
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  const handleMouseLeaveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    setHoveredBandId(null);
    const video = e.currentTarget.querySelector('video') as HTMLVideoElement | null;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section id="bands-section" className="py-16 md:py-24 relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[10px] font-mono tracking-widest text-emerald-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>SONIC ROSTER // TITANS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-orbitron font-black uppercase tracking-wider text-white">
              Curated Artists
            </h2>
          </div>

          <button 
            onClick={() => navigate('/artists')}
            className="self-start sm:self-auto inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white uppercase tracking-widest transition-colors py-1 cursor-pointer"
          >
            <span>Explore Roster</span>
            <i className="fas fa-arrow-right text-[10px]"></i>
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className={`flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar py-2 cursor-grab ${
              isDragging ? 'cursor-grabbing active' : ''
            }`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {BANDS_RICH.map((band: BandRichInfo) => {
              const isPlayingNow = isBandCurrentlyPlaying(band);
              const isHovered = hoveredBandId === band.id;
              const accent = band.accentColor || '#ff6e40';

              return (
                <div
                  key={band.id}
                  onClick={() => {
                    if (!dragMoved) navigate(band.route);
                  }}
                  onMouseEnter={(e) => handleMouseEnterCard(e, band.id)}
                  onMouseLeave={handleMouseLeaveCard}
                  className="group relative min-w-[270px] w-[270px] sm:min-w-[320px] sm:w-[320px] h-[360px] sm:h-[400px] shrink-0 rounded-2xl overflow-hidden cursor-pointer border border-white/15 bg-neutral-950/80 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
                  style={{
                    boxShadow: isHovered || isPlayingNow ? `0 20px 45px -10px ${accent}44` : 'none',
                    borderColor: isHovered || isPlayingNow ? `${accent}88` : 'rgba(255,255,255,0.12)'
                  }}
                >
                  {/* Subtle Tech Corner Brackets */}
                  <span className="absolute top-2.5 left-2.5 text-[9px] font-mono text-white/30 z-20 pointer-events-none">┌</span>
                  <span className="absolute top-2.5 right-2.5 text-[9px] font-mono text-white/30 z-20 pointer-events-none">┐</span>
                  <span className="absolute bottom-2.5 left-2.5 text-[9px] font-mono text-white/30 z-20 pointer-events-none">└</span>
                  <span className="absolute bottom-2.5 right-2.5 text-[9px] font-mono text-white/30 z-20 pointer-events-none">┘</span>

                  {/* Card Background Media: Video & Fallback Image */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                      src={band.headerImage} 
                      alt={band.name}
                      className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] group-hover:scale-105 transition-transform duration-700"
                    />

                    {band.videoSrc && (
                      <video
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-85 transition-opacity duration-700"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      >
                        <source src={band.videoSrc} type={band.videoSrc.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
                      </video>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
                  </div>

                  {/* Top Badges */}
                  <div className="relative z-10 p-4 flex items-center justify-between pointer-events-none">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-[10px] font-mono tracking-wider text-white shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }}></span>
                      <span>RANK {band.worldRank}</span>
                    </div>

                    {isPlayingNow ? (
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[9px] font-mono tracking-widest">
                        <span className="w-1 h-3 bg-emerald-400 rounded-full wave-bar-1 inline-block"></span>
                        <span className="w-1 h-3 bg-emerald-400 rounded-full wave-bar-2 inline-block"></span>
                        <span className="w-1 h-3 bg-emerald-400 rounded-full wave-bar-3 inline-block"></span>
                        <span className="uppercase font-bold">STREAMING</span>
                      </div>
                    ) : (
                      <div className="px-2 py-0.5 rounded-full bg-white/[0.07] border border-white/10 backdrop-blur-md text-[9px] font-mono uppercase tracking-widest text-gray-300">
                        {band.listeners} listeners
                      </div>
                    )}
                  </div>

                  {/* Center Instant Play Button */}
                  <div className="relative z-10 flex items-center justify-center pointer-events-none my-auto">
                    <button
                      onClick={(e) => handleToggleBandAudio(e, band)}
                      className={`pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl cursor-pointer ${
                        isPlayingNow
                          ? 'scale-100 opacity-100 text-black shadow-emerald-500/50'
                          : 'opacity-0 group-hover:opacity-100 group-hover:scale-110 text-black'
                      }`}
                      style={{
                        backgroundColor: isPlayingNow ? '#10B981' : accent,
                        boxShadow: `0 0 25px ${isPlayingNow ? '#10B981' : accent}99`
                      }}
                      title={isPlayingNow ? 'Pause Preview' : `Preview track`}
                    >
                      <i className={`fas ${isPlayingNow ? 'fa-pause' : 'fa-play ml-0.5'} text-base`}></i>
                    </button>
                  </div>

                  {/* Bottom Content Monolith */}
                  <div className="relative z-10 p-5 pt-0 flex flex-col pointer-events-none">
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">
                      MELOVOID // ICON
                    </div>

                    <h3 
                      className="font-orbitron text-xl sm:text-2xl font-black uppercase tracking-wider text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                      style={{
                        backgroundImage: isHovered ? `linear-gradient(to right, #ffffff, ${accent})` : undefined
                      }}
                    >
                      {band.name}
                    </h3>

                    {/* Action Row */}
                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                      <span className="text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest text-[11px] flex items-center gap-1.5">
                        <span>Enter Void</span>
                        <i 
                          className="fas fa-arrow-right text-[9px] transform group-hover:translate-x-1.5 transition-transform duration-300"
                          style={{ color: accent }}
                        ></i>
                      </span>
                    </div>
                  </div>

                  {/* Bottom Accent Strip */}
                  <div 
                    className="h-1 w-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: accent }}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-end items-center gap-3 mt-6">
            <button 
              onClick={prevBands} 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer hover:scale-105"
              title="Previous"
            >
              <i className="fas fa-chevron-left text-xs"></i>
            </button>
            <button 
              onClick={nextBands} 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer hover:scale-105"
              title="Next"
            >
              <i className="fas fa-chevron-right text-xs"></i>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
