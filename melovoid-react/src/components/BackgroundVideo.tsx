import React, { useEffect, useState, useRef } from 'react';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { BANDS_RICH } from '../data/musicData';

const BACKGROUND_VIDEOS = [
  '/_prompt_add_202508301455_jkw7m.mp4',
  '/the1.mp4',
  '/_prompt_add_202508301624_vuvzm.mp4'
];

// Artist signature accent palette for atmospheric reactive glow
const ARTIST_AURA_COLORS: Record<string, string> = {
  radiohead: '#DC2626',
  'cigarettes after sex': '#059669',
  cas: '#059669',
  'arctic monkeys': '#dc267f',
  coldplay: '#ffc107',
  'the smiths': '#dc6626',
  nirvana: '#5DADE2'
};

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  pulseSpeed: number;
}

export const BackgroundVideo: React.FC = () => {
  const { currentSong, isPlaying } = useAudioPlayer();

  const [videoSrc, setVideoSrc] = useState<string>('');
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  const [auraEnabled, setAuraEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioMuted, setAudioMuted] = useState(true);
  const [hudOpen, setHudOpen] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });

  // Pick random video on load
  useEffect(() => {
    const randomVideo = BACKGROUND_VIDEOS[Math.floor(Math.random() * BACKGROUND_VIDEOS.length)];
    setVideoSrc(`${randomVideo}?v=${Date.now()}`);
  }, []);

  // Determine active aura color based on current song or theme
  const getActiveAuraColor = () => {
    if (!currentSong) return '#3a7f6f'; // Melovoid default teal
    const artistNameLower = (currentSong.artist || '').toLowerCase();
    
    for (const [key, color] of Object.entries(ARTIST_AURA_COLORS)) {
      if (artistNameLower.includes(key)) {
        return color;
      }
    }

    // Try finding via BANDS_RICH
    const match = BANDS_RICH.find(b => b.name.toLowerCase() === artistNameLower);
    if (match && match.accentColor) return match.accentColor;

    return '#f97316'; // Fallback orange
  };

  const activeAuraColor = getActiveAuraColor();

  // Handle ambient background audio mute/unmute
  const toggleAmbientAudio = () => {
    if (audioRef.current) {
      if (audioMuted) {
        audioRef.current.muted = false;
        audioRef.current.play().catch(() => {});
        setAudioMuted(false);
      } else {
        audioRef.current.muted = true;
        setAudioMuted(true);
      }
    }
  };

  // Canvas Stardust Constellation Particles Loop
  useEffect(() => {
    if (!particlesEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Initialize 65 celestial particles
    const particleCount = Math.min(Math.floor((width * height) / 18000), 75);
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.6,
        baseAlpha: Math.random() * 0.45 + 0.25,
        alpha: Math.random() * 0.45 + 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.008
      });
    }

    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Draw constellation links
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Particle position update
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Wrap around borders
        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        // Mouse gentle repulsion
        if (mouseRef.current.active) {
          const dx = p1.x - mouseRef.current.x;
          const dy = p1.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            p1.x += (dx / dist) * force * 1.5;
            p1.y += (dy / dist) * force * 1.5;
          }
        }

        // Pulse alpha
        p1.alpha = p1.baseAlpha + Math.sin(tick * p1.pulseSpeed) * 0.15;

        // Draw particle dot with soft glow
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, p1.alpha)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = activeAuraColor;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby particles with subtle gravitational hairline
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.14 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [particlesEnabled, activeAuraColor]);

  return (
    <>
      {/* ─── Ambient Venus Piano Track ──────────────────────────── */}
      <audio
        ref={audioRef}
        id="ambient-music"
        loop
        autoPlay
        muted={audioMuted}
        preload="auto"
      >
        <source src="/Minimal Piano No. 1, Venus.mp3" type="audio/mp3" />
      </audio>

      {/* ─── Layer 1: Ambient Video Reel (Clipped & Graded) ──────── */}
      {videoSrc && videoEnabled && (
        <video
          autoPlay
          muted
          loop
          playsInline
          id="bgVideo"
          src={videoSrc}
          preload="auto"
        />
      )}

      {/* ─── Layer 2: Audio-Reactive Breathing Nebulae ───────────── */}
      {auraEnabled && (
        <div className="fixed inset-0 pointer-events-none -z-[8] overflow-hidden transition-colors duration-1000">
          {/* Top-Center Main Sonic Halo */}
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full blur-[140px] transition-all duration-1000 ${
              isPlaying ? 'opacity-35 scale-110' : 'opacity-20 scale-100'
            }`}
            style={{
              backgroundColor: activeAuraColor,
              transform: 'translate(-50%, -20%)'
            }}
          ></div>

          {/* Bottom-Right Atmospheric Counter-Aura */}
          <div
            className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full blur-[160px] opacity-15 transition-all duration-1000"
            style={{ backgroundColor: activeAuraColor }}
          ></div>

          {/* Center Subtle Cosmic Violet Fill */}
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[180px] bg-indigo-900/10 opacity-40"></div>
        </div>
      )}

      {/* ─── Layer 3: Interactive Stardust Constellations Canvas ─── */}
      {particlesEnabled && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none -z-[6] opacity-80"
        />
      )}

      {/* ─── Layer 4: Cinematic Vignette (Edge & Contrast Framing) ── */}
      <div 
        className="fixed inset-0 pointer-events-none -z-[4]"
        style={{
          background: `
            radial-gradient(ellipse at center, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.65) 65%, rgba(0, 0, 0, 0.94) 100%),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, transparent 20%, transparent 80%, rgba(0, 0, 0, 0.95) 100%)
          `
        }}
      ></div>

      {/* ─── Discreet Atmosphere HUD Control Pill ───────────────── */}
      <div className={`fixed z-40 transition-all duration-300 font-mono text-xs select-none ${
        currentSong ? 'bottom-24 left-6' : 'bottom-6 left-6'
      }`}>
        {hudOpen ? (
          <div className="bg-black/85 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-2xl w-64 animate-fade-in text-white space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="font-orbitron text-[11px] font-bold tracking-wider uppercase text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Void Atmosphere
              </span>
              <button
                onClick={() => setHudOpen(false)}
                className="text-gray-400 hover:text-white cursor-pointer text-sm p-1"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Toggle: Audio-Reactive Aura */}
            <div className="flex items-center justify-between">
              <span className="text-gray-300 flex items-center gap-2">
                <i className="fas fa-circle-notch text-[10px]" style={{ color: activeAuraColor }}></i>
                Reactive Aura
              </span>
              <button
                onClick={() => setAuraEnabled(!auraEnabled)}
                className={`w-8 h-4 rounded-full transition-colors relative cursor-pointer ${
                  auraEnabled ? 'bg-emerald-500' : 'bg-gray-700'
                }`}
              >
                <span className={`block w-3 h-3 rounded-full bg-white transition-transform ${
                  auraEnabled ? 'translate-x-4' : 'translate-x-1'
                }`}></span>
              </button>
            </div>

            {/* Toggle: Celestial Particles */}
            <div className="flex items-center justify-between">
              <span className="text-gray-300 flex items-center gap-2">
                <i className="fas fa-stars text-cyan-400 text-[10px]"></i>
                Cosmic Stardust
              </span>
              <button
                onClick={() => setParticlesEnabled(!particlesEnabled)}
                className={`w-8 h-4 rounded-full transition-colors relative cursor-pointer ${
                  particlesEnabled ? 'bg-emerald-500' : 'bg-gray-700'
                }`}
              >
                <span className={`block w-3 h-3 rounded-full bg-white transition-transform ${
                  particlesEnabled ? 'translate-x-4' : 'translate-x-1'
                }`}></span>
              </button>
            </div>

            {/* Toggle: Ambient Video */}
            <div className="flex items-center justify-between">
              <span className="text-gray-300 flex items-center gap-2">
                <i className="fas fa-film text-purple-400 text-[10px]"></i>
                Video Reel
              </span>
              <button
                onClick={() => setVideoEnabled(!videoEnabled)}
                className={`w-8 h-4 rounded-full transition-colors relative cursor-pointer ${
                  videoEnabled ? 'bg-emerald-500' : 'bg-gray-700'
                }`}
              >
                <span className={`block w-3 h-3 rounded-full bg-white transition-transform ${
                  videoEnabled ? 'translate-x-4' : 'translate-x-1'
                }`}></span>
              </button>
            </div>

            {/* Toggle: Venus Ambient Piano Audio */}
            <div className="flex items-center justify-between pt-1 border-t border-white/10">
              <span className="text-gray-300 flex items-center gap-2">
                <i className={`fas ${audioMuted ? 'fa-volume-mute text-gray-400' : 'fa-volume-up text-amber-400'} text-[10px]`}></i>
                Venus Piano
              </span>
              <button
                onClick={toggleAmbientAudio}
                className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[10px] tracking-wider uppercase cursor-pointer"
              >
                {audioMuted ? 'Muted' : 'Playing'}
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setHudOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/15 backdrop-blur-md text-gray-300 hover:text-white transition-all shadow-lg hover:scale-105 cursor-pointer text-[11px]"
            title="Configure Void Atmosphere"
          >
            <span 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: activeAuraColor }}
            ></span>
            <span className="tracking-widest uppercase font-mono">Atmosphere</span>
            <i className="fas fa-sliders-h text-[10px] opacity-70"></i>
          </button>
        )}
      </div>
    </>
  );
};
