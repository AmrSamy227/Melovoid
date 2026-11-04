import React from 'react';
import { TRENDING_SONGS_LIST } from '../data/musicData';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { useUser } from '../context/UserContext';

export const TrendingSongs: React.FC = () => {
  const { currentSong, isPlaying, playSong, togglePlay } = useAudioPlayer();
  const { openAddToPlaylistModal } = useUser();

  return (
    <section id="trending-songs-section" className="py-16 md:py-24 relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[10px] font-mono tracking-widest text-emerald-400 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>CHARTS // HOT FREQUENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-orbitron font-black uppercase tracking-wider text-white">
            Trending Transmissions
          </h2>
          <p className="font-mono text-gray-400 text-xs sm:text-sm tracking-wider mt-1">
            The most streamed sonic signals across the void archive
          </p>
        </div>
        
        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {TRENDING_SONGS_LIST.map((song, index) => {
            const isCurrent = currentSong?.id === song.id;
            const isThisPlaying = isCurrent && isPlaying;

            return (
              <div 
                key={song.id}
                onClick={() => {
                  if (isCurrent) togglePlay();
                  else playSong(song, TRENDING_SONGS_LIST);
                }}
                className={`group relative p-3 sm:p-4 rounded-2xl flex items-center gap-3 sm:gap-4 cursor-pointer transition-all duration-300 border backdrop-blur-md ${
                  isCurrent 
                    ? 'bg-neutral-900/90 border-emerald-500/60 shadow-[0_10px_30px_rgba(16,185,129,0.15)] scale-[1.02]' 
                    : 'bg-black/50 hover:bg-neutral-900/70 border-white/10 hover:border-white/25 hover:scale-[1.02]'
                }`}
              >
                {/* Ranking Number */}
                <div className="w-6 sm:w-8 font-orbitron font-black text-sm sm:text-lg text-gray-500 group-hover:text-white transition-colors text-center shrink-0">
                  #{String(index + 1).padStart(2, '0')}
                </div>

                {/* Cover Image Container */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 shadow-lg border border-white/10">
                  <img 
                    src={song.coverImage} 
                    alt={song.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  {isThisPlaying && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-0.5">
                      <span className="w-1 h-3.5 bg-emerald-400 rounded-full wave-bar-1 inline-block"></span>
                      <span className="w-1 h-3.5 bg-emerald-400 rounded-full wave-bar-2 inline-block"></span>
                      <span className="w-1 h-3.5 bg-emerald-400 rounded-full wave-bar-3 inline-block"></span>
                    </div>
                  )}
                </div>

                {/* Song Meta */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-orbitron font-bold text-white text-sm sm:text-base truncate group-hover:text-emerald-400 transition-colors">
                    {song.title}
                  </h4>
                  <p className="text-gray-400 text-xs font-mono truncate mt-0.5">
                    {song.artist}
                  </p>
                  <p className="text-gray-500 text-[10px] font-mono truncate">
                    {song.album}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2 shrink-0">
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openAddToPlaylistModal(song);
                    }}
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/20 text-gray-400 hover:text-white flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 border border-white/10"
                    title="Add to Playlist"
                  >
                    <i className="fas fa-folder-plus text-xs"></i>
                  </button>

                  {/* Play Button */}
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isCurrent) togglePlay();
                      else playSong(song, TRENDING_SONGS_LIST);
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer ${
                      isThisPlaying
                        ? 'bg-emerald-500 text-black shadow-emerald-500/40 scale-105'
                        : 'bg-white/10 group-hover:bg-white text-white group-hover:text-black border border-white/20'
                    }`}
                    title={isThisPlaying ? 'Pause' : 'Play'}
                  >
                    <i className={`fas ${isThisPlaying ? 'fa-pause' : 'fa-play ml-0.5'} text-xs sm:text-sm`}></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
