import React from 'react';
import { HeroCarousel } from '../components/HeroCarousel';
import { BandsCarousel } from '../components/BandsCarousel';
import { TrendingSongs } from '../components/TrendingSongs';
import { TrendingAlbums } from '../components/TrendingAlbums';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen z-10 selection:bg-orange-500 selection:text-white">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Atmospheric Void Metrics Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-8 sm:mb-12 relative z-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 p-3 sm:p-5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl shadow-2xl">
          <div className="text-center p-2 hover:bg-white/[0.03] rounded-xl transition-colors">
            <div className="font-orbitron text-xl sm:text-2xl font-bold text-white">6</div>
            <div className="font-mono text-[9px] sm:text-xs text-gray-400 uppercase tracking-wider mt-0.5">Sonic Titans</div>
          </div>
          <div className="text-center p-2 hover:bg-white/[0.03] rounded-xl transition-colors">
            <div className="font-orbitron text-xl sm:text-2xl font-bold text-emerald-400">40</div>
            <div className="font-mono text-[9px] sm:text-xs text-gray-400 uppercase tracking-wider mt-0.5">Master Albums</div>
          </div>
          <div className="text-center p-2 hover:bg-white/[0.03] rounded-xl transition-colors">
            <div className="font-orbitron text-xl sm:text-2xl font-bold text-amber-400">248M+</div>
            <div className="font-mono text-[9px] sm:text-xs text-gray-400 uppercase tracking-wider mt-0.5">Monthly Reach</div>
          </div>
          <div className="text-center p-2 hover:bg-white/[0.03] rounded-xl transition-colors">
            <div className="font-orbitron text-xl sm:text-2xl font-bold text-pink-400">Spatial</div>
            <div className="font-mono text-[9px] sm:text-xs text-gray-400 uppercase tracking-wider mt-0.5">Lossless Audio</div>
          </div>
        </div>
      </div>

      {/* Elegant Glowing Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
      </div>

      {/* Our Bands Section */}
      <BandsCarousel />

      {/* Elegant Glowing Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
      </div>

      {/* Trending Songs Section */}
      <TrendingSongs />

      {/* Elegant Glowing Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
      </div>

      {/* Trending Albums Section */}
      <TrendingAlbums />

      {/* Footer */}
      <div className="mt-16 sm:mt-24">
        <Footer />
      </div>
    </div>
  );
};
