import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

export const AddToPlaylistModal: React.FC = () => {
  const {
    activeAddToPlaylistSong,
    closeAddToPlaylistModal,
    playlists,
    addSongToPlaylist,
    removeSongFromPlaylist,
    isSongInPlaylist,
    createPlaylist,
    isAuthenticated,
    openAuthModal
  } = useUser();

  const [newTitle, setNewTitle] = useState('');
  const [isCreatingInline, setIsCreatingInline] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  if (!activeAddToPlaylistSong) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2000);
  };

  const handleToggleSongInPlaylist = (playlistId: string, playlistTitle: string) => {
    if (isSongInPlaylist(playlistId, activeAddToPlaylistSong.id)) {
      removeSongFromPlaylist(playlistId, activeAddToPlaylistSong.id);
      showToast(`Removed from "${playlistTitle}"`);
    } else {
      addSongToPlaylist(playlistId, activeAddToPlaylistSong);
      showToast(`Added to "${playlistTitle}"`);
    }
  };

  const handleCreateNewPlaylist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newPl = createPlaylist(newTitle.trim(), '', activeAddToPlaylistSong.coverImage);
    addSongToPlaylist(newPl.id, activeAddToPlaylistSong);
    setNewTitle('');
    setIsCreatingInline(false);
    showToast(`Created & added to "${newPl.title}"!`);
  };

  return (
    <div className="fixed inset-0 z-[145] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in select-none font-mono">
      {/* Toast confirmation */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[150] px-4 py-2 rounded-full bg-black/90 border border-emerald-500/50 text-emerald-400 font-mono text-xs flex items-center gap-2 shadow-2xl backdrop-blur-xl animate-fade-in">
          <i className="fas fa-check-circle text-xs"></i>
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="relative w-full max-w-md bg-[#0f0c0b] border border-white/15 rounded-3xl p-6 shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden z-10">
        
        {/* Close Button */}
        <button
          onClick={closeAddToPlaylistModal}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-all flex items-center justify-center cursor-pointer border border-white/10"
        >
          <i className="fas fa-times text-xs"></i>
        </button>

        {/* Modal Header with Selected Song Card */}
        <div className="mb-5 pr-8">
          <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest block mb-1">
            Add To Playlist
          </span>
          <div className="flex items-center gap-3 p-2 rounded-2xl bg-white/5 border border-white/10">
            <img
              src={activeAddToPlaylistSong.coverImage}
              alt={activeAddToPlaylistSong.title}
              className="w-12 h-12 rounded-xl object-cover shadow"
            />
            <div className="min-w-0 flex-1">
              <h4 className="text-xs font-orbitron font-bold text-white truncate">
                {activeAddToPlaylistSong.title}
              </h4>
              <p className="text-[11px] text-gray-400 truncate mt-0.5">
                {activeAddToPlaylistSong.artist}
              </p>
            </div>
          </div>
        </div>

        {/* Not logged in hint */}
        {!isAuthenticated && (
          <div className="mb-4 p-3 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-between text-xs">
            <span className="text-orange-300 text-[11px]">Playlists are stored in your session. Sign in to sync across devices.</span>
            <button
              onClick={() => {
                closeAddToPlaylistModal();
                openAuthModal('signin');
              }}
              className="text-white underline font-bold shrink-0 ml-2"
            >
              Sign In
            </button>
          </div>
        )}

        {/* Playlists List */}
        <div className="space-y-1.5 max-h-56 overflow-y-auto no-scrollbar pr-1 mb-4">
          {playlists.length > 0 ? (
            playlists.map((pl) => {
              const inPlaylist = isSongInPlaylist(pl.id, activeAddToPlaylistSong.id);

              return (
                <div
                  key={pl.id}
                  onClick={() => handleToggleSongInPlaylist(pl.id, pl.title)}
                  className={`flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer ${
                    inPlaylist
                      ? 'bg-emerald-500/15 border-emerald-500/40 text-white'
                      : 'bg-white/5 hover:bg-white/10 border-white/5 text-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <img
                      src={pl.coverImage}
                      alt={pl.title}
                      className="w-9 h-9 rounded-lg object-cover shadow"
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-bold truncate">{pl.title}</div>
                      <div className="text-[10px] text-gray-400">{pl.songs.length} songs</div>
                    </div>
                  </div>

                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${
                    inPlaylist
                      ? 'bg-emerald-400 text-black border-emerald-400'
                      : 'border-white/20 text-transparent'
                  }`}>
                    <i className="fas fa-check text-[10px]"></i>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-6 text-gray-400 text-xs">
              No playlists found. Create your first one below!
            </div>
          )}
        </div>

        {/* Inline Playlist Creator */}
        {isCreatingInline ? (
          <form onSubmit={handleCreateNewPlaylist} className="pt-2 border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="New playlist name..."
              autoFocus
              className="flex-1 bg-white/5 border border-white/15 focus:border-orange-500 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-orange-500 text-black font-bold text-xs uppercase cursor-pointer"
            >
              Create
            </button>
            <button
              type="button"
              onClick={() => setIsCreatingInline(false)}
              className="px-2.5 py-2 rounded-xl bg-white/10 text-gray-400 hover:text-white text-xs cursor-pointer"
            >
              <i className="fas fa-times"></i>
            </button>
          </form>
        ) : (
          <button
            onClick={() => setIsCreatingInline(true)}
            className="w-full py-2.5 rounded-xl border border-dashed border-white/20 hover:border-orange-500/60 text-gray-300 hover:text-white text-xs flex items-center justify-center gap-2 transition-all cursor-pointer bg-white/[0.02] hover:bg-white/5"
          >
            <i className="fas fa-plus text-xs text-orange-400"></i>
            <span>Create New Playlist</span>
          </button>
        )}

      </div>
    </div>
  );
};

