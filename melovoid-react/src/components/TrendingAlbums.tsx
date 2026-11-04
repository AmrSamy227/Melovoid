import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TRENDING_ALBUMS_LIST } from '../data/musicData';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import type { Album } from '../types/music';

export const TrendingAlbums: React.FC = () => {
  const navigate = useNavigate();
  const { currentSong, isPlaying, playSong, togglePlay } = useAudioPlayer();
  const [hoveredAlbumId, setHoveredAlbumId] = useState<string | null>(null);

  // Check if an album's song is currently streaming in global player
  const isAlbumCurrentlyPlaying = (album: Album) => {
    if (!isPlaying || !currentSong) return false;
    return (
      album.songs?.some((s) => s.id === currentSong.id) ||
      (currentSong.album?.toLowerCase() === album.title.toLowerCase() &&
       currentSong.artist?.toLowerCase() === album.artist.toLowerCase())
    );
  };

  // Instant audio play / pause for album opening track
  const handleToggleAlbumAudio = (e: React.MouseEvent, album: Album) => {
    e.stopPropagation();
    if (isAlbumCurrentlyPlaying(album)) {
      togglePlay();
    } else {
      if (album.songs && album.songs.length > 0) {
        playSong(album.songs[0], album.songs);
      }
    }
  };

  const getAlbumYear = (album: Album): number => {
    const match = album.releaseDate?.match(/\b(19\d{2}|20\d{2})\b/);
    return match ? parseInt(match[1], 10) : 2000;
  };

  return (
    <section id="trending-albums-section" className="py-16 md:py-24 relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[10px] font-mono tracking-widest text-emerald-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>DISCOGRAPHY // ESSENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-orbitron font-black uppercase tracking-wider text-white">
              Trending Albums
            </h2>
          </div>

          <button 
            onClick={() => navigate('/albums')}
            className="self-start sm:self-auto inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white uppercase tracking-widest transition-colors py-1 cursor-pointer"
          >
            <span>Explore All 40 Releases</span>
            <i className="fas fa-arrow-right text-[10px]"></i>
          </button>
        </div>
        
        {/* Albums Grid (2 cols on mobile, 4 on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
          {TRENDING_ALBUMS_LIST.map((album) => {
            const year = getAlbumYear(album);
            const isPlayingNow = isAlbumCurrentlyPlaying(album);
            const isHovered = hoveredAlbumId === album.id;
            const accent = album.accentColor || '#ff6e40';
            const leadSong = album.songs?.[0]?.title || 'Airbag';

            return (
              <div 
                key={album.id}
                onClick={() => navigate(`/album/${album.id}`)}
                onMouseEnter={() => setHoveredAlbumId(album.id)}
                onMouseLeave={() => setHoveredAlbumId(null)}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer border border-white/15 bg-neutral-950/80 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between p-2.5 sm:p-3.5 md:p-4"
                style={{
                  boxShadow: isHovered || isPlayingNow ? `0 15px 35px -10px ${accent}44` : 'none',
                  borderColor: isHovered || isPlayingNow ? `${accent}88` : 'rgba(255,255,255,0.12)'
                }}
              >
                {/* Tech Brackets */}
                <span className="absolute top-2 left-2 text-[8px] sm:text-[9px] font-mono text-white/30 z-20 pointer-events-none">┌</span>
                <span className="absolute top-2 right-2 text-[8px] sm:text-[9px] font-mono text-white/30 z-20 pointer-events-none">┐</span>
                <span className="absolute bottom-2 left-2 text-[8px] sm:text-[9px] font-mono text-white/30 z-20 pointer-events-none">└</span>
                <span className="absolute bottom-2 right-2 text-[8px] sm:text-[9px] font-mono text-white/30 z-20 pointer-events-none">┘</span>

                {/* Top Badges */}
                <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-gray-400 mb-2 sm:mb-3 z-10">
                  <span className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full bg-white/10 border border-white/15 text-white">
                    {year}
                  </span>

                  {isPlayingNow ? (
                    <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[8px] sm:text-[9px]">
                      <span className="w-1 h-2 sm:h-2.5 bg-emerald-400 rounded-full wave-bar-1 inline-block"></span>
                      <span className="w-1 h-2 sm:h-2.5 bg-emerald-400 rounded-full wave-bar-2 inline-block"></span>
                      <span className="w-1 h-2 sm:h-2.5 bg-emerald-400 rounded-full wave-bar-3 inline-block"></span>
                      <span className="uppercase font-bold tracking-wider hidden xs:inline sm:inline">LIVE</span>
                    </div>
                  ) : (
                    <span className="text-gray-400 uppercase tracking-wider text-[8px] sm:text-[10px]">
                      {album.songs?.length || 10} Trks
                    </span>
                  )}
                </div>

                {/* 3D Vinyl Gatefold Cover Art */}
                <div className="relative w-full aspect-square mb-2.5 sm:mb-3.5 rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center">
                  
                  {/* Sliding Vinyl LP */}
                  <div 
                    className={`absolute right-1 sm:right-2 w-[85%] aspect-square rounded-full vinyl-grooves transition-transform duration-500 flex items-center justify-center ${
                      isPlayingNow
                        ? 'translate-x-6 sm:translate-x-10 animate-spin-slow'
                        : 'group-hover:translate-x-5 sm:group-hover:translate-x-8 translate-x-0'
                    }`}
                  >
                    <div 
                      className="w-8 h-8 sm:w-11 sm:h-11 rounded-full border border-white/20 flex flex-col items-center justify-center text-center p-0.5 text-[5px] sm:text-[6px] font-mono"
                      style={{ backgroundColor: accent }}
                    >
                      <span className="font-bold text-black uppercase line-clamp-1">{album.title}</span>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black mt-0.5"></div>
                    </div>
                  </div>

                  {/* Album Cover */}
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="relative z-10 w-full h-full object-cover rounded-lg sm:rounded-xl shadow-md group-hover:shadow-2xl transition-all duration-500"
                  />

                  {/* Quick Play Overlay Button */}
                  <div 
                    onClick={(e) => handleToggleAlbumAudio(e, album)}
                    className="absolute inset-0 z-20 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                  >
                    <div 
                      className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center text-black shadow-2xl transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: isPlayingNow ? '#10B981' : accent }}
                      title={isPlayingNow ? 'Pause Stream' : `Play Opening Track`}
                    >
                      <i className={`fas ${isPlayingNow ? 'fa-pause' : 'fa-play ml-0.5'} text-xs sm:text-sm md:text-base`}></i>
                    </div>
                  </div>
                </div>

                {/* Album Info */}
                <div className="flex flex-col z-10">
                  <div className="text-[10px] sm:text-xs font-mono text-gray-400 group-hover:text-white transition-colors mb-0.5 truncate">
                    {album.artist}
                  </div>

                  <h3 
                    className="font-orbitron text-xs sm:text-sm md:text-base font-black uppercase tracking-wider text-white mb-1 sm:mb-1.5 truncate group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                    style={{
                      backgroundImage: isHovered ? `linear-gradient(to right, #ffffff, ${accent})` : undefined
                    }}
                  >
                    {album.title}
                  </h3>

                  <div className="inline-flex items-center gap-1 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded bg-black/50 border border-white/10 text-[9px] sm:text-[10px] font-mono text-gray-300 mb-2 truncate self-start max-w-full">
                    <i className="fas fa-music text-[8px]" style={{ color: accent }}></i>
                    <span className="truncate">Lead: <strong className="text-white font-medium">{leadSong}</strong></span>
                  </div>

                  <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-xs font-mono">
                    <span className="text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest text-[9px] sm:text-[10px] flex items-center gap-1">
                      <span>Gatefold</span>
                      <i 
                        className="fas fa-arrow-right text-[8px] transform group-hover:translate-x-1 transition-transform duration-300"
                        style={{ color: accent }}
                      ></i>
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-gray-500 uppercase">LP</span>
                  </div>
                </div>

                {/* Bottom Strip */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: accent }}
                ></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
