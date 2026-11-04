import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BANDS_RICH } from '../data/musicData';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { Footer } from '../components/Footer';

export const ArtistPage: React.FC = () => {
  const { artistId } = useParams<{ artistId: string }>();
  const navigate = useNavigate();
  const { currentSong, isPlaying, playSong } = useAudioPlayer();

  const artist = BANDS_RICH.find((b) => b.id === artistId);

  const [activeTab, setActiveTab] = useState<'popular' | 'albums' | 'singles'>('popular');
  const [videoHovered, setVideoHovered] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);

  const popularScrollRef = useRef<HTMLDivElement | null>(null);
  const albumsScrollRef = useRef<HTMLDivElement | null>(null);
  const singlesScrollRef = useRef<HTMLDivElement | null>(null);
  const fansScrollRef = useRef<HTMLDivElement | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab('popular');
  }, [artistId]);

  if (!artist) {
    return (
      <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white">
        <h2 className="text-3xl font-orbitron font-bold">Artist Not Found</h2>
        <Link to="/" className="mt-4 text-[var(--page-accent)] hover:underline font-mono">Back to Home</Link>
      </div>
    );
  }

  const handlePlayRandomPopular = () => {
    if (artist.popularTracks.length > 0) {
      const randomIndex = Math.floor(Math.random() * artist.popularTracks.length);
      playSong(artist.popularTracks[randomIndex], artist.popularTracks);
    }
  };

  const handleVideoHoverEnter = () => {
    setVideoHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = isVideoMuted;
      videoRef.current.play().catch((err) => {
        // Fallback if browser requires user interaction before unmuted autoplay
        if (err.name === 'NotAllowedError') {
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsVideoMuted(true);
            videoRef.current.play().catch(() => {});
          }
        }
      });
    }
  };

  const handleVideoHoverLeave = () => {
    setVideoHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Generic horizontal slider scroll action
  const scrollContainer = (ref: React.RefObject<HTMLDivElement | null>, offset: number) => {
    if (ref.current) {
      ref.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-white bg-black z-10 font-orbitron">
      {/* Hero Header Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={artist.headerImage} 
            alt={artist.name} 
            className="w-full h-full object-cover object-top filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* Text Details with pl-20 alignment */}
        <div className="absolute bottom-6 left-6 right-6 z-10 pl-4 md:pl-20">
          <h1 
            className="text-4xl md:text-6xl font-orbitron font-black uppercase tracking-widest text-transparent mb-2"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}
          >
            {artist.name}
          </h1>
          
          <div className="flex items-center space-x-6 text-sm text-gray-200 mb-6 font-mono">
            <span className="text-2xl font-bold text-white font-orbitron">{artist.listeners}</span>
            <span>monthly listeners</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Custom styled Play Button */}
            <button 
              onClick={handlePlayRandomPopular}
              className="w-12 h-12 flex items-center justify-center rounded-full text-white hover:scale-110 transition-transform cursor-pointer shadow-lg"
              style={{ backgroundColor: artist.accentColor || '#DC2626' }}
            >
              <i className="fas fa-play text-sm"></i>
            </button>

            <button className="px-6 py-2 border border-white hover:bg-white hover:text-black rounded-full text-white font-mono text-sm tracking-wider transition-all cursor-pointer">
              Follow
            </button>
            
            <button className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-all cursor-pointer">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Popular Tracks Grid */}
      <section className="py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Popular</h2>
            <h2 className="text-2xl font-bold">Popular</h2>
            <button className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">See more</button>
          </div>

          <div className="space-y-2">
            {artist.popularTracks.map((song, index) => {
              const isCurrent = currentSong?.id === song.id;
              const showPauseIcon = isCurrent && isPlaying;

              return (
                <div 
                  key={song.id}
                  onClick={() => playSong(song, artist.popularTracks)}
                  className="track-item flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-all group cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-4 text-center">
                      <span className="track-number text-gray-400 text-sm group-hover:opacity-0 transition-opacity">
                        {index + 1}
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <i className={`bx text-xs text-white ${showPauseIcon ? 'bx-pause' : 'bx-play'}`}></i>
                      </div>
                    </div>
                    <img 
                      src={song.coverImage} 
                      className="w-10 h-10 rounded object-cover" 
                      alt={song.title} 
                    />
                    <div>
                      <p className={`font-medium ${isCurrent ? 'text-red-500' : 'text-white'}`}>{song.title}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
                      <i className="fas fa-heart text-xs"></i>
                    </button>
                    <span className="text-gray-400 text-sm font-mono">3:50</span>
                    <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer">
                      <i className="fas fa-ellipsis-h text-xs"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Discography Filter Slider Tabs */}
      <section className="py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Discography</h2>
            <button 
              onClick={() => setActiveTab('popular')}
              className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Show all
            </button>
          </div>

          {/* Filter Navigation Tabs */}
          <div className="flex space-x-6 border-b border-neutral-900 mb-8 font-mono text-sm">
            <button 
              onClick={() => setActiveTab('popular')}
              className={`pb-2 transition-all cursor-pointer ${
                activeTab === 'popular' 
                  ? 'text-white font-medium border-b-2' 
                  : 'text-gray-400 hover:text-white'
              }`}
              style={{ borderBottomColor: activeTab === 'popular' ? (artist.accentColor || '#DC2626') : 'transparent' }}
            >
              Popular releases
            </button>
            <button 
              onClick={() => setActiveTab('albums')}
              className={`pb-2 transition-all cursor-pointer ${
                activeTab === 'albums' 
                  ? 'text-white font-medium border-b-2' 
                  : 'text-gray-400 hover:text-white'
              }`}
              style={{ borderBottomColor: activeTab === 'albums' ? (artist.accentColor || '#DC2626') : 'transparent' }}
            >
              Albums
            </button>
            <button 
              onClick={() => setActiveTab('singles')}
              className={`pb-2 transition-all cursor-pointer ${
                activeTab === 'singles' 
                  ? 'text-white font-medium border-b-2' 
                  : 'text-gray-400 hover:text-white'
              }`}
              style={{ borderBottomColor: activeTab === 'singles' ? (artist.accentColor || '#DC2626') : 'transparent' }}
            >
              Singles and EPs
            </button>
          </div>

          {/* Popular Releases Carousel */}
          <div className={`relative ${activeTab === 'popular' ? '' : 'hidden'}`}>
            <div 
              ref={popularScrollRef}
              className="flex gap-6 overflow-x-auto no-scrollbar py-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {artist.popularReleases.map((release, i) => (
                <div key={i} className="min-w-[200px] w-[200px] flex-shrink-0 group">
                  <div 
                    onClick={() => release.albumRoute && navigate(release.albumRoute)}
                    className="bg-white/5 p-4 rounded-lg transition-all hover:bg-white/10 cursor-pointer"
                  >
                    <img 
                      src={release.cover} 
                      className="w-full aspect-square rounded-lg object-cover mb-4 group-hover:scale-105 transition-transform duration-300" 
                      alt={release.title} 
                    />
                    <h3 className="font-semibold text-sm truncate text-white mb-1">{release.title}</h3>
                    <p className="text-xs text-gray-400 font-mono">{release.year} • {release.type}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Control buttons */}
            <button 
              onClick={() => scrollContainer(popularScrollRef, -300)}
              className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-neutral-800 flex items-center justify-center hover:bg-white/10 cursor-pointer text-white"
            >
              <i className="fas fa-chevron-left"></i>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              onClick={() => scrollContainer(popularScrollRef, 300)}
              className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-neutral-800 flex items-center justify-center hover:bg-white/10 cursor-pointer text-white"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Albums Carousel */}
          <div className={`relative ${activeTab === 'albums' ? '' : 'hidden'}`}>
            <div 
              ref={albumsScrollRef}
              className="flex gap-6 overflow-x-auto no-scrollbar py-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {artist.albumsList.map((release, i) => (
                <div key={i} className="min-w-[200px] w-[200px] flex-shrink-0 group">
                  <div 
                    onClick={() => release.albumRoute && navigate(release.albumRoute)}
                    className="bg-white/5 p-4 rounded-lg transition-all hover:bg-white/10 cursor-pointer"
                  >
                    <img 
                      src={release.cover} 
                      className="w-full aspect-square rounded-lg object-cover mb-4 group-hover:scale-105 transition-transform duration-300" 
                      alt={release.title} 
                    />
                    <h3 className="font-semibold text-sm truncate text-white mb-1">{release.title}</h3>
                    <p className="text-xs text-gray-400 font-mono">{release.year} • {release.type}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Control buttons */}
            <button 
              onClick={() => scrollContainer(albumsScrollRef, -300)}
              className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-neutral-800 flex items-center justify-center hover:bg-white/10 cursor-pointer text-white"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              onClick={() => scrollContainer(albumsScrollRef, 300)}
              className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-neutral-800 flex items-center justify-center hover:bg-white/10 cursor-pointer text-white"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Singles Carousel */}
          <div className={`relative ${activeTab === 'singles' ? '' : 'hidden'}`}>
            <div 
              ref={singlesScrollRef}
              className="flex gap-6 overflow-x-auto no-scrollbar py-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {artist.singlesList.map((release, i) => (
                <div key={i} className="min-w-[200px] w-[200px] flex-shrink-0 group">
                  <div className="bg-white/5 p-4 rounded-lg transition-all hover:bg-white/10 cursor-pointer">
                    <img 
                      src={release.cover} 
                      className="w-full aspect-square rounded-lg object-cover mb-4 group-hover:scale-105 transition-transform duration-300" 
                      alt={release.title} 
                    />
                    <h3 className="font-semibold text-sm truncate text-white mb-1">{release.title}</h3>
                    <p className="text-xs text-gray-400 font-mono">{release.year} • {release.type}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Control buttons */}
            <button 
              onClick={() => scrollContainer(singlesScrollRef, -300)}
              className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-neutral-800 flex items-center justify-center hover:bg-white/10 cursor-pointer text-white"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              onClick={() => scrollContainer(singlesScrollRef, 300)}
              className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-neutral-800 flex items-center justify-center hover:bg-white/10 cursor-pointer text-white"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

        </div>
      </section>

      {/* About Section with hover video effect */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">About</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left video/image hover card */}
            <div 
              onMouseEnter={handleVideoHoverEnter}
              onMouseLeave={handleVideoHoverLeave}
              className="relative group cursor-pointer pr-0 md:pr-12 rounded-lg overflow-hidden"
            > 
              <img 
                src={artist.aboutImage} 
                className={`w-full rounded-lg transition-all duration-700 ${
                  videoHovered ? 'opacity-0' : 'opacity-100'
                }`} 
                alt={`${artist.name} biography cover`} 
              />
              <video 
                ref={videoRef}
                src={artist.trailerVideo} 
                playsInline
                className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-all duration-700 ${
                  videoHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Video Audio indicator / mute toggle */}
              {videoHovered && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const newMuted = !isVideoMuted;
                    setIsVideoMuted(newMuted);
                    if (videoRef.current) {
                      videoRef.current.muted = newMuted;
                    }
                  }}
                  className="absolute bottom-4 right-16 z-20 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-mono flex items-center gap-2 hover:bg-white/20 transition-all cursor-pointer shadow-lg active:scale-95"
                  title={isVideoMuted ? "Unmute Video Audio" : "Mute Video Audio"}
                >
                  <i className={`fas ${isVideoMuted ? 'fa-volume-mute text-red-400' : 'fa-volume-up text-emerald-400'}`}></i>
                  <span>{isVideoMuted ? 'MUTED' : 'AUDIO ON'}</span>
                </button>
              )}
            </div>
            
            {/* Biography facts */}
            <div>
              <div className="flex items-center mb-6">
                <span className="stat-number text-4xl font-black mr-4 text-white font-orbitron">{artist.worldRank}</span>
                <span className="text-lg text-gray-300">in the world</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 font-mono text-sm">
                {artist.aboutBio}
              </p>
              
              <div className="text-gray-300 font-mono text-sm">
                <p className="mb-2">
                  <span className="font-bold text-white font-orbitron text-lg mr-2">{artist.listeners}</span> 
                  monthly listeners
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Fans Also Like Carousel */}
      <section className="py-12 border-t border-neutral-900 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Fans also like</h2>
            <button className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">Show all</button>
          </div>

          <div className="relative">
            <div 
              ref={fansScrollRef}
              className="flex gap-8 overflow-x-auto no-scrollbar py-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {artist.fansAlsoLikeList.map((fan, i) => (
                <div key={i} className="text-center min-w-[150px] w-[150px] flex-shrink-0">
                  <Link to={fan.route} className="block hover:opacity-80 transition group">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border border-neutral-800 group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={fan.avatar} 
                        className="w-full h-full object-cover" 
                        alt={fan.name} 
                      />
                    </div>
                    <h3 className="font-semibold text-sm mb-1 text-white truncate">{fan.name}</h3>
                    <p className="text-xs text-gray-400 font-mono">Artist</p>
                  </Link>
                </div>
              ))}
            </div>

            {/* Slider Control buttons */}
            <button 
              onClick={() => scrollContainer(fansScrollRef, -300)}
              className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-neutral-800 flex items-center justify-center hover:bg-white/10 cursor-pointer text-white z-10"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              onClick={() => scrollContainer(fansScrollRef, 300)}
              className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-neutral-800 flex items-center justify-center hover:bg-white/10 cursor-pointer text-white z-10"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};
