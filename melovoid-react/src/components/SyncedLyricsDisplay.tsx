import React, { useState, useEffect, useRef } from 'react';
import type { Song } from '../types/music';

interface LyricLine {
  time: number;
  text: string;
}

interface SyncedLyricsDisplayProps {
  song: Song;
  currentTime: number;
  onSeek?: (time: number) => void;
}

export const SyncedLyricsDisplay: React.FC<SyncedLyricsDisplayProps> = ({ song, currentTime, onSeek }) => {
  const [lyrics, setLyrics] = useState<LyricLine[] | null>(null);
  const [plainLyrics, setPlainLyrics] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [userIsScrolling, setUserIsScrolling] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeLineRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  // Format seconds into MM:SS
  const formatTime = (time: number) => {
    if (isNaN(time) || time < 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    let isMounted = true;
    
    const fetchLyrics = async () => {
      setLoading(true);
      setLyrics(null);
      setPlainLyrics(null);
      
      try {
        const url = `https://lrclib.net/api/get?artist_name=${encodeURIComponent(song.artist)}&track_name=${encodeURIComponent(song.title)}`;
        const res = await fetch(url);
        
        if (!res.ok) {
          throw new Error('Lyrics not found');
        }
        
        const data = await res.json();
        
        if (data.syncedLyrics && isMounted) {
          const lines = data.syncedLyrics.split('\n');
          const parsedLyrics: LyricLine[] = [];
          const timeRegex = /\[(\d{2}):(\d{2}\.\d{2,3})\]/;
          
          for (const line of lines) {
            const match = timeRegex.exec(line);
            if (match) {
              const minutes = parseInt(match[1], 10);
              const seconds = parseFloat(match[2]);
              const time = minutes * 60 + seconds;
              const text = line.replace(timeRegex, '').trim();
              
              if (text) {
                parsedLyrics.push({ time, text });
              }
            }
          }
          setLyrics(parsedLyrics);
        } else if (data.plainLyrics && isMounted) {
          setPlainLyrics(data.plainLyrics);
        } else if (isMounted) {
          setPlainLyrics(song.lyrics || "No synced lyrics available for this track.");
        }
      } catch (err) {
        if (isMounted) {
          setPlainLyrics(song.lyrics || "No synced lyrics available for this track.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    
    fetchLyrics();
    
    return () => {
      isMounted = false;
    };
  }, [song]);

  // Handle user manual scroll: pause auto-scroll temporarily so user can read freely
  const handleScroll = () => {
    setUserIsScrolling(true);
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = window.setTimeout(() => {
      setUserIsScrolling(false);
    }, 4000);
  };

  // Smoothly center the active line
  useEffect(() => {
    if (!userIsScrolling && activeLineRef.current && containerRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [currentTime, lyrics, userIsScrolling]);

  // Manual re-center to current playing line
  const scrollToActive = () => {
    setUserIsScrolling(false);
    if (activeLineRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  if (loading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="relative w-16 h-16 flex items-center justify-center mb-5">
          <div className="absolute inset-0 rounded-full border-2 border-[var(--player-accent)]/20 animate-ping"></div>
          <div className="w-12 h-12 rounded-full border-2 border-t-[var(--player-accent)] border-white/10 animate-spin flex items-center justify-center">
            <i className="fas fa-microphone-alt text-[var(--player-accent)] text-lg"></i>
          </div>
        </div>
        <p className="text-white font-orbitron text-sm font-semibold tracking-wider uppercase">Loading Synced Lyrics</p>
        <p className="text-gray-400 font-mono text-xs tracking-wide mt-1">Retrieving synchronized timestamps...</p>
      </div>
    );
  }

  if (lyrics && lyrics.length > 0) {
    // Determine active index
    let activeIndex = -1;
    for (let i = 0; i < lyrics.length; i++) {
      if (currentTime >= lyrics[i].time) {
        activeIndex = i;
      } else {
        break;
      }
    }

    return (
      <div className="relative flex-1 h-full flex flex-col overflow-hidden">
        {/* Sync Re-center Pill Button (appears when user scrolled away) */}
        {userIsScrolling && (
          <button
            onClick={scrollToActive}
            className="absolute bottom-6 right-6 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--player-accent)] text-black font-mono text-xs font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <i className="fas fa-crosshairs"></i>
            <span>SYNC TO PLAYHEAD</span>
          </button>
        )}

        {/* Scrollable Lyrics Container */}
        <div 
          ref={containerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto no-scrollbar pb-[45vh] pt-[16vh] px-4 md:px-8 scroll-smooth select-none font-orbitron"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none'
          }}
        >
          <div className="space-y-6 md:space-y-8 max-w-2xl">
            {lyrics.map((line, index) => {
              const isActive = index === activeIndex;
              const isPassed = index < activeIndex;
              const distance = Math.abs(index - activeIndex);

              return (
                <div 
                  key={index}
                  ref={isActive ? activeLineRef : null}
                  onClick={() => onSeek && onSeek(line.time)}
                  className={`group relative flex items-start gap-4 transition-all duration-300 ease-out cursor-pointer rounded-2xl p-2 -mx-2 hover:bg-white/5 font-orbitron ${
                    isActive 
                      ? 'text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-wide scale-[1.02] origin-left' 
                      : isPassed
                        ? 'text-white/35 text-2xl sm:text-3xl md:text-4xl font-bold hover:text-white/70'
                        : distance === 1
                          ? 'text-white/45 text-2xl sm:text-3xl md:text-4xl font-bold hover:text-white/75'
                          : 'text-white/25 text-xl sm:text-2xl md:text-3xl font-semibold hover:text-white/60'
                  }`}
                  style={{
                    textShadow: isActive ? '0 0 25px rgba(255,255,255,0.7), 0 0 50px var(--player-accent)' : 'none',
                    filter: isActive ? 'none' : 'blur(0.3px)'
                  }}
                >
                  {/* Active Line Neon Indicator Bar */}
                  {isActive && (
                    <div 
                      className="absolute -left-3 top-2 bottom-2 w-1.5 rounded-full shadow-[0_0_15px_var(--player-accent)] animate-pulse"
                      style={{ backgroundColor: 'var(--player-accent)' }}
                    ></div>
                  )}

                  {/* Lyric text */}
                  <div className="flex-1 leading-snug tracking-wider">
                    {line.text}
                  </div>

                  {/* Hover seek pill */}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs font-semibold px-2 py-0.5 rounded-full bg-white/10 text-gray-300 self-center shrink-0 border border-white/10">
                    <i className="fas fa-play text-[9px] mr-1 text-[var(--player-accent)]"></i>
                    {formatTime(line.time)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Fallback to plain lyrics
  return (
    <div 
      className="flex-1 overflow-y-auto px-6 md:px-12 py-10 no-scrollbar select-none font-orbitron"
    >
      <div className="text-gray-300 text-xl md:text-2xl leading-relaxed whitespace-pre-line font-medium opacity-90 max-w-2xl tracking-wide">
        {plainLyrics}
      </div>
    </div>
  );
};
