import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-800 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <i className="fas fa-music text-black text-sm"></i>
              </div>
              <span className="font-orbitron text-xl tracking-wider text-white">
                MELO<b className="text-[var(--page-accent)]">VOID</b>
              </span>
            </div>
            <p className="text-gray-400 text-sm font-mono leading-relaxed">
              Discover the best music from legendary bands and emerging artists.
            </p>
          </div>

          {/* Artists List Links */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-white uppercase tracking-wider">Artists</h4>
            <ul className="space-y-2 text-sm font-mono text-gray-400">
              <li><Link to="/artist/radiohead" className="hover:text-[var(--page-accent)] transition-colors">Radiohead</Link></li>
              <li><Link to="/artist/arctic-monkeys" className="hover:text-[var(--page-accent)] transition-colors">Arctic Monkeys</Link></li>
              <li><Link to="/artist/the-smiths" className="hover:text-[var(--page-accent)] transition-colors">The Smiths</Link></li>
              <li><Link to="/artist/nirvana" className="hover:text-[var(--page-accent)] transition-colors">Nirvana</Link></li>
              <li><Link to="/artist/coldplay" className="hover:text-[var(--page-accent)] transition-colors">Coldplay</Link></li>
              <li><Link to="/artist/cas" className="hover:text-[var(--page-accent)] transition-colors">CAS</Link></li>
            </ul>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-white uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-sm font-mono text-gray-400">
              <li><a href="#" className="hover:text-[var(--page-accent)] transition-colors">Browse</a></li>
              <li><a href="#" className="hover:text-[var(--page-accent)] transition-colors">Playlists</a></li>
              <li><a href="#" className="hover:text-[var(--page-accent)] transition-colors">New Releases</a></li>
              <li><a href="#" className="hover:text-[var(--page-accent)] transition-colors">Charts</a></li>
            </ul>
          </div>

          {/* Connect & Social Handles */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-white uppercase tracking-wider">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-[var(--page-accent)] transition-all text-white">
                <i className="fab fa-spotify text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-[var(--page-accent)] transition-all text-white">
                <i className="fab fa-apple text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-[var(--page-accent)] transition-all text-white">
                <i className="fab fa-youtube text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-[var(--page-accent)] transition-all text-white">
                <i className="fab fa-instagram text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Sub-Footer Terms */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-mono">
            <div className="mb-4 md:mb-0">
              <p>© 2026 MELOVOID. All Rights Reserved</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-[var(--page-accent)] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[var(--page-accent)] transition-colors">Terms</a>
              <a href="#" className="hover:text-[var(--page-accent)] transition-colors">Support</a>
              <a href="#" className="hover:text-[var(--page-accent)] transition-colors">About</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
