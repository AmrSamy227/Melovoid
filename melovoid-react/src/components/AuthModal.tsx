import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const AVATAR_PRESETS = [
  { id: '1', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', label: 'Navigator' },
  { id: '2', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', label: 'Stardust' },
  { id: '3', url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80', label: 'Echo' },
  { id: '4', url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80', label: 'Wanderer' },
  { id: '5', url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80', label: 'Muse' },
  { id: '6', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80', label: 'Runner' }
];

export const AuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    authModalMode,
    closeAuthModal,
    openAuthModal,
    signIn,
    signUp,
    demoLogin
  } = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(AVATAR_PRESETS[0].url);
  const [customAvatarUrl, setCustomAvatarUrl] = useState('');
  const [error, setError] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (authModalMode === 'signin') {
      if (!email.trim() || !email.includes('@')) {
        setError('Please enter a valid email address.');
        return;
      }
      signIn(email, password);
    } else {
      if (!name.trim()) {
        setError('Please enter your display name.');
        return;
      }
      if (!username.trim()) {
        setError('Please choose a handle/username.');
        return;
      }
      if (!email.trim() || !email.includes('@')) {
        setError('Please enter a valid email address.');
        return;
      }
      signUp({
        name: name.trim(),
        username: username.trim(),
        email: email.trim(),
        avatar: customAvatarUrl.trim() || selectedAvatar
      });
    }
  };

  return (
    <div className="fixed inset-0 z-[140] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in select-none font-mono">
      {/* Dynamic ambient halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[160px] bg-orange-500/20 pointer-events-none"></div>

      <div className="relative w-full max-w-md bg-[#0f0c0b] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden z-10">
        
        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-all flex items-center justify-center cursor-pointer border border-white/10"
        >
          <i className="fas fa-times text-xs"></i>
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-orange-500/30 to-amber-500/10 border border-orange-500/40 flex items-center justify-center shadow-lg shadow-orange-500/20">
            <i className="fas fa-music text-orange-400 text-lg"></i>
          </div>
          <h2 className="text-xl sm:text-2xl font-orbitron font-bold text-white uppercase tracking-wider">
            {authModalMode === 'signin' ? 'Access The Void' : 'Join Melovoid'}
          </h2>
          <p className="text-xs text-gray-400 font-mono mt-1">
            {authModalMode === 'signin'
              ? 'Sign in to sync your playlists & favorite tracks'
              : 'Create your audiophile profile & curated playlists'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 mb-6 text-xs">
          <button
            type="button"
            onClick={() => {
              setError('');
              openAuthModal('signin');
            }}
            className={`flex-1 py-2 rounded-lg font-bold tracking-wider transition-all cursor-pointer ${
              authModalMode === 'signin'
                ? 'bg-white text-black shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            SIGN IN
          </button>
          <button
            type="button"
            onClick={() => {
              setError('');
              openAuthModal('signup');
            }}
            className={`flex-1 py-2 rounded-lg font-bold tracking-wider transition-all cursor-pointer ${
              authModalMode === 'signup'
                ? 'bg-white text-black shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            CREATE ACCOUNT
          </button>
        </div>

        {/* Error notification */}
        {error && (
          <div className="mb-4 px-3.5 py-2 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
            <i className="fas fa-exclamation-circle"></i>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {authModalMode === 'signup' && (
            <>
              {/* Display Name */}
              <div>
                <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                  Display Name
                </label>
                <div className="relative">
                  <i className="fas fa-user absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-xs"></i>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Walker"
                    className="w-full bg-white/5 border border-white/15 focus:border-orange-500 rounded-xl py-2.5 pl-9 pr-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-all font-mono"
                  />
                </div>
              </div>

              {/* Username Handle */}
              <div>
                <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                  Handle / Username
                </label>
                <div className="relative">
                  <i className="fas fa-at absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-xs"></i>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="alexwalker"
                    className="w-full bg-white/5 border border-white/15 focus:border-orange-500 rounded-xl py-2.5 pl-9 pr-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-all font-mono"
                  />
                </div>
              </div>

              {/* Avatar Preset Selection */}
              <div>
                <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2">
                  Choose Avatar Persona
                </label>
                <div className="grid grid-cols-6 gap-2 mb-2">
                  {AVATAR_PRESETS.map((av) => (
                    <button
                      key={av.id}
                      type="button"
                      onClick={() => {
                        setSelectedAvatar(av.url);
                        setCustomAvatarUrl('');
                      }}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-transform cursor-pointer ${
                        selectedAvatar === av.url && !customAvatarUrl
                          ? 'border-orange-500 scale-105 shadow-md shadow-orange-500/30'
                          : 'border-white/15 opacity-60 hover:opacity-100'
                      }`}
                      title={av.label}
                    >
                      <img src={av.url} alt={av.label} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Email field */}
          <div>
            <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <i className="fas fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-xs"></i>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@domain.com"
                className="w-full bg-white/5 border border-white/15 focus:border-orange-500 rounded-xl py-2.5 pl-9 pr-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-all font-mono"
              />
            </div>
          </div>

          {/* Password field */}
          <div>
            <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <i className="fas fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-xs"></i>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/15 focus:border-orange-500 rounded-xl py-2.5 pl-9 pr-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-all font-mono"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-orbitron font-bold text-sm uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-orange-500/20 active:scale-95 mt-2"
          >
            {authModalMode === 'signin' ? 'Sign In To Account' : 'Initialize Account'}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-[1px] bg-white/10"></div>
          <span className="px-3 text-[10px] font-mono text-gray-500 uppercase tracking-widest">or quick explore</span>
          <div className="flex-1 h-[1px] bg-white/10"></div>
        </div>

        {/* Instant Demo Account Access */}
        <button
          type="button"
          onClick={demoLogin}
          className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
        >
          <i className="fas fa-bolt text-amber-400 text-xs"></i>
          <span>1-Click Demo Login (@echovoid)</span>
        </button>

      </div>
    </div>
  );
};

