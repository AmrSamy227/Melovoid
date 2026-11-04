import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { BANDS_RICH } from '../data/musicData';
import type { BandRichInfo } from '../data/musicData';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { Footer } from '../components/Footer';

// Extra metadata to enrich the visual cards with genres, origins, and vibelines
interface ArtistExtraMeta {
  genre: string;
  category: 'alt-rock' | 'dream-pop' | 'indie-rock' | 'britpop' | 'post-punk' | 'grunge';
  origin: string;
  formed: string;
  signatureTrackTitle: string;
  vibe: string;
}

const ARTIST_METADATA: Record<string, ArtistExtraMeta> = {
  radiohead: {
    genre: 'Art Rock / Experimental',
    category: 'alt-rock',
    origin: 'Oxfordshire, UK',
    formed: '1985',
    signatureTrackTitle: 'Creep',
    vibe: 'Dystopian, introspective, electronic & orchestral art-rock.'
  },
  cas: {
    genre: 'Dream Pop / Ambient Noir',
    category: 'dream-pop',
    origin: 'El Paso, USA',
    formed: '2008',
    signatureTrackTitle: 'Apocalypse',
    vibe: 'Cinematic slowcore drenched in smoky romance & reverb.'
  },
  'arctic-monkeys': {
    genre: 'Indie Rock / Post-Punk',
    category: 'indie-rock',
    origin: 'Sheffield, UK',
    formed: '2002',
    signatureTrackTitle: 'R U Mine?',
    vibe: 'Razor-sharp lyricism, swaggering grooves & midnight adrenaline.'
  },
  coldplay: {
    genre: 'Post-Britpop / Anthemic',
    category: 'britpop',
    origin: 'London, UK',
    formed: '1996',
    signatureTrackTitle: 'Yellow',
    vibe: 'Transcendent stadium melodies and luminous cosmic warmth.'
  },
  'the-smiths': {
    genre: 'Post-Punk / Jangle Pop',
    category: 'post-punk',
    origin: 'Manchester, UK',
    formed: '1982',
    signatureTrackTitle: 'There Is A Light That Never Goes Out',
    vibe: 'Poetic melancholy driven by shimmering arpeggiated guitars.'
  },
  nirvana: {
    genre: 'Grunge / Alternative Rock',
    category: 'grunge',
    origin: 'Aberdeen, USA',
    formed: '1987',
    signatureTrackTitle: 'Smells Like Teen Spirit',
    vibe: 'Visceral distortion and the raw rebellious roar of a generation.'
  }
};

const CATEGORIES = [
  { id: 'all', label: 'All Frequencies' },
  { id: 'alt-rock', label: 'Art Rock & Exp' },
  { id: 'dream-pop', label: 'Dream Pop' },
  { id: 'indie-rock', label: 'Indie & Garage' },
  { id: 'britpop', label: 'Post-Britpop' },
  { id: 'post-punk', label: 'Post-Punk' },
  { id: 'grunge', label: 'Grunge & 90s' }
] as const;

export const ArtistsPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentSong, isPlaying, playSong, togglePlay } = useAudioPlayer();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'curated' | 'listeners' | 'rank' | 'name'>('curated');
  const [activeSpotlightId, setActiveSpotlightId] = useState<string>('radiohead');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Check if a band's track is currently playing in global player
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

  // Handle video hover playback with safety
  const handleMouseEnterCard = (e: React.MouseEvent<HTMLDivElement>, bandId: string) => {
    setHoveredCardId(bandId);
    const video = e.currentTarget.querySelector('video') as HTMLVideoElement | null;
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  const handleMouseLeaveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    setHoveredCardId(null);
    const video = e.currentTarget.querySelector('video') as HTMLVideoElement | null;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  // Instant audio preview handler
  const handleToggleBandAudio = (e: React.MouseEvent, band: BandRichInfo) => {
    e.stopPropagation(); // Do not trigger card navigation
    if (isBandCurrentlyPlaying(band)) {
      togglePlay();
    } else {
      if (band.popularTracks && band.popularTracks.length > 0) {
        playSong(band.popularTracks[0], band.popularTracks);
      }
    }
  };

  // Filter & Sort Logic
  const filteredBands = useMemo(() => {
    return BANDS_RICH.filter((band) => {
      const meta = ARTIST_METADATA[band.id];
      const matchesSearch =
        band.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (meta && meta.genre.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (meta && meta.origin.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (meta && meta.signatureTrackTitle.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'all' || (meta && meta.category === selectedCategory);

      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'listeners') {
        const numA = parseInt((a.listeners || '0').replace(/,/g, ''), 10);
        const numB = parseInt((b.listeners || '0').replace(/,/g, ''), 10);
        return numB - numA;
      }
      if (sortBy === 'rank') {
        const rankA = parseInt((a.worldRank || '#999').replace('#', ''), 10);
        const rankB = parseInt((b.worldRank || '#999').replace('#', ''), 10);
        return rankA - rankB;
      }
      return 0; // curated order
    });
  }, [searchQuery, selectedCategory, sortBy]);

  // Active Spotlight Band
  const spotlightBand = useMemo(() => {
    return BANDS_RICH.find((b) => b.id === activeSpotlightId) || BANDS_RICH[0];
  }, [activeSpotlightId]);

  const spotlightMeta = ARTIST_METADATA[spotlightBand.id];
  const isSpotlightPlaying = isBandCurrentlyPlaying(spotlightBand);

  return (
    <div className="relative min-h-screen pt-28 pb-20 z-10 text-white selection:bg-orange-500 selection:text-white">
      {/* Background ambient radial gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-orange-600/10 via-purple-600/5 to-transparent blur-3xl opacity-60"></div>
        <div className="absolute top-2/3 right-10 w-[500px] h-[500px] bg-emerald-600/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Hero Header ────────────────────────────────────────── */}
        <div className="text-center max-w-4xl mx-auto pt-6 pb-10">
          {/* Cyber status badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-xs font-mono tracking-widest text-emerald-400 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>MELOVOID ARCHIVE // ROSTER SECTOR 01</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-orbitron font-black uppercase tracking-wider mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-100 to-white/40 drop-shadow-[0_4px_30px_rgba(255,255,255,0.2)]">
              Discover Artists
            </span>
          </h1>

          <p className="font-mono text-gray-300 text-sm sm:text-base tracking-[0.25em] max-w-2xl mx-auto leading-relaxed uppercase">
            Explore the titans of the void — immersive discographies & sonic legacies
          </p>

          {/* Key Metrics HUD Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-3xl mx-auto">
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 text-center hover:border-white/20 transition-colors">
              <div className="text-xl sm:text-2xl font-orbitron font-bold text-white">6</div>
              <div className="text-[10px] sm:text-xs font-mono text-gray-400 tracking-wider uppercase mt-1">Sonic Icons</div>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 text-center hover:border-white/20 transition-colors">
              <div className="text-xl sm:text-2xl font-orbitron font-bold text-emerald-400">248M+</div>
              <div className="text-[10px] sm:text-xs font-mono text-gray-400 tracking-wider uppercase mt-1">Monthly Listeners</div>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 text-center hover:border-white/20 transition-colors">
              <div className="text-xl sm:text-2xl font-orbitron font-bold text-amber-400">#12</div>
              <div className="text-[10px] sm:text-xs font-mono text-gray-400 tracking-wider uppercase mt-1">Peak Global Rank</div>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 text-center hover:border-white/20 transition-colors">
              <div className="text-xl sm:text-2xl font-orbitron font-bold text-pink-400">100%</div>
              <div className="text-[10px] sm:text-xs font-mono text-gray-400 tracking-wider uppercase mt-1">Spatial Previews</div>
            </div>
          </div>
        </div>

        {/* ─── Panoramic Titan Spotlight Stage ───────────────────── */}
        {spotlightBand && (
          <div className="mb-8 sm:mb-14 relative group">
            <div 
              className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/60 backdrop-blur-xl shadow-2xl transition-all duration-500"
              style={{
                boxShadow: `0 20px 60px -15px ${spotlightBand.accentColor || '#ff6e40'}33`
              }}
            >
              {/* Dynamic Accent Ambient Glow */}
              <div 
                className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[100px] opacity-25 pointer-events-none transition-all duration-700"
                style={{ backgroundColor: spotlightBand.accentColor || '#ff6e40' }}
              ></div>

              {/* Background Header Image with Parallax Mask */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={spotlightBand.headerImage} 
                  alt={spotlightBand.name}
                  className="w-full h-full object-cover object-top opacity-35 filter brightness-90 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>

              {/* Spotlight Content Overlay */}
              <div className="relative z-10 p-4 sm:p-8 lg:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8">
                <div className="max-w-2xl">
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4 font-mono text-[10px] sm:text-xs">
                    <span 
                      className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider font-bold text-black flex items-center gap-1.5"
                      style={{ backgroundColor: spotlightBand.accentColor || '#f97316' }}
                    >
                      <i className="fas fa-crown text-[9px] sm:text-[10px]"></i>
                      Featured Titan
                    </span>
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white tracking-widest uppercase">
                      Rank {spotlightBand.worldRank}
                    </span>
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/50 border border-white/10 text-gray-300">
                      {spotlightMeta?.genre || 'Void Archive'}
                    </span>
                  </div>

                  {/* Spotlight Name */}
                  <h2 className="text-2xl sm:text-4xl lg:text-6xl font-orbitron font-black uppercase tracking-wider text-white mb-2 sm:mb-3">
                    {spotlightBand.name}
                  </h2>

                  {/* Tagline / Bio excerpt */}
                  <p className="text-gray-300 font-mono text-[11px] sm:text-xs md:text-sm leading-relaxed mb-4 sm:mb-6 max-w-xl line-clamp-2 sm:line-clamp-3">
                    {spotlightMeta?.vibe || spotlightBand.description}
                  </p>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[10px] sm:text-xs font-mono text-gray-400">
                    <div className="flex items-center gap-1.5 text-white">
                      <i className="fas fa-headphones text-[var(--page-accent)]"></i>
                      <span className="font-orbitron font-bold text-xs sm:text-sm">{spotlightBand.listeners}</span>
                      <span className="text-gray-400">listeners</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="fas fa-map-marker-alt text-gray-400"></i>
                      <span>{spotlightMeta?.origin}</span>
                    </div>
                    <div className="hidden xs:flex items-center gap-1">
                      <i className="fas fa-calendar-alt text-gray-400"></i>
                      <span>Est. {spotlightMeta?.formed}</span>
                    </div>
                  </div>
                </div>

                {/* Spotlight Action Center */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 w-full md:w-auto">
                  {/* Instant Audio Preview Button */}
                  <button
                    onClick={(e) => handleToggleBandAudio(e, spotlightBand)}
                    className="flex items-center justify-center gap-2.5 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl font-orbitron text-[11px] sm:text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-xl cursor-pointer hover:scale-105"
                    style={{
                      backgroundColor: spotlightBand.accentColor || '#f97316',
                      color: '#000000'
                    }}
                  >
                    {isSpotlightPlaying ? (
                      <>
                        <i className="fas fa-pause text-xs sm:text-base"></i>
                        <span>Pause Preview</span>
                      </>
                    ) : (
                      <>
                        <i className="fas fa-play text-xs sm:text-base ml-0.5"></i>
                        <span>Preview "{spotlightMeta?.signatureTrackTitle || 'Top Track'}"</span>
                      </>
                    )}
                  </button>

                  {/* Enter Artist Page */}
                  <button
                    onClick={() => navigate(spotlightBand.route)}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl font-orbitron text-[11px] sm:text-xs md:text-sm font-bold tracking-wider uppercase bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md transition-all duration-300 cursor-pointer hover:scale-105"
                  >
                    <span>Enter Vault</span>
                    <i className="fas fa-arrow-right text-[10px] sm:text-xs transition-transform group-hover:translate-x-1"></i>
                  </button>
                </div>
              </div>

              {/* Spotlight Mini Selector Bar (Quick Switcher) */}
              <div className="relative z-10 px-4 sm:px-8 lg:px-12 py-2.5 bg-black/80 border-t border-white/10 flex items-center justify-between overflow-x-auto no-scrollbar gap-2 sm:gap-4">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest hidden sm:inline-block">
                  // Switch:
                </span>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {BANDS_RICH.map((b) => {
                    const isSelected = b.id === spotlightBand.id;
                    return (
                      <button
                        key={b.id}
                        onClick={() => setActiveSpotlightId(b.id)}
                        className={`px-2.5 py-1 rounded text-[10px] sm:text-xs font-mono tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                          isSelected
                            ? 'bg-white text-black font-bold shadow-md'
                            : 'bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white'
                        }`}
                      >
                        {b.name}
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
                placeholder="Search artists by name, genre, or origin..."
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
              <label htmlFor="sort-artists" className="text-xs font-mono text-gray-400 uppercase tracking-widest whitespace-nowrap">
                <i className="fas fa-sliders-h mr-1.5"></i> Sort:
              </label>
              <select
                id="sort-artists"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-black/40 border border-white/15 rounded-xl px-4 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[var(--page-accent,#f97316)] cursor-pointer backdrop-blur-md"
              >
                <option value="curated">Curated Void Order</option>
                <option value="listeners">Monthly Listeners (High to Low)</option>
                <option value="rank">World Rank (#)</option>
                <option value="name">Name (A — Z)</option>
              </select>
            </div>
          </div>

          {/* Genre Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap border ${
                    active
                      ? 'bg-white text-black font-bold border-white shadow-lg'
                      : 'bg-black/30 border-white/10 text-gray-400 hover:text-white hover:border-white/30 backdrop-blur-sm'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── Artists Grid ──────────────────────────────────────── */}
        {filteredBands.length === 0 ? (
          <div className="text-center py-24 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md my-8">
            <i className="fas fa-satellite-dish text-4xl text-gray-600 mb-4 animate-pulse"></i>
            <h3 className="text-xl font-orbitron font-bold text-white mb-2">No Transmissions Found</h3>
            <p className="text-sm font-mono text-gray-400 mb-6">
              No artist matched your search query "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono uppercase tracking-wider text-white transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {filteredBands.map((band: BandRichInfo, idx) => {
              const meta = ARTIST_METADATA[band.id];
              const isPlayingNow = isBandCurrentlyPlaying(band);
              const isHovered = hoveredCardId === band.id;
              const accent = band.accentColor || '#ff6e40';

              return (
                <div
                  key={band.id}
                  onClick={() => navigate(band.route)}
                  onMouseEnter={(e) => handleMouseEnterCard(e, band.id)}
                  onMouseLeave={handleMouseLeaveCard}
                  className="group relative h-[280px] xs:h-[320px] sm:h-[400px] md:h-[470px] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer border border-white/15 bg-neutral-950/80 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
                  style={{
                    boxShadow: isHovered || isPlayingNow ? `0 15px 35px -10px ${accent}44` : 'none',
                    borderColor: isHovered || isPlayingNow ? `${accent}88` : 'rgba(255,255,255,0.12)'
                  }}
                >
                  {/* Subtle Tech Corner Brackets */}
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[8px] sm:text-[10px] font-mono text-white/30 z-20 pointer-events-none">┌</span>
                  <span className="absolute top-2 right-2 sm:top-3 sm:right-3 text-[8px] sm:text-[10px] font-mono text-white/30 z-20 pointer-events-none">┐</span>
                  <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-[8px] sm:text-[10px] font-mono text-white/30 z-20 pointer-events-none">└</span>
                  <span className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 text-[8px] sm:text-[10px] font-mono text-white/30 z-20 pointer-events-none">┘</span>

                  {/* Card Background Media: Video Loop with Header Fallback */}
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

                    {/* Multi-layered cinematic gradient vignettes */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(circle at center, ${accent}, transparent 70%)` }}
                    ></div>
                  </div>

                  {/* ─── Top Bar Badges ───────────────────────────── */}
                  <div className="relative z-10 p-2.5 sm:p-5 flex items-center justify-between pointer-events-none">
                    {/* World Rank Badge */}
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-[9px] sm:text-[11px] font-mono tracking-wider text-white shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }}></span>
                      <span>RANK {band.worldRank}</span>
                    </div>

                    {/* Equalizer Waveform or Genre Badge */}
                    <div className="flex items-center gap-1.5">
                      {isPlayingNow ? (
                        <div className="flex items-center gap-0.5 sm:gap-1 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[8px] sm:text-[10px] font-mono tracking-widest">
                          <span className="w-0.5 sm:w-1 h-2 sm:h-3.5 bg-emerald-400 rounded-full wave-bar-1 inline-block"></span>
                          <span className="w-0.5 sm:w-1 h-2 sm:h-3.5 bg-emerald-400 rounded-full wave-bar-2 inline-block"></span>
                          <span className="w-0.5 sm:w-1 h-2 sm:h-3.5 bg-emerald-400 rounded-full wave-bar-3 inline-block"></span>
                          <span className="ml-0.5 sm:ml-1 uppercase font-bold hidden xs:inline sm:inline">LIVE</span>
                        </div>
                      ) : (
                        <div className="hidden xs:inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/[0.07] border border-white/10 backdrop-blur-md text-[8px] sm:text-[10px] font-mono uppercase tracking-widest text-gray-300">
                          {meta?.category.replace('-', ' ') || 'Void'}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ─── Center Instant Play Floating Trigger ──────── */}
                  <div className="relative z-10 flex items-center justify-center pointer-events-none my-auto">
                    <button
                      onClick={(e) => handleToggleBandAudio(e, band)}
                      className={`pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl cursor-pointer ${
                        isPlayingNow
                          ? 'scale-100 opacity-100 text-black shadow-emerald-500/50'
                          : 'opacity-0 group-hover:opacity-100 group-hover:scale-110 text-black'
                      }`}
                      style={{
                        backgroundColor: isPlayingNow ? '#10B981' : accent,
                        boxShadow: `0 0 25px ${isPlayingNow ? '#10B981' : accent}99`
                      }}
                      title={isPlayingNow ? 'Pause Preview' : `Preview "${meta?.signatureTrackTitle}"`}
                    >
                      <i className={`fas ${isPlayingNow ? 'fa-pause' : 'fa-play ml-0.5'} text-xs sm:text-base md:text-lg`}></i>
                    </button>
                  </div>

                  {/* ─── Bottom Content Monolith ──────────────────── */}
                  <div className="relative z-10 p-3 sm:p-5 md:p-6 pt-0 flex flex-col pointer-events-none">
                    
                    {/* Brand / Origin Index */}
                    <div className="flex items-center justify-between text-[9px] sm:text-[11px] font-mono text-gray-400 uppercase tracking-widest mb-1 truncate">
                      <span className="text-white/60">MV-0{idx + 1}</span>
                      <span className="truncate">{meta?.origin?.split(',')[0] || 'UK'}</span>
                    </div>

                    {/* Band Name */}
                    <h3 
                      className="font-orbitron text-base xs:text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-wider text-white mb-1 sm:mb-2 truncate group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                      style={{
                        backgroundImage: isHovered ? `linear-gradient(to right, #ffffff, ${accent})` : undefined
                      }}
                    >
                      {band.name}
                    </h3>

                    {/* Listeners Count */}
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-gray-300 mb-2 sm:mb-3">
                      <i className="fas fa-headphones text-gray-400 text-[9px] sm:text-xs"></i>
                      <span className="font-bold text-white font-orbitron">{band.listeners?.split(',')[0]}M+</span>
                      <span className="hidden xs:inline sm:inline">listeners</span>
                    </div>

                    {/* Signature Track Pill */}
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg bg-black/60 border border-white/10 text-[9px] sm:text-xs font-mono text-gray-300 mb-2 sm:mb-4 backdrop-blur-sm self-start truncate max-w-full">
                      <i className="fas fa-music text-[8px] sm:text-[10px]" style={{ color: accent }}></i>
                      <span className="truncate">{meta?.signatureTrackTitle || 'Featured'}</span>
                    </div>

                    {/* Card Action Row */}
                    <div className="pt-2 sm:pt-3 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-xs font-mono">
                      <span className="text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest flex items-center gap-1 sm:gap-2 text-[9px] sm:text-xs">
                        <span>Enter</span>
                        <i 
                          className="fas fa-arrow-right text-[8px] sm:text-[10px] transform group-hover:translate-x-1 transition-transform duration-300"
                          style={{ color: accent }}
                        ></i>
                      </span>

                      <span className="text-[8px] sm:text-[10px] text-gray-500 uppercase tracking-widest truncate">
                        {meta?.genre?.split('/')[0] || 'Alt'}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Accent Color Strip */}
                  <div 
                    className="h-0.5 sm:h-1 w-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
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
