import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALBUMS, BANDS_RICH, TRENDING_ALBUMS_LIST, ALBUM_BACKGROUNDS } from '../data/musicData';
import type { Song } from '../types/music';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { useUser } from '../context/UserContext';
import { Footer } from '../components/Footer';

export const AlbumPage: React.FC = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const {
    currentSong,
    isPlaying,
    playSong,
    togglePlay,
    addToQueue,
    toggleLikeSong,
    isSongLiked
  } = useAudioPlayer();

  const { openAddToPlaylistModal } = useUser();

  const [showShareToast, setShowShareToast] = useState(false);
  const [queuedSongId, setQueuedSongId] = useState<string | null>(null);

  const album = albumId ? ALBUMS[albumId] : null;
  const bgImg = albumId ? ALBUM_BACKGROUNDS[albumId] : '';

  // Match the band data for verified artist details & avatar
  const bandData = album
    ? BANDS_RICH.find(
        (b) => b.name.toLowerCase() === (album.artist || '').toLowerCase()
      )
    : null;

  const artistAvatar = bandData?.aboutImage || album?.coverImage || '';
  const themeColor = album?.accentColor || bandData?.accentColor || '#f97316';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [albumId]);

  // Check if a song from this album is currently actively playing
  const isThisAlbumPlaying = useMemo(() => {
    if (!isPlaying || !currentSong || !album) return false;
    return (
      album.songs.some((s) => s.id === currentSong.id) ||
      (currentSong.album?.toLowerCase() === album.title.toLowerCase() &&
        currentSong.artist?.toLowerCase() === album.artist.toLowerCase())
    );
  }, [isPlaying, currentSong, album]);

  // Calculate total album duration
  const totalAlbumDuration = useMemo(() => {
    if (!album || !album.songs || album.songs.length === 0) return '0 min';
    let totalSeconds = 0;
    album.songs.forEach((s) => {
      if (s.duration) {
        const parts = s.duration.split(':').map(Number);
        if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
          totalSeconds += parts[0] * 60 + parts[1];
        } else {
          totalSeconds += 225;
        }
      } else {
        totalSeconds += 225;
      }
    });
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins} min ${secs > 0 ? `${secs} sec` : ''}`;
  }, [album]);

  // Play / Pause Album
  const handlePlayAlbum = () => {
    if (!album || album.songs.length === 0) return;
    if (isThisAlbumPlaying) {
      togglePlay();
    } else {
      playSong(album.songs[0], album.songs);
    }
  };

  // Shuffle Album
  const handleShuffleAlbum = () => {
    if (!album || album.songs.length === 0) return;
    const shuffled = [...album.songs].sort(() => Math.random() - 0.5);
    playSong(shuffled[0], shuffled);
  };

  // Add song to queue with visual toast feedback
  const handleAddToQueue = (e: React.MouseEvent, song: Song) => {
    e.stopPropagation();
    addToQueue(song);
    setQueuedSongId(song.id);
    setTimeout(() => setQueuedSongId(null), 1800);
  };

  // Share Album Link
  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2400);
    }
  };

  if (!album) {
    return (
      <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white px-4">
        <h2 className="text-3xl font-orbitron font-bold">Album Not Found</h2>
        <p className="text-gray-400 font-mono text-sm mt-2">The requested release could not be located in the archive.</p>
        <Link 
          to="/albums" 
          className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-mono transition-all text-white"
        >
          Explore All Albums
        </Link>
      </div>
    );
  }

  // Related releases (excluding current album)
  const otherReleases = TRENDING_ALBUMS_LIST.filter((a) => a.id !== album.id);

  return (
    <div 
      className="relative min-h-screen text-white select-none overflow-x-hidden font-mono"
      style={{
        '--album-accent': themeColor
      } as React.CSSProperties}
    >
      {/* ─── Immersive Fixed Backdrop ─────────────────────────────── */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0 filter brightness-[0.22] contrast-125 scale-105 transition-all duration-1000"
        style={{ backgroundImage: bgImg ? `url('${bgImg}')` : 'none' }}
      ></div>

      {/* Atmospheric Audio-Reactive Radial Nebula */}
      <div 
        className="fixed top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[180px] opacity-20 pointer-events-none z-0 transition-all duration-1000"
        style={{ backgroundColor: themeColor }}
      ></div>

      {/* Noise Texture */}
      <div 
        className="fixed inset-0 w-full h-full opacity-10 pointer-events-none z-[1]" 
        style={{ background: 'url("/noise.webp") repeat' }}
      ></div>

      {/* ─── Share Link Copied Toast ────────────────────────────── */}
      {showShareToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] px-5 py-2.5 rounded-full bg-black/90 border border-emerald-500/50 text-emerald-400 font-mono text-xs flex items-center gap-2 shadow-2xl backdrop-blur-xl animate-fade-in">
          <i className="fas fa-check-circle text-sm"></i>
          <span>Album link copied to clipboard!</span>
        </div>
      )}

      {/* ─── Main Content Container ─────────────────────────────── */}
      <div className="relative z-[3] pb-32">
        
        {/* ─── Hero Section: 3D Vinyl Gatefold & Metadata ──────────── */}
        <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/albums" className="hover:text-white transition-colors">Albums</Link>
            <span>/</span>
            <span className="text-[var(--album-accent)] truncate max-w-xs">{album.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left: 3D Vinyl Sleeve Stage */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group flex items-center justify-center">
                
                {/* Dynamic Ambient Neon Glow */}
                <div 
                  className={`absolute inset-0 rounded-3xl blur-3xl transition-opacity duration-700 pointer-events-none ${
                    isThisAlbumPlaying ? 'opacity-40 animate-pulse' : 'opacity-20 group-hover:opacity-35'
                  }`}
                  style={{ backgroundColor: themeColor }}
                ></div>

                {/* Spinning Vinyl Record Peek */}
                <div 
                  className={`absolute right-0 w-60 h-60 sm:w-76 sm:h-76 md:w-88 md:h-88 rounded-full vinyl-grooves flex items-center justify-center transition-all duration-700 shadow-2xl z-0 ${
                    isThisAlbumPlaying 
                      ? 'translate-x-12 sm:translate-x-20 md:translate-x-24 animate-spin-slow' 
                      : 'translate-x-4 sm:translate-x-8 group-hover:translate-x-12 sm:group-hover:translate-x-16'
                  }`}
                >
                  {/* Vinyl Center Label */}
                  <div 
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-white/20 flex flex-col items-center justify-center text-center p-1.5 shadow-inner"
                    style={{ backgroundColor: themeColor }}
                  >
                    <span className="text-[8px] sm:text-[9px] font-mono font-bold text-black uppercase line-clamp-1">{album.title}</span>
                    <span className="text-[7px] font-mono text-black/75 truncate max-w-[80px]">{album.artist}</span>
                    <div className="w-2.5 h-2.5 rounded-full bg-black mt-1"></div>
                  </div>
                </div>

                {/* Front Gatefold Album Cover Jacket */}
                <div className="relative z-10 w-60 h-60 sm:w-76 sm:h-76 md:w-88 md:h-88 rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black/80">
                  <img 
                    src={album.coverImage} 
                    alt={album.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  {/* Subtle Gatefold Gloss Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none"></div>

                  {/* Active Equalizer Pill on Artwork */}
                  {isThisAlbumPlaying && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/30 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>STREAMING</span>
                      <div className="flex items-center gap-0.5 ml-1">
                        <span className="w-0.5 h-2.5 bg-emerald-400 rounded-full animate-bounce"></span>
                        <span className="w-0.5 h-3.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-0.5 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                      </div>
                    </div>
                  )}

                  {/* Album Type Corner Tag */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-mono text-gray-300 uppercase tracking-widest">
                    Stereo Master
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Album Metadata & Playback Console */}
            <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-5">
              
              {/* Category / Landmarker Pill */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-mono tracking-widest text-[var(--album-accent)] font-semibold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--album-accent)] animate-pulse"></span>
                  Master Archive // Album
                </span>

                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono text-emerald-400 font-semibold tracking-wider uppercase">
                  Hi-Res 24-Bit / 96kHz
                </span>
              </div>

              {/* Album Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-orbitron font-black uppercase tracking-wider text-white leading-tight">
                {album.title}
              </h1>

              {/* Artist Details Row */}
              <div className="flex items-center justify-center lg:justify-start gap-3">
                {bandData ? (
                  <Link 
                    to={bandData.route} 
                    className="flex items-center gap-3 group hover:opacity-90 transition-opacity"
                  >
                    <img 
                      src={artistAvatar} 
                      alt={album.artist} 
                      className="w-11 h-11 rounded-full object-cover border-2 border-white/20 group-hover:border-[var(--album-accent)] transition-colors shadow-md"
                    />
                    <div>
                      <div className="flex items-center gap-1.5 font-orbitron font-bold text-base sm:text-lg text-white group-hover:text-[var(--album-accent)] transition-colors">
                        <span>{album.artist}</span>
                        <i className="fas fa-check-circle text-emerald-400 text-xs" title="Verified Artist"></i>
                      </div>
                      {bandData.listeners && (
                        <p className="text-[11px] font-mono text-gray-400">
                          {bandData.listeners} monthly listeners
                        </p>
                      )}
                    </div>
                  </Link>
                ) : (
                  <div className="flex items-center gap-3">
                    <img 
                      src={artistAvatar} 
                      alt={album.artist} 
                      className="w-11 h-11 rounded-full object-cover border-2 border-white/20"
                    />
                    <span className="font-orbitron font-bold text-base sm:text-lg text-white">{album.artist}</span>
                  </div>
                )}
              </div>

              {/* Release Info & Runtime Metrics Chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs font-mono text-gray-300 pt-1 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <i className="far fa-calendar-alt text-[var(--album-accent)]"></i>
                  <span>Released {album.releaseDate}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <i className="fas fa-list-ol text-[var(--album-accent)]"></i>
                  <span>{album.songs?.length || 0} Tracks</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <i className="far fa-clock text-[var(--album-accent)]"></i>
                  <span>{totalAlbumDuration}</span>
                </div>
              </div>

              {/* Primary Action Buttons Bar */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3">
                {/* Play / Pause Album Button */}
                <button 
                  onClick={handlePlayAlbum}
                  className="px-8 py-3.5 rounded-full font-orbitron font-bold text-sm tracking-wider uppercase flex items-center gap-3 transition-all cursor-pointer shadow-xl hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: themeColor,
                    color: '#000000',
                    boxShadow: isThisAlbumPlaying ? `0 0 30px ${themeColor}77` : '0 10px 25px rgba(0,0,0,0.5)'
                  }}
                >
                  <i className={`fas ${isThisAlbumPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                  <span>{isThisAlbumPlaying ? 'Pause Album' : 'Play Album'}</span>
                </button>

                {/* Shuffle Button */}
                <button 
                  onClick={handleShuffleAlbum}
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 font-mono text-xs uppercase tracking-wider text-white flex items-center gap-2 transition-all cursor-pointer active:scale-95"
                  title="Shuffle Album"
                >
                  <i className="fas fa-random text-sm text-[var(--album-accent)]"></i>
                  <span>Shuffle</span>
                </button>

                {/* Share Button */}
                <button 
                  onClick={handleShare}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer active:scale-95"
                  title="Share Album"
                >
                  <i className="fas fa-share-alt text-sm"></i>
                </button>

                {/* Like Album Heart Button */}
                {album.songs && album.songs.length > 0 && (
                  <button 
                    onClick={() => toggleLikeSong(album.songs[0].id)}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer active:scale-95"
                    title={isSongLiked(album.songs[0].id) ? 'Liked' : 'Like'}
                  >
                    <i className={`fa${isSongLiked(album.songs[0].id) ? 's text-emerald-400' : 'r text-gray-400'} fa-heart text-base`}></i>
                  </button>
                )}
              </div>

            </div>

          </div>
        </section>

        {/* ─── Tracklist Master Console ────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          <div className="bg-black/60 backdrop-blur-2xl rounded-3xl border border-white/10 p-5 sm:p-8 shadow-2xl">
            
            {/* Tracklist Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-orbitron font-bold uppercase tracking-wider text-white flex items-center gap-2.5">
                  <i className="fas fa-compact-disc text-[var(--album-accent)]"></i>
                  <span>Tracklist</span>
                </h2>
                <p className="text-xs text-gray-400 font-mono mt-1">
                  Click any track to stream in Hi-Res Lossless audio
                </p>
              </div>

              {/* Streaming Platform Badges */}
              <div className="flex items-center flex-wrap gap-2 text-xs font-mono">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest hidden sm:inline mr-1">Available On:</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5 text-[11px]">
                  <i className="fab fa-spotify text-emerald-400"></i> Spotify
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5 text-[11px]">
                  <i className="fab fa-apple text-white"></i> Apple
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5 text-[11px]">
                  <i className="fab fa-youtube text-red-500"></i> YouTube
                </span>
              </div>
            </div>

            {/* Track Table Header */}
            <div className="grid grid-cols-12 py-3 px-3 text-[11px] font-mono text-gray-400 uppercase tracking-widest border-b border-white/5 mt-2 select-none">
              <div className="col-span-1 text-center">#</div>
              <div className="col-span-7 sm:col-span-6 md:col-span-7">Title</div>
              <div className="hidden sm:block sm:col-span-2 md:col-span-2">Artist</div>
              <div className="col-span-4 sm:col-span-3 md:col-span-2 text-right pr-2">
                <i className="far fa-clock"></i>
              </div>
            </div>

            {/* Track Rows */}
            <div className="space-y-1.5 mt-2">
              {album.songs && album.songs.length > 0 ? (
                album.songs.map((song, index) => {
                  const isCurrent = currentSong?.id === song.id;
                  const isCurrentPlaying = isCurrent && isPlaying;
                  const isLiked = isSongLiked(song.id);
                  const isJustQueued = queuedSongId === song.id;

                  return (
                    <div 
                      key={song.id}
                      onClick={() => playSong(song, album.songs)}
                      className={`group grid grid-cols-12 items-center p-3 rounded-xl transition-all cursor-pointer ${
                        isCurrent 
                          ? 'bg-[var(--album-accent)]/15 border border-[var(--album-accent)]/40 shadow-lg' 
                          : 'hover:bg-white/5 border border-transparent hover:border-white/10'
                      }`}
                    >
                      {/* # Number or Play / Soundwave Icon */}
                      <div className="col-span-1 flex items-center justify-center text-sm font-mono">
                        {isCurrentPlaying ? (
                          <div className="flex items-end gap-0.5 h-4 w-4 justify-center">
                            <span className="w-1 bg-[var(--album-accent)] rounded-full animate-bounce [animation-duration:0.6s]"></span>
                            <span className="w-1 bg-[var(--album-accent)] rounded-full animate-bounce [animation-duration:0.9s] [animation-delay:0.2s]"></span>
                            <span className="w-1 bg-[var(--album-accent)] rounded-full animate-bounce [animation-duration:0.7s] [animation-delay:0.4s]"></span>
                          </div>
                        ) : (
                          <>
                            <span className={`group-hover:hidden ${isCurrent ? 'text-[var(--album-accent)] font-bold' : 'text-gray-400'}`}>
                              {index + 1}
                            </span>
                            <i className="fas fa-play text-xs text-[var(--album-accent)] hidden group-hover:block"></i>
                          </>
                        )}
                      </div>

                      {/* Song Title & Mobile Artist */}
                      <div className="col-span-7 sm:col-span-6 md:col-span-7 flex items-center space-x-3 min-w-0 pr-2">
                        <img 
                          src={song.coverImage || album.coverImage} 
                          alt={song.title} 
                          className="w-10 h-10 rounded-lg object-cover shadow border border-white/10 shrink-0" 
                        />
                        <div className="min-w-0 truncate">
                          <p className={`text-sm font-medium truncate ${
                            isCurrent 
                              ? 'text-white font-bold' 
                              : 'text-gray-200 group-hover:text-white'
                          }`}>
                            {song.title}
                          </p>
                          <p className="text-xs text-gray-400 truncate font-mono sm:hidden">
                            {song.artist}
                          </p>
                        </div>
                      </div>

                      {/* Desktop Artist Column */}
                      <div className="hidden sm:block sm:col-span-2 md:col-span-2 text-xs text-gray-400 font-mono truncate">
                        {song.artist}
                      </div>

                      {/* Duration & Action Buttons */}
                      <div className="col-span-4 sm:col-span-3 md:col-span-2 flex items-center justify-end space-x-2 sm:space-x-3 text-right">
                        {/* Like Heart Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLikeSong(song.id);
                          }}
                          className={`p-1.5 transition-transform cursor-pointer active:scale-125 ${
                            isLiked ? 'text-emerald-400' : 'text-gray-500 hover:text-white opacity-0 group-hover:opacity-100'
                          }`}
                          title={isLiked ? 'Remove from Liked' : 'Save to Liked'}
                        >
                          <i className={`fa${isLiked ? 's' : 'r'} fa-heart text-sm`}></i>
                        </button>

                        {/* Add to Queue Button */}
                        <button
                          onClick={(e) => handleAddToQueue(e, song)}
                          className={`p-1.5 transition-all cursor-pointer active:scale-95 ${
                            isJustQueued ? 'text-emerald-400 opacity-100' : 'text-gray-500 hover:text-white opacity-0 group-hover:opacity-100'
                          }`}
                          title={isJustQueued ? 'Added to Queue' : 'Add to Queue'}
                        >
                          <i className={`fas ${isJustQueued ? 'fa-check' : 'fa-plus'} text-xs`}></i>
                        </button>

                        {/* Add to Playlist Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openAddToPlaylistModal(song);
                          }}
                          className="p-1.5 text-gray-500 hover:text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          title="Add to Playlist"
                        >
                          <i className="fas fa-folder-plus text-xs"></i>
                        </button>

                        {/* Time label */}
                        <span className="text-xs font-mono text-gray-400 w-10 text-right shrink-0">
                          {song.duration || '3:45'}
                        </span>
                      </div>

                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12 text-gray-400 font-mono text-sm">
                  No individual audio stems cataloged for this release.
                </div>
              )}
            </div>

          </div>
        </section>

        {/* ─── Artist Bio Spotlight Section ─────────────────────────── */}
        {bandData && (
          <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
            <div className="bg-gradient-to-r from-white/[0.04] to-white/[0.01] backdrop-blur-2xl rounded-3xl border border-white/10 p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
              
              {/* Subtle background tone halo */}
              <div 
                className="absolute right-0 top-0 w-96 h-96 rounded-full blur-[140px] opacity-15 pointer-events-none"
                style={{ backgroundColor: themeColor }}
              ></div>

              {/* Artist Photo */}
              <div className="relative shrink-0 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-2xl border border-white/15">
                <img 
                  src={bandData.aboutImage || bandData.headerImage} 
                  alt={bandData.name} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Artist Story */}
              <div className="flex-1 text-center md:text-left space-y-3 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono tracking-widest text-[var(--album-accent)] font-semibold uppercase">
                  <span>Artist Archive Spotlight</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-orbitron font-bold text-white flex items-center justify-center md:justify-start gap-2">
                  <span>{bandData.name}</span>
                  <i className="fas fa-check-circle text-emerald-400 text-sm"></i>
                </h3>

                <p className="text-xs sm:text-sm font-mono text-gray-300 leading-relaxed max-w-2xl">
                  {bandData.description}
                </p>

                <div className="pt-2">
                  <Link 
                    to={bandData.route}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono font-semibold text-white transition-all cursor-pointer group"
                  >
                    <span>View Complete Discography</span>
                    <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform text-[var(--album-accent)]"></i>
                  </Link>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* ─── Related Landmark Releases ───────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10 border-t border-white/10 mt-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-orbitron font-bold uppercase tracking-wider text-white">
                Other Master Releases
              </h3>
              <p className="text-xs text-gray-400 font-mono mt-0.5">Explore essential albums from the Melovoid collection</p>
            </div>
            <Link 
              to="/albums" 
              className="text-xs font-mono text-[var(--album-accent)] hover:underline flex items-center gap-1.5"
            >
              <span>View All</span>
              <i className="fas fa-chevron-right text-[10px]"></i>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {otherReleases.slice(0, 6).map((relAlbum) => (
              <Link 
                key={relAlbum.id}
                to={`/album/${relAlbum.id}`}
                className="group relative bg-white/[0.03] hover:bg-white/[0.08] p-3 rounded-2xl border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between block shadow-lg hover:-translate-y-1"
              >
                {/* Album Art with Vinyl Peek */}
                <div className="relative aspect-square rounded-xl overflow-hidden mb-3 bg-black/60 shadow">
                  <img 
                    src={relAlbum.coverImage} 
                    alt={relAlbum.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  {/* Floating Play Glyph */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[var(--album-accent)] text-black flex items-center justify-center shadow-xl">
                      <i className="fas fa-play text-xs ml-0.5"></i>
                    </div>
                  </div>
                </div>

                {/* Meta */}
                <div className="space-y-0.5">
                  <h4 className="text-xs font-orbitron font-bold text-white truncate group-hover:text-[var(--album-accent)] transition-colors">
                    {relAlbum.title}
                  </h4>
                  <p className="text-[11px] font-mono text-gray-400 truncate">
                    {relAlbum.artist}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── Footer ─────────────────────────────────────────────── */}
        <Footer />

      </div>
    </div>
  );
};
