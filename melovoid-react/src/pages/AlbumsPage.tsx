import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ALBUMS } from '../data/musicData';
import type { Album } from '../types/music';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { Footer } from '../components/Footer';

// Quick lookup to map artist to their route
const ARTIST_ROUTE_MAP: Record<string, string> = {
  'Radiohead': '/artist/radiohead',
  'Cigarettes After Sex': '/artist/cas',
  'Arctic Monkeys': '/artist/arctic-monkeys',
  'Coldplay': '/artist/coldplay',
  'The Smiths': '/artist/the-smiths',
  'Nirvana': '/artist/nirvana'
};

// Spotlight landmark albums
const SPOTLIGHT_ALBUM_IDS = [
  'ok_computer',
  'am',
  'nevermind',
  'parachutes',
  'the_queen_is_dead',
  'cry'
];

export const AlbumsPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentSong, isPlaying, playSong, togglePlay } = useAudioPlayer();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArtist, setSelectedArtist] = useState<string>('all');
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'curated' | 'year-desc' | 'year-asc' | 'tracks' | 'title' | 'artist'>('curated');
  const [activeSpotlightId, setActiveSpotlightId] = useState<string>('ok_computer');
  const [hoveredAlbumId, setHoveredAlbumId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const albumList = useMemo(() => Object.values(ALBUMS), []);

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
    e.stopPropagation(); // Prevent card navigation
    if (isAlbumCurrentlyPlaying(album)) {
      togglePlay();
    } else {
      if (album.songs && album.songs.length > 0) {
        playSong(album.songs[0], album.songs);
      }
    }
  };

  // Helper to extract 4-digit release year
  const getAlbumYear = (album: Album): number => {
    const match = album.releaseDate?.match(/\b(19\d{2}|20\d{2})\b/);
    return match ? parseInt(match[1], 10) : 2000;
  };

  // Unique artists for filter pills
  const availableArtists = useMemo(() => {
    const set = new Set<string>();
    albumList.forEach((a) => {
      if (a.artist) set.add(a.artist);
    });
    return Array.from(set).sort();
  }, [albumList]);

  // Filter & Sort Logic
  const filteredAlbums = useMemo(() => {
    return albumList.filter((album) => {
      const year = getAlbumYear(album);

      // Search match
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        album.title.toLowerCase().includes(q) ||
        album.artist.toLowerCase().includes(q) ||
        album.releaseDate?.toLowerCase().includes(q) ||
        album.songs?.some((s) => s.title.toLowerCase().includes(q));

      // Artist filter
      const matchesArtist = selectedArtist === 'all' || album.artist === selectedArtist;

      // Era filter
      let matchesEra = true;
      if (selectedEra === '80s') matchesEra = year >= 1980 && year <= 1989;
      else if (selectedEra === '90s') matchesEra = year >= 1990 && year <= 1999;
      else if (selectedEra === '2000s-10s') matchesEra = year >= 2000 && year <= 2019;
      else if (selectedEra === '2020s') matchesEra = year >= 2020;

      return matchesSearch && matchesArtist && matchesEra;
    }).sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'artist') return a.artist.localeCompare(b.artist);
      if (sortBy === 'year-desc') return getAlbumYear(b) - getAlbumYear(a);
      if (sortBy === 'year-asc') return getAlbumYear(a) - getAlbumYear(b);
      if (sortBy === 'tracks') return (b.songs?.length || 0) - (a.songs?.length || 0);
      return 0; // curated order
    });
  }, [albumList, searchQuery, selectedArtist, selectedEra, sortBy]);

  // Active Spotlight Album
  const spotlightAlbum = useMemo(() => {
    return ALBUMS[activeSpotlightId] || albumList[0];
  }, [activeSpotlightId, albumList]);

  const isSpotlightPlaying = spotlightAlbum ? isAlbumCurrentlyPlaying(spotlightAlbum) : false;
  const spotlightYear = spotlightAlbum ? getAlbumYear(spotlightAlbum) : 1997;

  return (
    <div className="relative min-h-screen pt-28 pb-20 z-10 text-white selection:bg-orange-500 selection:text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Hero Header ────────────────────────────────────────── */}
        <div className="text-center max-w-4xl mx-auto pt-6 pb-10">
          {/* Cyber status badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-xs font-mono tracking-widest text-emerald-400 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>MELOVOID ARCHIVE // DISCOGRAPHY SECTOR 02</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-orbitron font-black uppercase tracking-wider mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-100 to-white/40 drop-shadow-[0_4px_30px_rgba(255,255,255,0.2)]">
              Discover Albums
            </span>
          </h1>

          <p className="font-mono text-gray-300 text-sm sm:text-base tracking-[0.25em] max-w-2xl mx-auto leading-relaxed uppercase">
            Master pressings of the void — studio releases, b-sides & historical recordings
          </p>

          {/* Key Metrics HUD Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-3xl mx-auto">
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 text-center hover:border-white/20 transition-colors">
              <div className="text-xl sm:text-2xl font-orbitron font-bold text-white">{albumList.length}</div>
              <div className="text-[10px] sm:text-xs font-mono text-gray-400 tracking-wider uppercase mt-1">Master Albums</div>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 text-center hover:border-white/20 transition-colors">
              <div className="text-xl sm:text-2xl font-orbitron font-bold text-emerald-400">450+</div>
              <div className="text-[10px] sm:text-xs font-mono text-gray-400 tracking-wider uppercase mt-1">Archived Songs</div>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 text-center hover:border-white/20 transition-colors">
              <div className="text-xl sm:text-2xl font-orbitron font-bold text-amber-400">1982–2024</div>
              <div className="text-[10px] sm:text-xs font-mono text-gray-400 tracking-wider uppercase mt-1">Era Span</div>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 text-center hover:border-white/20 transition-colors">
              <div className="text-xl sm:text-2xl font-orbitron font-bold text-pink-400">Hi-Res</div>
              <div className="text-[10px] sm:text-xs font-mono text-gray-400 tracking-wider uppercase mt-1">Lossless Audio</div>
            </div>
          </div>
        </div>

        {/* ─── Masterpiece Spotlight Console ───────────── */}
        {spotlightAlbum && (
          <div className="mb-8 sm:mb-14 relative group">
            <div 
              className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/70 backdrop-blur-xl shadow-2xl transition-all duration-500"
              style={{
                boxShadow: `0 20px 60px -15px ${spotlightAlbum.accentColor || '#ff6e40'}33`
              }}
            >
              {/* Dynamic Accent Ambient Glow */}
              <div 
                className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[100px] opacity-25 pointer-events-none transition-all duration-700"
                style={{ backgroundColor: spotlightAlbum.accentColor || '#ff6e40' }}
              ></div>

              {/* Background Cover Image with Blur Backdrop */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={spotlightAlbum.coverImage} 
                  alt={spotlightAlbum.title}
                  className="w-full h-full object-cover opacity-25 filter blur-lg scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>

              {/* Spotlight Content Overlay */}
              <div className="relative z-10 p-4 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
                
                {/* Left Column: 3D Vinyl Gatefold Showcase */}
                <div className="relative flex items-center justify-center shrink-0 w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72">
                  
                  {/* Sliding Vinyl Record */}
                  <div 
                    className={`absolute right-0 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full vinyl-grooves flex items-center justify-center transition-all duration-700 ${
                      isSpotlightPlaying ? 'translate-x-8 sm:translate-x-14 md:translate-x-20 animate-spin-slow' : 'translate-x-4 sm:translate-x-8 md:translate-x-12'
                    }`}
                  >
                    {/* Vinyl Center Label */}
                    <div 
                      className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-white/20 flex flex-col items-center justify-center text-center p-1 text-[7px] sm:text-[8px] font-mono shadow-inner"
                      style={{ backgroundColor: spotlightAlbum.accentColor || '#111' }}
                    >
                      <span className="font-bold uppercase text-black line-clamp-1">{spotlightAlbum.title}</span>
                      <span className="text-[6px] sm:text-[7px] text-black/80">{spotlightYear}</span>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-black mt-0.5 border border-white/40"></div>
                    </div>
                  </div>

                  {/* Album Cover Jacket */}
                  <div className="relative z-10 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-2xl border border-white/20 group/jacket">
                    <img 
                      src={spotlightAlbum.coverImage} 
                      alt={spotlightAlbum.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Floating Play Overlay on Cover */}
                    <div 
                      onClick={(e) => handleToggleAlbumAudio(e, spotlightAlbum)}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover/jacket:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                    >
                      <div 
                        className="w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-black shadow-2xl hover:scale-110 transition-transform"
                        style={{ backgroundColor: spotlightAlbum.accentColor || '#f97316' }}
                      >
                        <i className={`fas ${isSpotlightPlaying ? 'fa-pause' : 'fa-play ml-0.5'} text-sm sm:text-lg`}></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Album Details & Audio Controls */}
                <div className="flex-1 max-w-2xl text-center lg:text-left">
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-2 sm:mb-3 font-mono text-[10px] sm:text-xs">
                    <span 
                      className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider font-bold text-black flex items-center gap-1"
                      style={{ backgroundColor: spotlightAlbum.accentColor || '#f97316' }}
                    >
                      <i className="fas fa-record-vinyl text-[9px] sm:text-[10px]"></i>
                      Spotlight
                    </span>
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white tracking-widest uppercase">
                      {spotlightYear}
                    </span>
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/50 border border-white/10 text-gray-300">
                      {spotlightAlbum.songs?.length || 12} Tracks
                    </span>
                  </div>

                  {/* Title & Artist */}
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-orbitron font-black uppercase tracking-wider text-white mb-1.5 sm:mb-2">
                    {spotlightAlbum.title}
                  </h2>

                  <div className="mb-3 sm:mb-4">
                    <Link
                      to={ARTIST_ROUTE_MAP[spotlightAlbum.artist] || '#'}
                      className="font-mono text-xs sm:text-sm md:text-base text-gray-300 hover:text-[var(--page-accent)] transition-colors inline-flex items-center gap-1.5"
                    >
                      <i className="fas fa-user-circle text-[10px] sm:text-xs"></i>
                      <span>{spotlightAlbum.artist}</span>
                      <i className="fas fa-external-link-alt text-[9px] opacity-70"></i>
                    </Link>
                  </div>

                  {/* Description / Liner notes */}
                  <p className="text-gray-300 font-mono text-[11px] sm:text-xs md:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
                    {spotlightAlbum.description || `Iconic studio recording by ${spotlightAlbum.artist}, recognized as one of the seminal albums shaping modern alternative music.`}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 w-full">
                    {/* Instant Stream Opening Track */}
                    <button
                      onClick={(e) => handleToggleAlbumAudio(e, spotlightAlbum)}
                      className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl font-orbitron text-[11px] sm:text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-xl cursor-pointer hover:scale-105"
                      style={{
                        backgroundColor: spotlightAlbum.accentColor || '#f97316',
                        color: '#000000'
                      }}
                    >
                      {isSpotlightPlaying ? (
                        <>
                          <i className="fas fa-pause text-xs sm:text-base"></i>
                          <span>Pause Stream</span>
                        </>
                      ) : (
                        <>
                          <i className="fas fa-play text-xs sm:text-base ml-0.5"></i>
                          <span>Play Opening Track</span>
                        </>
                      )}
                    </button>

                    {/* View Album Gatefold */}
                    <button
                      onClick={() => navigate(`/album/${spotlightAlbum.id}`)}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl font-orbitron text-[11px] sm:text-xs md:text-sm font-bold tracking-wider uppercase bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md transition-all duration-300 cursor-pointer hover:scale-105"
                    >
                      <span>Full Tracklist</span>
                      <i className="fas fa-arrow-right text-[10px] sm:text-xs"></i>
                    </button>
                  </div>
                </div>

              </div>

              {/* Spotlight Mini Selector Bar (Quick Switcher) */}
              <div className="relative z-10 px-4 sm:px-8 lg:px-12 py-2.5 bg-black/80 border-t border-white/10 flex items-center justify-between overflow-x-auto no-scrollbar gap-2 sm:gap-4">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest hidden md:inline-block">
                  // Switch:
                </span>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {SPOTLIGHT_ALBUM_IDS.map((albId) => {
                    const alb = ALBUMS[albId];
                    if (!alb) return null;
                    const isSelected = alb.id === spotlightAlbum.id;
                    return (
                      <button
                        key={alb.id}
                        onClick={() => setActiveSpotlightId(alb.id)}
                        className={`px-2.5 py-1 rounded text-[10px] sm:text-xs font-mono tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                          isSelected
                            ? 'bg-white text-black font-bold shadow-md'
                            : 'bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white'
                        }`}
                      >
                        {alb.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── Search, Filters & Sort Command Center ─────────────── */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by album title, artist, or song..."
                className="w-full bg-black/40 border border-white/15 rounded-xl pl-11 pr-10 py-3 text-sm font-mono text-white placeholder-gray-500 focus:outline-none focus:border-[var(--page-accent,#f97316)] focus:ring-1 focus:ring-[var(--page-accent,#f97316)] transition-all backdrop-blur-md"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-sm p-1 cursor-pointer"
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-3">
              <label htmlFor="sort-albums" className="text-xs font-mono text-gray-400 uppercase tracking-widest whitespace-nowrap">
                <i className="fas fa-sliders-h mr-1.5"></i> Sort:
              </label>
              <select
                id="sort-albums"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-black/40 border border-white/15 rounded-xl px-4 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[var(--page-accent,#f97316)] cursor-pointer backdrop-blur-md"
              >
                <option value="curated">Curated Void Order</option>
                <option value="year-desc">Release Year (Newest First)</option>
                <option value="year-asc">Release Year (Oldest First)</option>
                <option value="tracks">Track Count (Most Songs)</option>
                <option value="title">Album Title (A — Z)</option>
                <option value="artist">Artist Name (A — Z)</option>
              </select>
            </div>
          </div>

          {/* Artist Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar">
            <button
              onClick={() => setSelectedArtist('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap border ${
                selectedArtist === 'all'
                  ? 'bg-white text-black font-bold border-white shadow-lg'
                  : 'bg-black/30 border-white/10 text-gray-400 hover:text-white hover:border-white/30 backdrop-blur-sm'
              }`}
            >
              All Releases ({albumList.length})
            </button>
            {availableArtists.map((artist) => {
              const active = selectedArtist === artist;
              const count = albumList.filter((a) => a.artist === artist).length;
              return (
                <button
                  key={artist}
                  onClick={() => setSelectedArtist(artist)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap border ${
                    active
                      ? 'bg-white text-black font-bold border-white shadow-lg'
                      : 'bg-black/30 border-white/10 text-gray-400 hover:text-white hover:border-white/30 backdrop-blur-sm'
                  }`}
                >
                  {artist} ({count})
                </button>
              );
            })}
          </div>

          {/* Era Filter Badges */}
          <div className="flex items-center gap-2 overflow-x-auto text-[11px] font-mono no-scrollbar pt-1">
            <span className="text-gray-500 uppercase tracking-widest mr-1">// Era:</span>
            {[
              { id: 'all', label: 'All Eras' },
              { id: '80s', label: '80s Vintage' },
              { id: '90s', label: '90s Golden Era' },
              { id: '2000s-10s', label: '2000s & 2010s' },
              { id: '2020s', label: '2020s Modern' }
            ].map((era) => (
              <button
                key={era.id}
                onClick={() => setSelectedEra(era.id)}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  selectedEra === era.id
                    ? 'bg-white/20 text-white font-bold border border-white/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {era.label}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Albums Monolith Gatefold Grid ──────────────────────── */}
        {filteredAlbums.length === 0 ? (
          <div className="text-center py-24 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md my-8">
            <i className="fas fa-compact-disc text-4xl text-gray-600 mb-4 animate-spin-slow"></i>
            <h3 className="text-xl font-orbitron font-bold text-white mb-2">No Archived Albums Found</h3>
            <p className="text-sm font-mono text-gray-400 mb-6">
              No album matched your query "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedArtist('all');
                setSelectedEra('all');
              }}
              className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono uppercase tracking-wider text-white transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
            {filteredAlbums.map((album: Album) => {
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
                  {/* Subtle Tech Corner Brackets */}
                  <span className="absolute top-2 left-2 text-[8px] sm:text-[9px] font-mono text-white/30 z-20 pointer-events-none">┌</span>
                  <span className="absolute top-2 right-2 text-[8px] sm:text-[9px] font-mono text-white/30 z-20 pointer-events-none">┐</span>
                  <span className="absolute bottom-2 left-2 text-[8px] sm:text-[9px] font-mono text-white/30 z-20 pointer-events-none">└</span>
                  <span className="absolute bottom-2 right-2 text-[8px] sm:text-[9px] font-mono text-white/30 z-20 pointer-events-none">┘</span>

                  {/* ─── Top Badges ───────────────────────────────── */}
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

                  {/* ─── Interactive 3D Vinyl Gatefold Cover ──────── */}
                  <div className="relative w-full aspect-square mb-2.5 sm:mb-3.5 rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center">
                    
                    {/* Vinyl Record Sliding Peek Effect */}
                    <div 
                      className={`absolute right-1 sm:right-2 w-[85%] aspect-square rounded-full vinyl-grooves transition-transform duration-500 flex items-center justify-center ${
                        isPlayingNow
                          ? 'translate-x-6 sm:translate-x-10 animate-spin-slow'
                          : 'group-hover:translate-x-5 sm:group-hover:translate-x-8 translate-x-0'
                      }`}
                    >
                      {/* Vinyl Label */}
                      <div 
                        className="w-8 h-8 sm:w-11 sm:h-11 rounded-full border border-white/20 flex flex-col items-center justify-center text-center p-0.5 text-[5px] sm:text-[6px] font-mono"
                        style={{ backgroundColor: accent }}
                      >
                        <span className="font-bold text-black uppercase line-clamp-1">{album.title}</span>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black mt-0.5"></div>
                      </div>
                    </div>

                    {/* Album Cover Art */}
                    <img
                      src={album.coverImage}
                      alt={album.title}
                      className="relative z-10 w-full h-full object-cover rounded-lg sm:rounded-xl shadow-md group-hover:shadow-2xl transition-all duration-500"
                    />

                    {/* Floating Quick Play Overlay Button */}
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

                  {/* ─── Album Information ────────────────────────── */}
                  <div className="flex flex-col z-10">
                    {/* Artist Name with link */}
                    <div className="text-[10px] sm:text-xs font-mono text-gray-400 group-hover:text-white transition-colors mb-0.5 truncate">
                      {album.artist}
                    </div>

                    {/* Album Title */}
                    <h3 
                      className="font-orbitron text-xs sm:text-sm md:text-base font-black uppercase tracking-wider text-white mb-1 sm:mb-1.5 truncate group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                      style={{
                        backgroundImage: isHovered ? `linear-gradient(to right, #ffffff, ${accent})` : undefined
                      }}
                    >
                      {album.title}
                    </h3>

                    {/* Lead Song Pill */}
                    <div className="inline-flex items-center gap-1 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded bg-black/50 border border-white/10 text-[9px] sm:text-[10px] font-mono text-gray-300 mb-2 truncate self-start max-w-full">
                      <i className="fas fa-music text-[8px]" style={{ color: accent }}></i>
                      <span className="truncate">Lead: <strong className="text-white font-medium">{leadSong}</strong></span>
                    </div>

                    {/* Card Footer Action */}
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

                  {/* Bottom Accent Strip */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: accent }}
                  ></div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Global Footer */}
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};
