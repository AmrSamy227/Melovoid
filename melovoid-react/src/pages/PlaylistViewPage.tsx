import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useAudioPlayer } from '../context/AudioPlayerContext';
import { SONGS } from '../data/musicData';
import type { Song } from '../types/music';
import { Footer } from '../components/Footer';

export const PlaylistViewPage: React.FC = () => {
  const { playlistId } = useParams<{ playlistId: string }>();
  const navigate = useNavigate();
  const {
    playlists,
    deletePlaylist,
    updatePlaylist,
    removeSongFromPlaylist,
    addSongToPlaylist,
    currentUser
  } = useUser();
  const {
    currentSong,
    isPlaying,
    playSong,
    togglePlay,
    addToQueue,
    toggleLikeSong,
    isSongLiked,
    likedSongIds
  } = useAudioPlayer();

  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editDesc, setEditDesc] = useState('');
  const [queuedSongId, setQueuedSongId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [playlistId]);

  const isLikedSongsPlaylist = playlistId === 'liked-songs';

  // Find playlist or construct liked songs virtual playlist
  const playlist = useMemo(() => {
    if (isLikedSongsPlaylist) {
      const likedSongs = Object.values(SONGS).filter((s) => likedSongIds.includes(s.id));
      return {
        id: 'liked-songs',
        title: 'Liked Songs',
        description: 'Your personal collection of saved favorite tracks across the Melovoid galaxy.',
        coverImage: '/There_is_a_Light_That_Never_Goes_Out_Neon_Sign_U705_3bbdd44f-b8e1-4d50-a996-3a3f0d460a21.webp',
        createdBy: currentUser ? currentUser.name : 'You',
        createdAt: 'Auto-updating',
        songs: likedSongs
      };
    }
    return playlists.find((p) => p.id === playlistId) || null;
  }, [playlistId, isLikedSongsPlaylist, playlists, likedSongIds, currentUser]);

  // Check if a song from this playlist is currently playing
  const isThisPlaylistPlaying = useMemo(() => {
    if (!isPlaying || !currentSong || !playlist) return false;
    return playlist.songs.some((s) => s.id === currentSong.id);
  }, [isPlaying, currentSong, playlist]);

  // Total runtime
  const totalDuration = useMemo(() => {
    if (!playlist || playlist.songs.length === 0) return '0 min';
    let totalSeconds = 0;
    playlist.songs.forEach((s) => {
      if (s.duration) {
        const parts = s.duration.split(':').map(Number);
        if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
          totalSeconds += parts[0] * 60 + parts[1];
        } else {
          totalSeconds += 220;
        }
      } else {
        totalSeconds += 220;
      }
    });
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins} min ${secs > 0 ? `${secs} sec` : ''}`;
  }, [playlist]);

  if (!playlist) {
    return (
      <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white px-4 font-mono">
        <h2 className="text-3xl font-orbitron font-bold">Playlist Not Found</h2>
        <p className="text-gray-400 text-sm mt-2">The requested collection does not exist or has been deleted.</p>
        <Link
          to="/playlists"
          className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-mono transition-all text-white"
        >
          Back to Playlists
        </Link>
      </div>
    );
  }

  // Play / Pause playlist
  const handlePlayPlaylist = () => {
    if (playlist.songs.length === 0) return;
    if (isThisPlaylistPlaying) {
      togglePlay();
    } else {
      playSong(playlist.songs[0], playlist.songs);
    }
  };

  // Shuffle playlist
  const handleShufflePlaylist = () => {
    if (playlist.songs.length === 0) return;
    const shuffled = [...playlist.songs].sort(() => Math.random() - 0.5);
    playSong(shuffled[0], shuffled);
  };

  // Queue helper
  const handleAddToQueue = (e: React.MouseEvent, song: Song) => {
    e.stopPropagation();
    addToQueue(song);
    setQueuedSongId(song.id);
    setTimeout(() => setQueuedSongId(null), 1800);
  };

  // Save edit playlist info
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editTitle.trim()) return;
    updatePlaylist(playlist.id, {
      title: editTitle.trim(),
      description: editDesc.trim()
    });
    setIsEditing(false);
  };

  // Recommended tracks to add that aren't already in the playlist
  const recommendedSongs = Object.values(SONGS)
    .filter((s) => !playlist.songs.some((ps) => ps.id === s.id))
    .slice(0, 5);

  return (
    <div className="relative min-h-screen text-white bg-black select-none overflow-x-hidden font-mono pb-32">
      {/* ─── Ambient Backdrop ─────────────────────────────────────── */}
      <div 
        className={`fixed top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full blur-[200px] pointer-events-none z-0 opacity-20 ${
          isLikedSongsPlaylist ? 'bg-purple-600' : 'bg-orange-500'
        }`}
      ></div>
      <div 
        className="fixed inset-0 w-full h-full opacity-10 pointer-events-none z-[1]" 
        style={{ background: 'url("/noise.webp") repeat' }}
      ></div>

      {/* ─── Main Content ─────────────────────────────────────────── */}
      <div className="relative z-[3] pt-28 sm:pt-36 px-4 sm:px-8 max-w-7xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-6 uppercase tracking-wider">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/playlists" className="hover:text-white transition-colors">Playlists</Link>
          <span>/</span>
          <span className="text-orange-400 truncate max-w-xs">{playlist.title}</span>
        </div>

        {/* ─── Playlist Hero Header ─────────────────────────────────── */}
        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 sm:gap-8 pb-10 border-b border-white/10 mb-8 text-center md:text-left">
          
          {/* Cover Art Stage */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden shadow-2xl border border-white/20 shrink-0 group bg-black/60">
            {isLikedSongsPlaylist ? (
              <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 flex items-center justify-center shadow-inner">
                <i className="fas fa-heart text-6xl sm:text-7xl text-white drop-shadow-xl"></i>
              </div>
            ) : (
              <img
                src={playlist.coverImage}
                alt={playlist.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
            
            {/* Live streaming badge */}
            {isThisPlaylistPlaying && (
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/30 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>STREAMING</span>
              </div>
            )}
          </div>

          {/* Meta & Info */}
          <div className="flex-1 min-w-0 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono tracking-widest text-orange-400 font-semibold uppercase">
              {isLikedSongsPlaylist ? 'Auto-Collection' : 'Personal Playlist'}
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-orbitron font-black uppercase tracking-wider text-white">
              {playlist.title}
            </h1>

            <p className="text-xs sm:text-sm font-mono text-gray-300 max-w-2xl leading-relaxed">
              {playlist.description}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-2 gap-x-4 text-xs font-mono text-gray-400 pt-1">
              <span className="text-white font-bold">{playlist.createdBy}</span>
              <span>•</span>
              <span>{playlist.songs.length} song{playlist.songs.length === 1 ? '' : 's'}</span>
              <span>•</span>
              <span>{totalDuration}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 pt-3">
              {playlist.songs.length > 0 && (
                <>
                  {/* Play / Pause Playlist */}
                  <button
                    onClick={handlePlayPlaylist}
                    className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-400 text-black font-orbitron font-bold text-xs uppercase tracking-wider flex items-center gap-2.5 transition-all cursor-pointer shadow-xl shadow-orange-500/25 hover:scale-105 active:scale-95"
                  >
                    <i className={`fas ${isThisPlaylistPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                    <span>{isThisPlaylistPlaying ? 'Pause' : 'Play Playlist'}</span>
                  </button>

                  {/* Shuffle Button */}
                  <button
                    onClick={handleShufflePlaylist}
                    className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 font-mono text-xs uppercase tracking-wider text-white flex items-center gap-2 transition-all cursor-pointer active:scale-95"
                  >
                    <i className="fas fa-random text-sm text-orange-400"></i>
                    <span>Shuffle</span>
                  </button>
                </>
              )}

              {/* Edit Playlist Details (for custom playlists) */}
              {!isLikedSongsPlaylist && (
                <>
                  <button
                    onClick={() => {
                      setEditTitle(playlist.title);
                      setEditDesc(playlist.description);
                      setIsEditing(true);
                    }}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer active:scale-95"
                    title="Edit Playlist Details"
                  >
                    <i className="fas fa-pen text-xs"></i>
                  </button>

                  <button
                    onClick={() => {
                      if (window.confirm(`Delete "${playlist.title}"? This action cannot be undone.`)) {
                        deletePlaylist(playlist.id);
                        navigate('/playlists');
                      }
                    }}
                    className="w-12 h-12 rounded-full bg-red-500/10 hover:bg-red-500/20 border border-red-500/25 flex items-center justify-center text-red-400 transition-all cursor-pointer active:scale-95"
                    title="Delete Playlist"
                  >
                    <i className="fas fa-trash-alt text-xs"></i>
                  </button>
                </>
              )}
            </div>

          </div>

        </div>

        {/* ─── Tracks Table ────────────────────────────────────────── */}
        <div className="bg-black/60 backdrop-blur-2xl rounded-3xl border border-white/10 p-4 sm:p-6 shadow-2xl mb-12">
          {/* Table Header */}
          <div className="grid grid-cols-12 py-3 px-3 text-[11px] font-mono text-gray-400 uppercase tracking-widest border-b border-white/10 select-none">
            <div className="col-span-1 text-center">#</div>
            <div className="col-span-7 sm:col-span-6 md:col-span-7">Title</div>
            <div className="hidden sm:block sm:col-span-2 md:col-span-2">Album</div>
            <div className="col-span-4 sm:col-span-3 md:col-span-2 text-right pr-2">
              <i className="far fa-clock"></i>
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-1 mt-2">
            {playlist.songs.length > 0 ? (
              playlist.songs.map((song, index) => {
                const isCurrent = currentSong?.id === song.id;
                const isCurrentPlaying = isCurrent && isPlaying;
                const isLiked = isSongLiked(song.id);
                const isJustQueued = queuedSongId === song.id;

                return (
                  <div
                    key={`${song.id}-${index}`}
                    onClick={() => playSong(song, playlist.songs)}
                    className={`group grid grid-cols-12 items-center p-3 rounded-xl transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-orange-500/15 border border-orange-500/40 shadow-lg'
                        : 'hover:bg-white/5 border border-transparent hover:border-white/10'
                    }`}
                  >
                    {/* Index or Live Equalizer */}
                    <div className="col-span-1 flex items-center justify-center text-sm font-mono">
                      {isCurrentPlaying ? (
                        <div className="flex items-end gap-0.5 h-4 w-4 justify-center">
                          <span className="w-1 bg-orange-400 rounded-full animate-bounce [animation-duration:0.6s]"></span>
                          <span className="w-1 bg-orange-400 rounded-full animate-bounce [animation-duration:0.9s] [animation-delay:0.2s]"></span>
                          <span className="w-1 bg-orange-400 rounded-full animate-bounce [animation-duration:0.7s] [animation-delay:0.4s]"></span>
                        </div>
                      ) : (
                        <>
                          <span className={`group-hover:hidden ${isCurrent ? 'text-orange-400 font-bold' : 'text-gray-400'}`}>
                            {index + 1}
                          </span>
                          <i className="fas fa-play text-xs text-orange-400 hidden group-hover:block"></i>
                        </>
                      )}
                    </div>

                    {/* Cover, Title & Artist */}
                    <div className="col-span-7 sm:col-span-6 md:col-span-7 flex items-center space-x-3.5 min-w-0 pr-2">
                      <img
                        src={song.coverImage}
                        alt={song.title}
                        className="w-10 h-10 rounded-lg object-cover shadow border border-white/10 shrink-0"
                      />
                      <div className="min-w-0 truncate">
                        <p className={`text-sm font-medium truncate ${
                          isCurrent ? 'text-white font-bold' : 'text-gray-200 group-hover:text-white'
                        }`}>
                          {song.title}
                        </p>
                        <p className="text-xs text-gray-400 truncate font-mono">
                          {song.artist}
                        </p>
                      </div>
                    </div>

                    {/* Album Name (Desktop) */}
                    <div className="hidden sm:block sm:col-span-2 md:col-span-2 text-xs text-gray-400 font-mono truncate">
                      {song.album || 'Single'}
                    </div>

                    {/* Actions & Duration */}
                    <div className="col-span-4 sm:col-span-3 md:col-span-2 flex items-center justify-end space-x-2 sm:space-x-3 text-right">
                      {/* Like Heart */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLikeSong(song.id);
                        }}
                        className={`p-1.5 transition-transform cursor-pointer active:scale-125 ${
                          isLiked ? 'text-emerald-400' : 'text-gray-500 hover:text-white opacity-0 group-hover:opacity-100'
                        }`}
                        title={isLiked ? 'Liked' : 'Like'}
                      >
                        <i className={`fa${isLiked ? 's' : 'r'} fa-heart text-sm`}></i>
                      </button>

                      {/* Add to Queue */}
                      <button
                        onClick={(e) => handleAddToQueue(e, song)}
                        className={`p-1.5 transition-all cursor-pointer active:scale-95 ${
                          isJustQueued ? 'text-emerald-400 opacity-100' : 'text-gray-500 hover:text-white opacity-0 group-hover:opacity-100'
                        }`}
                        title="Add to queue"
                      >
                        <i className={`fas ${isJustQueued ? 'fa-check' : 'fa-plus'} text-xs`}></i>
                      </button>

                      {/* Remove From Custom Playlist button */}
                      {!isLikedSongsPlaylist && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeSongFromPlaylist(playlist.id, song.id);
                          }}
                          className="p-1.5 text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          title="Remove from playlist"
                        >
                          <i className="fas fa-times text-xs"></i>
                        </button>
                      )}

                      {/* Duration */}
                      <span className="text-xs font-mono text-gray-400 w-10 text-right shrink-0">
                        {song.duration || '3:45'}
                      </span>
                    </div>

                  </div>
                );
              })
            ) : (
              <div className="text-center py-16 text-gray-400 font-mono text-sm space-y-2">
                <p className="text-base text-gray-300 font-orbitron uppercase">This playlist is currently empty</p>
                <p className="text-xs">Browse the recommended tracks below or search artists to add songs!</p>
              </div>
            )}
          </div>
        </div>

        {/* ─── Recommended Songs to Add to Playlist ────────────────── */}
        {!isLikedSongsPlaylist && recommendedSongs.length > 0 && (
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8">
            <div className="mb-5">
              <h3 className="text-lg font-orbitron font-bold uppercase tracking-wider text-white">
                Recommended Additions
              </h3>
              <p className="text-xs text-gray-400 font-mono mt-0.5">
                Popular songs that match this soundscape
              </p>
            </div>

            <div className="space-y-2">
              {recommendedSongs.map((rec) => (
                <div
                  key={rec.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3.5 min-w-0 pr-2">
                    <img
                      src={rec.coverImage}
                      alt={rec.title}
                      className="w-10 h-10 rounded-lg object-cover shadow"
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white truncate">{rec.title}</div>
                      <div className="text-[11px] text-gray-400 truncate">{rec.artist} • {rec.album}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => addSongToPlaylist(playlist.id, rec)}
                    className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-orange-500 hover:text-black border border-white/15 text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
                  >
                    <i className="fas fa-plus text-[10px]"></i>
                    <span>Add</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ─── Edit Playlist Modal ─────────────────────────────────── */}
      {isEditing && (
        <div className="fixed inset-0 z-[140] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in font-mono select-none">
          <div className="relative w-full max-w-md bg-[#0f0c0b] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10">
            <button
              onClick={() => setIsEditing(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-all flex items-center justify-center cursor-pointer border border-white/10"
            >
              <i className="fas fa-times text-xs"></i>
            </button>

            <h3 className="text-lg font-orbitron font-bold text-white uppercase tracking-wider mb-5">
              Edit Playlist Details
            </h3>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/15 focus:border-orange-500 rounded-xl py-2 px-3 text-sm text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                  Description
                </label>
                <textarea
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                  rows={3}
                  className="w-full bg-white/5 border border-white/15 focus:border-orange-500 rounded-xl py-2 px-3 text-xs text-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-orbitron font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg mt-2"
              >
                Save Changes
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

