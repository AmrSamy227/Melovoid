import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { SONGS } from '../data/musicData';
import { Footer } from '../components/Footer';

export const PlaylistsPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    playlists,
    createPlaylist,
    deletePlaylist,
    currentUser,
    isAuthenticated,
    openAuthModal
  } = useUser();
  const { likedSongIds, playSong } = useAudioPlayer();

  const [isCreatingModal, setIsCreatingModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Collect liked songs objects
  const likedSongs = Object.values(SONGS).filter((s) => likedSongIds.includes(s.id));

  const handlePlayLikedSongs = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (likedSongs.length > 0) {
      playSong(likedSongs[0], likedSongs);
    }
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newPl = createPlaylist(newTitle.trim(), newDescription.trim());
    setIsCreatingModal(false);
    setNewTitle('');
    setNewDescription('');
    navigate(`/playlist/${newPl.id}`);
  };

  return (
    <div className="relative min-h-screen text-white bg-black select-none overflow-x-hidden font-mono pb-32">
      {/* ─── Ambient Backdrop ─────────────────────────────────────── */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full blur-[190px] bg-gradient-to-tr from-purple-600/15 via-orange-500/10 to-transparent pointer-events-none z-0"></div>
      <div 
        className="fixed inset-0 w-full h-full opacity-10 pointer-events-none z-[1]" 
        style={{ background: 'url("/noise.webp") repeat' }}
      ></div>

      {/* ─── Main Content ─────────────────────────────────────────── */}
      <div className="relative z-[3] pt-28 sm:pt-36 px-4 sm:px-8 max-w-7xl mx-auto">
        
        {/* Header Stage */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-mono tracking-widest text-orange-400 font-semibold uppercase">
                Personal Soundtracks
              </span>
              {isAuthenticated && (
                <span className="text-xs font-mono text-gray-400">
                  {playlists.length + (likedSongs.length > 0 ? 1 : 0)} Total Collections
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-orbitron font-black uppercase tracking-wider text-white">
              Playlists & Archives
            </h1>
            <p className="text-xs sm:text-sm font-mono text-gray-400 mt-2 max-w-xl leading-relaxed">
              {isAuthenticated && currentUser
                ? `Welcome back, ${currentUser.name}. Access and curate your private audio collections.`
                : 'Sign in to access your private playlists and curate customized soundscapes.'}
            </p>
          </div>

          {isAuthenticated && (
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setIsCreatingModal(true)}
                className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-400 text-black font-orbitron font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-orange-500/25 active:scale-95"
              >
                <i className="fas fa-plus text-xs"></i>
                <span>Create Playlist</span>
              </button>
            </div>
          )}
        </div>

        {/* ─── Empty State if NO Account is Signed In ─────────────── */}
        {!isAuthenticated || !currentUser ? (
          <div className="my-12 py-16 px-6 sm:px-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl text-center max-w-2xl mx-auto flex flex-col items-center shadow-2xl">
            <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/15 flex items-center justify-center text-3xl text-gray-400 mb-6 shadow-inner">
              <i className="fas fa-lock text-orange-400"></i>
            </div>
            <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-[10px] font-mono tracking-widest uppercase font-bold mb-3">
              Authentication Required
            </span>
            <h2 className="text-2xl sm:text-3xl font-orbitron font-bold text-white uppercase tracking-wider mb-2">
              No Account Signed In
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 font-mono max-w-md leading-relaxed mb-8">
              Playlists are private to each user account. Sign in or create an account to start curating your personal tapes and collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => openAuthModal('signin')}
                className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-black font-orbitron font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-orange-500/30 active:scale-95"
              >
                Sign In To View Playlists
              </button>
              <button
                onClick={() => openAuthModal('signup')}
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-wider transition-all cursor-pointer active:scale-95"
              >
                Create Account
              </button>
            </div>
          </div>
        ) : (
          /* ─── Authenticated User's Isolated Playlists View ───────── */
          <>
            {/* Liked Songs Special Hero Banner */}
            <div 
              onClick={() => navigate('/playlist/liked-songs')}
              className="group relative overflow-hidden rounded-3xl p-6 sm:p-10 mb-12 border border-white/15 bg-gradient-to-r from-purple-900/40 via-indigo-950/30 to-black/60 backdrop-blur-2xl transition-all duration-300 hover:border-purple-500/50 cursor-pointer shadow-2xl"
            >
              <div className="absolute right-0 top-0 w-80 h-80 rounded-full blur-[120px] bg-purple-500/25 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-2xl shadow-purple-500/40 shrink-0 group-hover:scale-105 transition-transform">
                    <i className="fas fa-heart text-4xl sm:text-5xl text-white drop-shadow-md"></i>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300 font-bold block mb-1">
                      Private Smart Playlist
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-orbitron font-black uppercase text-white tracking-wide">
                      Liked Songs
                    </h2>
                    <p className="text-xs font-mono text-gray-300 mt-1">
                      {likedSongs.length} track{likedSongs.length === 1 ? '' : 's'} saved by {currentUser.name}
                    </p>
                  </div>
                </div>

                {likedSongs.length > 0 && (
                  <button
                    onClick={handlePlayLikedSongs}
                    className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer shrink-0"
                    title="Play Liked Songs"
                  >
                    <i className="fas fa-play ml-1"></i>
                  </button>
                )}
              </div>
            </div>

            {/* User's Custom Playlists */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg sm:text-xl font-orbitron font-bold uppercase tracking-wider text-white">
                  Your Playlists ({playlists.length})
                </h3>
              </div>

              {playlists.length === 0 ? (
                /* Empty state when user is logged in but has no playlists yet */
                <div className="py-16 px-6 rounded-3xl bg-white/[0.02] border border-dashed border-white/15 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 text-2xl mb-4">
                    <i className="fas fa-compact-disc text-orange-400"></i>
                  </div>
                  <h4 className="text-lg font-orbitron font-bold text-white uppercase tracking-wider mb-1">
                    No Playlists Created Yet
                  </h4>
                  <p className="text-xs text-gray-400 font-mono max-w-sm mb-6">
                    You haven't created any playlists on this account yet. Click below to start building your first tape!
                  </p>
                  <button
                    onClick={() => setIsCreatingModal(true)}
                    className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-400 text-black font-orbitron font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg active:scale-95 flex items-center gap-2"
                  >
                    <i className="fas fa-plus text-xs"></i>
                    <span>Create Your First Playlist</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {/* Create New Card */}
                  <div
                    onClick={() => setIsCreatingModal(true)}
                    className="group border border-dashed border-white/20 hover:border-orange-500/70 rounded-3xl p-6 flex flex-col items-center justify-center text-center cursor-pointer min-h-[300px] transition-all bg-white/[0.02] hover:bg-white/[0.05]"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/10 group-hover:bg-orange-500 text-gray-300 group-hover:text-black flex items-center justify-center text-2xl transition-all mb-4 shadow-lg">
                      <i className="fas fa-plus"></i>
                    </div>
                    <h4 className="font-orbitron font-bold text-sm uppercase tracking-wider text-white group-hover:text-orange-400 transition-colors">
                      New Playlist
                    </h4>
                    <p className="text-xs font-mono text-gray-400 mt-1 max-w-[180px]">
                      Create a fresh customized tape
                    </p>
                  </div>

                  {/* Existing Playlists for THIS user */}
                  {playlists.map((pl) => (
                    <div
                      key={pl.id}
                      onClick={() => navigate(`/playlist/${pl.id}`)}
                      className="group relative bg-white/[0.03] hover:bg-white/[0.08] p-4 rounded-3xl border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-xl hover:-translate-y-1 block min-h-[300px]"
                    >
                      {/* Playlist Artwork */}
                      <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-black/60 shadow-lg">
                        <img
                          src={pl.coverImage}
                          alt={pl.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Floating Play Glyph */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-orange-500 text-black flex items-center justify-center text-lg shadow-xl hover:scale-105 transition-transform">
                            <i className="fas fa-play ml-0.5"></i>
                          </div>
                        </div>

                        {/* Track count badge */}
                        <div className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-gray-300">
                          {pl.songs.length} tracks
                        </div>

                        {/* Delete button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (window.confirm(`Delete "${pl.title}"?`)) {
                              deletePlaylist(pl.id);
                            }
                          }}
                          className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 p-1.5 rounded-full bg-black/80 hover:bg-red-500/30 text-gray-400 hover:text-red-400 text-xs transition-all cursor-pointer border border-white/10"
                          title="Delete playlist"
                        >
                          <i className="fas fa-trash-alt text-[10px]"></i>
                        </button>
                      </div>

                      {/* Playlist Info */}
                      <div className="space-y-1">
                        <h4 className="font-orbitron font-bold text-sm text-white truncate group-hover:text-orange-400 transition-colors">
                          {pl.title}
                        </h4>
                        <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                          {pl.description || `Created by ${pl.createdBy}`}
                        </p>
                        <div className="text-[10px] text-gray-500 pt-1 font-mono uppercase tracking-wider">
                          {pl.createdBy}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

      </div>

      {/* ─── Create Playlist Modal ───────────────────────────────── */}
      {isCreatingModal && (
        <div className="fixed inset-0 z-[140] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in font-mono select-none">
          <div className="relative w-full max-w-md bg-[#0f0c0b] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10">
            <button
              onClick={() => setIsCreatingModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-all flex items-center justify-center cursor-pointer border border-white/10"
            >
              <i className="fas fa-times text-xs"></i>
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 text-lg">
                <i className="fas fa-compact-disc"></i>
              </div>
              <h3 className="text-xl font-orbitron font-bold text-white uppercase tracking-wider">
                Create New Playlist
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Name your sonic archive and curate your songs
              </p>
            </div>

            <form onSubmit={handleCreateSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                  Playlist Title
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Late Night Drives"
                  autoFocus
                  required
                  className="w-full bg-white/5 border border-white/15 focus:border-orange-500 rounded-xl py-2.5 px-3.5 text-sm text-white focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                  Description (Optional)
                </label>
                <textarea
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Describe the mood or genre..."
                  rows={2}
                  className="w-full bg-white/5 border border-white/15 focus:border-orange-500 rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-orbitron font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-orange-500/20 active:scale-95 mt-2"
              >
                Create Playlist
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ─── Footer ─────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
};
