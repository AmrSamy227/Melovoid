import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { Link } from 'react-router-dom';

const AVATAR_PRESETS = [
  { id: '1', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', label: 'Navigator' },
  { id: '2', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', label: 'Stardust' },
  { id: '3', url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80', label: 'Echo' },
  { id: '4', url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80', label: 'Wanderer' },
  { id: '5', url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80', label: 'Muse' },
  { id: '6', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80', label: 'Runner' }
];

export const ProfileModal: React.FC = () => {
  const {
    currentUser,
    isProfileModalOpen,
    closeProfileModal,
    signOut,
    updateProfile,
    playlists
  } = useUser();
  const { likedSongIds } = useAudioPlayer();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(currentUser?.name || '');
  const [username, setUsername] = useState(currentUser?.username || '');
  const [bio, setBio] = useState(currentUser?.bio || '');
  const [avatar, setAvatar] = useState(currentUser?.avatar || '');

  if (!isProfileModalOpen || !currentUser) return null;

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name: name.trim() || currentUser.name,
      username: username.trim() || currentUser.username,
      bio: bio.trim(),
      avatar
    });
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 z-[140] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in select-none font-mono">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] bg-emerald-500/15 pointer-events-none"></div>

      <div className="relative w-full max-w-lg bg-[#0f0c0b] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden z-10">
        
        {/* Close Button */}
        <button
          onClick={closeProfileModal}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-all flex items-center justify-center cursor-pointer border border-white/10"
        >
          <i className="fas fa-times text-xs"></i>
        </button>

        {!isEditing ? (
          <div>
            {/* Header Persona */}
            <div className="flex flex-col sm:flex-row items-center gap-5 pb-6 border-b border-white/10">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-emerald-500/50 shadow-xl shrink-0">
                <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border border-black animate-pulse"></div>
              </div>

              <div className="text-center sm:text-left min-w-0 flex-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h2 className="text-xl font-orbitron font-bold text-white truncate">{currentUser.name}</h2>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    Member
                  </span>
                </div>
                <p className="text-xs text-orange-400 font-mono mt-0.5">{currentUser.username}</p>
                <p className="text-[11px] text-gray-400 font-mono mt-0.5">{currentUser.email}</p>
              </div>
            </div>

            {/* Bio */}
            <div className="py-4 border-b border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block mb-1">
                // Audiophile Log
              </span>
              <p className="text-xs text-gray-300 font-mono leading-relaxed">
                {currentUser.bio || 'Curating cosmic soundscapes across the void.'}
              </p>
            </div>

            {/* Stats Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 py-4 border-b border-white/10 text-center">
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-xl font-orbitron font-bold text-white block">{playlists.length}</span>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Playlists</span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-xl font-orbitron font-bold text-emerald-400 block">{likedSongIds.length}</span>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Liked Songs</span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-xl font-orbitron font-bold text-orange-400 block">Lossless</span>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Stream Tier</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-5 space-y-2.5">
              <Link
                to="/playlists"
                onClick={closeProfileModal}
                className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-orbitron font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <i className="fas fa-list-ul text-xs"></i>
                <span>Manage My Playlists</span>
              </Link>

              <div className="flex gap-2.5">
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-mono transition-all cursor-pointer"
                >
                  <i className="fas fa-edit mr-1.5 text-xs text-gray-400"></i>
                  <span>Edit Profile</span>
                </button>

                <button
                  onClick={signOut}
                  className="px-4 py-2 rounded-xl bg-red-500/15 hover:bg-red-500/25 border border-red-500/30 text-red-400 text-xs font-mono transition-all cursor-pointer"
                  title="Sign Out"
                >
                  <i className="fas fa-sign-out-alt mr-1"></i>
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Profile Edit Mode */
          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-base font-orbitron font-bold text-white uppercase tracking-wider">Edit Profile</h3>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="text-xs text-gray-400 hover:text-white"
              >
                Cancel
              </button>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                Display Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/15 focus:border-orange-500 rounded-xl py-2 px-3 text-sm text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                Handle / Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white/5 border border-white/15 focus:border-orange-500 rounded-xl py-2 px-3 text-sm text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                Bio
              </label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={2}
                className="w-full bg-white/5 border border-white/15 focus:border-orange-500 rounded-xl py-2 px-3 text-xs text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2">
                Choose Avatar
              </label>
              <div className="grid grid-cols-6 gap-2">
                {AVATAR_PRESETS.map((av) => (
                  <button
                    key={av.id}
                    type="button"
                    onClick={() => setAvatar(av.url)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      avatar === av.url ? 'border-orange-500 scale-105' : 'border-white/15 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={av.url} alt={av.label} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-orbitron font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg mt-2"
            >
              Save Changes
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

