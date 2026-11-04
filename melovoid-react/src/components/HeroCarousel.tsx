import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HERO_SLIDES, ALBUMS } from '../data/musicData';
import { useAudioPlayer } from '../context/AudioPlayerContext';

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { currentSong, isPlaying, playSong, togglePlay } = useAudioPlayer();
  const navigate = useNavigate();
  const totalSlides = HERO_SLIDES.length;

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleListen = (albumId: string) => {
    const album = ALBUMS[albumId];
    if (!album) return;

    if (isAlbumPlaying(slideItem.albumTitle)) {
      togglePlay();
    } else if (album.songs && album.songs.length > 0) {
      playSong(album.songs[0], album.songs);
    }
  };

  const slideItem = HERO_SLIDES[currentSlide];

  // Check if an album's song is currently streaming in global player
  const isAlbumPlaying = (title: string) => {
    if (!isPlaying || !currentSong) return false;
    return (
      currentSong.album?.toLowerCase() === title.toLowerCase() ||
      title.toLowerCase().includes(currentSong.album?.toLowerCase() || '')
    );
  };

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16 select-none">
      {/* Ambient background glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-orange-500/10 via-purple-600/5 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Carousel Wrapper */}
        <div className="relative">
          
          <div className="relative overflow-hidden">
            <div 
              className="carousel-track flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {HERO_SLIDES.map((slide) => {
                const isPlayingThis = isAlbumPlaying(slide.albumTitle);
                const albumObj = ALBUMS[slide.albumId];
                const accent = albumObj?.accentColor || '#f97316';

                return (
                  <div 
                    key={slide.albumId} 
                    className="w-full shrink-0 px-2 sm:px-6"
                  >
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-5xl mx-auto">
                      
                      {/* Left: 3D Vinyl Gatefold Showcase */}
                      <div className="flex justify-center items-center relative">
                        <div className="relative flex items-center justify-center w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80">
                          
                          {/* Sliding / Spinning Vinyl LP */}
                          <div 
                            className={`absolute right-0 w-48 h-48 sm:w-64 sm:h-64 rounded-full vinyl-grooves flex items-center justify-center transition-all duration-700 ${
                              isPlayingThis ? 'translate-x-10 sm:translate-x-16 animate-spin-slow' : 'translate-x-6 sm:translate-x-10'
                            }`}
                          >
                            <div 
                              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/20 flex flex-col items-center justify-center text-center p-1 text-[7px] font-mono shadow-inner"
                              style={{ backgroundColor: accent }}
                            >
                              <span className="font-bold text-black uppercase line-clamp-1">{slide.albumTitle}</span>
                              <div className="w-2 h-2 rounded-full bg-black mt-0.5"></div>
                            </div>
                          </div>

                          {/* Album Cover Art Jacket */}
                          <div 
                            onClick={() => navigate(slide.route)}
                            className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-2xl border border-white/20 cursor-pointer group hover:scale-[1.02] transition-transform duration-300"
                            style={{
                              boxShadow: `0 20px 50px -15px ${accent}44`
                            }}
                          >
                            <img 
                              src={slide.coverImage} 
                              alt={slide.albumTitle} 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.currentTarget;
                                if (slide.albumId === 'nevermind' && !target.src.includes('nevermind.jpeg')) {
                                  target.src = '/nirvana-nevermind-1991/nevermind.jpeg';
                                }
                              }}
                            />
                            
                            {/* Glass Badge on Cover */}
                            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[10px] font-mono text-white">
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }}></span>
                              <span className="uppercase">{slide.artistTag}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right: Album Details & Actions */}
                      <div className="text-center md:text-left space-y-4 sm:space-y-6">
                        
                        {/* Top Category Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[11px] font-mono tracking-widest text-white">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }}></span>
                          <span>MASTER ARCHIVE // SPOTLIGHT</span>
                        </div>

                        {/* Title & Artist */}
                        <div>
                          <h1 
                            className="text-3xl sm:text-5xl lg:text-6xl font-orbitron font-black uppercase tracking-wider mb-2 text-white"
                          >
                            {slide.albumTitle}
                          </h1>
                          <h2 
                            className="text-xl sm:text-2xl lg:text-3xl font-orbitron font-bold uppercase tracking-wide"
                            style={{ color: accent }}
                          >
                            {slide.artistName}
                          </h2>
                          <p className="text-gray-400 font-mono text-xs sm:text-sm mt-2 tracking-wider">
                            {slide.releaseDate} • Master Stereo Pressing
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start w-full pt-2">
                          <button 
                            onClick={() => handleListen(slide.albumId)}
                            className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-orbitron text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-xl cursor-pointer hover:scale-105"
                            style={{
                              backgroundColor: accent,
                              color: '#000000'
                            }}
                          >
                            {isPlayingThis ? (
                              <>
                                <i className="fas fa-pause text-sm"></i>
                                <span>Pause Stream</span>
                              </>
                            ) : (
                              <>
                                <i className="fas fa-play text-sm ml-0.5"></i>
                                <span>Stream Master</span>
                              </>
                            )}
                          </button>

                          <button 
                            onClick={() => navigate(slide.route)}
                            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-orbitron text-xs sm:text-sm font-bold tracking-wider uppercase bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md transition-all duration-300 cursor-pointer hover:scale-105"
                          >
                            <span>View Gatefold</span>
                            <i className="fas fa-arrow-right text-xs"></i>
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Dots Indicators */}
          <div className="flex justify-center mt-8 sm:mt-12 space-x-2 relative z-20">
            {HERO_SLIDES.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                title={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Carousel Arrow Navigation */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/40 hover:bg-black/80 border border-white/15 backdrop-blur-md rounded-full flex items-center justify-center transition-all z-20 cursor-pointer text-white shadow-xl hover:scale-110"
            title="Previous"
          >
            <i className="fas fa-chevron-left text-sm"></i>
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/40 hover:bg-black/80 border border-white/15 backdrop-blur-md rounded-full flex items-center justify-center transition-all z-20 cursor-pointer text-white shadow-xl hover:scale-110"
            title="Next"
          >
            <i className="fas fa-chevron-right text-sm"></i>
          </button>

        </div>
      </div>
    </section>
  );
};
