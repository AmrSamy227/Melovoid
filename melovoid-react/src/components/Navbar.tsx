import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BANDS_RICH, ALBUMS } from '../data/musicData';
import { useUser } from '../context/UserContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();

  const {
    currentUser,
    isAuthenticated,
    openAuthModal,
    openProfileModal,
    signOut
  } = useUser();

  let themeColor = '#f97316';
  if (location.pathname.startsWith('/artist/')) {
    const artistId = location.pathname.split('/')[2];
    const artistInfo = BANDS_RICH.find(b => b.id === artistId || b.id.replace('_', '-') === artistId);
    if (artistInfo && artistInfo.accentColor) themeColor = artistInfo.accentColor;
  } else if (location.pathname.startsWith('/album/')) {
    const albumId = location.pathname.split('/')[2];
    const albumInfo = Object.values(ALBUMS).find(a => a.id === albumId || a.id.replace(/_/g, '-') === albumId);
    if (albumInfo) {
      const artistInfo = BANDS_RICH.find(b => b.name === albumInfo.artist);
      if (artistInfo && artistInfo.accentColor) themeColor = artistInfo.accentColor;
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setUserMenuOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 p-4 sm:p-6 transition-all duration-300 ${isScrolled ? 'navbar-scrolled' : ''}`}
        style={{ '--page-accent': themeColor } as React.CSSProperties}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <i className="fas fa-music text-black text-xs sm:text-sm"></i>
            </div>
            <span className="font-orbitron text-xl sm:text-2xl tracking-wider text-white">
              MELO<b className="text-[var(--page-accent)] font-black">VOID</b>
            </span>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-mono text-sm tracking-widest transition-colors ${
                location.pathname === '/' ? 'text-[var(--page-accent)] font-bold' : 'text-white hover:text-[var(--page-accent)]'
              }`}
            >
              HOME
            </Link>
            <Link 
              to="/artists" 
              className={`font-mono text-sm tracking-widest transition-colors ${
                location.pathname === '/artists' ? 'text-[var(--page-accent)] font-bold' : 'text-white hover:text-[var(--page-accent)]'
              }`}
            >
              ARTISTS
            </Link>
            <Link 
              to="/albums" 
              className={`font-mono text-sm tracking-widest transition-colors ${
                location.pathname === '/albums' ? 'text-[var(--page-accent)] font-bold' : 'text-white hover:text-[var(--page-accent)]'
              }`}
            >
              ALBUMS
            </Link>
            <Link 
              to="/playlists" 
              className={`font-mono text-sm tracking-widest transition-colors flex items-center gap-1.5 ${
                location.pathname.startsWith('/playlist') ? 'text-[var(--page-accent)] font-bold' : 'text-white hover:text-[var(--page-accent)]'
              }`}
            >
              <span>PLAYLISTS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--page-accent)] animate-pulse"></span>
            </Link>
          </div>
          
          {/* Desktop Right Side: User Profile / Auth Pill */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated && currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-all cursor-pointer"
                >
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-7 h-7 rounded-full object-cover border border-emerald-400"
                  />
                  <span className="text-xs font-mono font-medium text-white max-w-[100px] truncate">
                    {currentUser.name.split(' ')[0]}
                  </span>
                  <i className={`fas fa-chevron-${userMenuOpen ? 'up' : 'down'} text-[10px] text-gray-400`}></i>
                </button>

                {/* Dropdown Menu */}
                {userMenuOpen && (
                  <div className="absolute right-0 top-12 w-48 bg-[#0f0c0b]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl p-2 z-50 font-mono text-xs animate-fade-in">
                    <div className="px-3 py-2 border-b border-white/10 mb-1">
                      <div className="font-bold text-white truncate">{currentUser.name}</div>
                      <div className="text-[10px] text-gray-400 truncate">{currentUser.username}</div>
                    </div>

                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        openProfileModal();
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 text-gray-200 hover:text-white flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <i className="fas fa-id-badge text-xs text-orange-400"></i>
                      <span>My Profile</span>
                    </button>

                    <Link
                      to="/playlists"
                      onClick={() => setUserMenuOpen(false)}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 text-gray-200 hover:text-white flex items-center gap-2 cursor-pointer transition-colors block"
                    >
                      <i className="fas fa-list-ul text-xs text-purple-400"></i>
                      <span>My Playlists</span>
                    </Link>

                    <Link
                      to="/playlist/liked-songs"
                      onClick={() => setUserMenuOpen(false)}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 text-gray-200 hover:text-white flex items-center gap-2 cursor-pointer transition-colors block"
                    >
                      <i className="fas fa-heart text-xs text-emerald-400"></i>
                      <span>Liked Songs</span>
                    </Link>

                    <div className="h-[1px] bg-white/10 my-1"></div>

                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        signOut();
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-red-500/20 text-red-400 flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <i className="fas fa-sign-out-alt text-xs"></i>
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => openAuthModal('signin')}
                className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer active:scale-95 shadow-md"
              >
                <i className="fas fa-user-circle text-sm text-[var(--page-accent)]"></i>
                <span>Sign In</span>
              </button>
            )}

            {/* Social Icons */}
            <div className="flex items-center space-x-2 pl-2 border-l border-white/10">
              <a href="#" className="w-7 h-7 glass-effect rounded-full flex items-center justify-center hover:bg-[var(--page-accent)] transition-all text-white text-[10px]">
                <i className="fab fa-spotify"></i>
              </a>
              <a href="#" className="w-7 h-7 glass-effect rounded-full flex items-center justify-center hover:bg-[var(--page-accent)] transition-all text-white text-[10px]">
                <i className="fab fa-apple"></i>
              </a>
            </div>
          </div>
          
          {/* Mobile Right: User Profile Icon + Hamburger Menu */}
          <div className="flex md:hidden items-center space-x-3">
            {isAuthenticated && currentUser ? (
              <button
                onClick={openProfileModal}
                className="w-8 h-8 rounded-full overflow-hidden border border-emerald-400"
              >
                <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
              </button>
            ) : (
              <button
                onClick={() => openAuthModal('signin')}
                className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-mono text-white"
              >
                Sign In
              </button>
            )}

            <label className="burger" htmlFor="burger">
              <input 
                type="checkbox" 
                id="burger" 
                checked={mobileMenuOpen} 
                onChange={() => setMobileMenuOpen(!mobileMenuOpen)} 
              />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div 
        id="mobile-menu" 
        className={`fixed top-0 bottom-0 left-0 w-3/4 max-w-xs bg-[#0b0908] p-6 z-40 transition-transform duration-300 ease-in-out border-r border-white/10 shadow-2xl flex flex-col justify-between ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="space-y-6 mt-20" style={{ '--page-accent': themeColor } as React.CSSProperties}>
          {/* User Card in Mobile Drawer */}
          {isAuthenticated && currentUser ? (
            <div 
              onClick={() => {
                setMobileMenuOpen(false);
                openProfileModal();
              }}
              className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 cursor-pointer"
            >
              <img src={currentUser.avatar} alt={currentUser.name} className="w-10 h-10 rounded-full object-cover border border-emerald-400" />
              <div className="min-w-0">
                <div className="text-sm font-bold text-white truncate font-orbitron">{currentUser.name}</div>
                <div className="text-xs text-orange-400 font-mono truncate">{currentUser.username}</div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openAuthModal('signin');
              }}
              className="w-full py-2.5 rounded-xl bg-orange-500 text-black font-orbitron font-bold text-xs uppercase"
            >
              Sign In / Create Account
            </button>
          )}

          <div className="flex flex-col space-y-4 pt-4 border-t border-white/10 font-mono text-base">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[var(--page-accent)] transition-colors">HOME</Link>
            <Link to="/artists" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[var(--page-accent)] transition-colors">ARTISTS</Link>
            <Link to="/albums" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[var(--page-accent)] transition-colors">ALBUMS</Link>
            <Link to="/playlists" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[var(--page-accent)] transition-colors flex items-center gap-2">
              <span>PLAYLISTS</span>
              <span className="w-2 h-2 rounded-full bg-[var(--page-accent)] animate-pulse"></span>
            </Link>
            <Link to="/playlist/liked-songs" onClick={() => setMobileMenuOpen(false)} className="text-purple-400 hover:text-white transition-colors flex items-center gap-2">
              <i className="fas fa-heart text-xs"></i>
              <span>LIKED SONGS</span>
            </Link>
          </div>
        </div>

        {isAuthenticated && (
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              signOut();
            }}
            className="w-full py-2 rounded-xl bg-red-500/15 text-red-400 text-xs font-mono border border-red-500/25 cursor-pointer"
          >
            Sign Out
          </button>
        )}
      </div>
    </>
  );
};
