import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User, Playlist } from '../types/user';
import type { Song } from '../types/music';
import { SONGS } from '../data/musicData';

interface UserContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  isAuthModalOpen: boolean;
  authModalMode: 'signin' | 'signup';
  isProfileModalOpen: boolean;
  activeAddToPlaylistSong: Song | null;
  playlists: Playlist[];
  
  // Auth actions
  openAuthModal: (mode?: 'signin' | 'signup') => void;
  closeAuthModal: () => void;
  openProfileModal: () => void;
  closeProfileModal: () => void;
  signIn: (email: string, password?: string) => boolean;
  signUp: (userData: { name: string; username: string; email: string; avatar?: string; bio?: string }) => void;
  signOut: () => void;
  updateProfile: (updates: Partial<User>) => void;
  demoLogin: () => void;

  // Playlist actions
  createPlaylist: (title: string, description?: string, coverImage?: string) => Playlist;
  deletePlaylist: (playlistId: string) => void;
  updatePlaylist: (playlistId: string, updates: Partial<Playlist>) => void;
  addSongToPlaylist: (playlistId: string, song: Song) => boolean;
  removeSongFromPlaylist: (playlistId: string, songId: string) => void;
  isSongInPlaylist: (playlistId: string, songId: string) => boolean;
  openAddToPlaylistModal: (song: Song) => void;
  closeAddToPlaylistModal: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Helper to generate deterministic user id based on email
const getUserIdFromEmail = (email: string) => {
  return 'usr_' + email.toLowerCase().replace(/[^a-z0-9]/g, '_');
};

const getUserPlaylistsStorageKey = (userId: string) => {
  return `melovoid_playlists_user_${userId}`;
};

// Demo user sample playlists (ONLY for @echovoid demo account)
const DEMO_USER_INITIAL_PLAYLISTS: Playlist[] = [
  {
    id: 'pl_midnight_reverie',
    userId: 'usr_demo',
    title: 'Midnight Reverie',
    description: 'Deep nocturnal echoes, dream pop atmospheres, and melancholic indie masterpieces.',
    coverImage: '/cass.jpg',
    createdBy: 'Echo Void',
    creatorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    createdAt: 'November 2026',
    isPublic: true,
    songs: [
      SONGS.cry || { id: 'cry', title: 'Cry', artist: 'Cigarettes After Sex', album: 'Cry', coverImage: '/cry.webp', audioSrc: '/Cry.mp3', duration: '4:17' },
      SONGS.there_is_a_light || { id: 'there_is_a_light', title: 'There Is A Light That Never Goes Out', artist: 'The Smiths', album: 'The Queen Is Dead', coverImage: '/There_is_a_Light_That_Never_Goes_Out_Neon_Sign_U705_3bbdd44f-b8e1-4d50-a996-3a3f0d460a21.webp', audioSrc: '/audio/309 There Is A Light That Never Goes Out [2011 Remastered Version].mp3', duration: '4:04' },
      SONGS.sweater_weather || { id: 'sweater_weather', title: 'Sweater Weather', artist: 'The Neighbourhood', album: 'I Love You.', coverImage: '/sweater.jpg', audioSrc: "/'Sweater Weather'.mp3", duration: '4:00' }
    ]
  },
  {
    id: 'pl_void_velocity',
    userId: 'usr_demo',
    title: 'Void Velocity',
    description: 'High-octane grunge energy, distorted guitar riffs, and cyberpunk pulse.',
    coverImage: '/are you mine.jpg',
    createdBy: 'Echo Void',
    creatorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    createdAt: 'November 2026',
    isPublic: true,
    songs: [
      SONGS.ru_mine || { id: 'ru_mine', title: 'R U Mine?', artist: 'Arctic Monkeys', album: 'AM', coverImage: '/are you mine.jpg', audioSrc: '/audio/arctic-monkeys-album/Arctic Monkeys - R U Mine.mp3', duration: '3:21' },
      SONGS.come_as_you_are || { id: 'come_as_you_are', title: 'Come As You Are', artist: 'Nirvana', album: 'Nevermind', coverImage: '/come as you are.jpg', audioSrc: '/nirvana-nevermind-1991/03 Come as You Are (MTV Unplugged in New York).mp3', duration: '3:39' },
      SONGS.creep || { id: 'creep', title: 'Creep', artist: 'Radiohead', album: 'Pablo Honey', coverImage: '/creep.jpg', audioSrc: '/Radiohead - Creep.mp3', duration: '3:56' }
    ]
  }
];

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load current user from localStorage
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('melovoid_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Load playlists strictly isolated to currentUser. If no user is signed in, playlists is ALWAYS []
  const [playlists, setPlaylists] = useState<Playlist[]>(() => {
    try {
      const savedUserStr = localStorage.getItem('melovoid_user');
      if (!savedUserStr) return [];
      const user: User = JSON.parse(savedUserStr);
      const userKey = getUserPlaylistsStorageKey(user.id);
      const savedPlaylists = localStorage.getItem(userKey);
      if (savedPlaylists) {
        return JSON.parse(savedPlaylists);
      }
      if (user.id === 'usr_demo') {
        return DEMO_USER_INITIAL_PLAYLISTS;
      }
      return [];
    } catch {
      return [];
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'signin' | 'signup'>('signin');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [activeAddToPlaylistSong, setActiveAddToPlaylistSong] = useState<Song | null>(null);

  // Sync current user to localStorage and load that specific user's playlists
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('melovoid_user', JSON.stringify(currentUser));
        // Load this user's isolated playlists
        const userKey = getUserPlaylistsStorageKey(currentUser.id);
        const savedPlaylists = localStorage.getItem(userKey);
        if (savedPlaylists) {
          setPlaylists(JSON.parse(savedPlaylists));
        } else if (currentUser.id === 'usr_demo') {
          setPlaylists(DEMO_USER_INITIAL_PLAYLISTS);
          localStorage.setItem(userKey, JSON.stringify(DEMO_USER_INITIAL_PLAYLISTS));
        } else {
          setPlaylists([]);
        }
      } else {
        localStorage.removeItem('melovoid_user');
        setPlaylists([]); // Empty if no account is signed in
      }
    } catch {
      // ignore
    }
  }, [currentUser?.id]);

  // Sync playlists to the specific user's storage key whenever playlists change
  useEffect(() => {
    try {
      if (currentUser) {
        const userKey = getUserPlaylistsStorageKey(currentUser.id);
        localStorage.setItem(userKey, JSON.stringify(playlists));
      }
    } catch {
      // ignore
    }
  }, [playlists, currentUser]);

  const openAuthModal = (mode: 'signin' | 'signup' = 'signin') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const openProfileModal = () => {
    setIsProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  // Sign In action
  const signIn = (email: string) => {
    const userId = getUserIdFromEmail(email);
    // Retrieve existing profile if exists
    let existingProfile: Partial<User> = {};
    try {
      const savedProfile = localStorage.getItem(`melovoid_profile_${userId}`);
      if (savedProfile) {
        existingProfile = JSON.parse(savedProfile);
      }
    } catch {
      // ignore
    }

    const user: User = {
      id: userId,
      name: existingProfile.name || email.split('@')[0].toUpperCase(),
      username: existingProfile.username || '@' + email.split('@')[0].toLowerCase(),
      email,
      avatar: existingProfile.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      bio: existingProfile.bio || 'Music explorer navigating through the deep soundscapes of Melovoid.',
      joinedDate: existingProfile.joinedDate || 'November 2026',
      favoriteGenres: existingProfile.favoriteGenres || ['Alternative Rock', 'Dream Pop']
    };

    localStorage.setItem(`melovoid_profile_${userId}`, JSON.stringify(user));
    setCurrentUser(user);
    setIsAuthModalOpen(false);
    return true;
  };

  // Sign Up action
  const signUp = (userData: { name: string; username: string; email: string; avatar?: string; bio?: string }) => {
    const userId = getUserIdFromEmail(userData.email);
    const user: User = {
      id: userId,
      name: userData.name,
      username: userData.username.startsWith('@') ? userData.username : '@' + userData.username,
      email: userData.email,
      avatar: userData.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      bio: userData.bio || 'Curator of atmospheric sounds in the void.',
      joinedDate: 'November 2026',
      favoriteGenres: ['Alternative', 'Shoegaze', 'Indie']
    };

    localStorage.setItem(`melovoid_profile_${userId}`, JSON.stringify(user));
    setCurrentUser(user);
    setIsAuthModalOpen(false);
  };

  // One-click demo login for fast exploration
  const demoLogin = () => {
    const demoUser: User = {
      id: 'usr_demo',
      name: 'Echo Void',
      username: '@echovoid',
      email: 'echo@melovoid.io',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      bio: 'Audiophile, tape collector, and connoisseur of ethereal indie frequencies.',
      joinedDate: 'October 2026',
      favoriteGenres: ['Indie Rock', 'Dream Pop', 'Post-Punk']
    };
    setCurrentUser(demoUser);
    setIsAuthModalOpen(false);
  };

  const signOut = () => {
    setCurrentUser(null);
    setPlaylists([]); // Empties playlists on logout
    setIsProfileModalOpen(false);
  };

  const updateProfile = (updates: Partial<User>) => {
    if (!currentUser) return;
    const updated = { ...currentUser, ...updates };
    setCurrentUser(updated);
    try {
      localStorage.setItem(`melovoid_profile_${currentUser.id}`, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  // Playlist Management (Strictly scoped to currentUser)
  const createPlaylist = (title: string, description: string = '', coverImage?: string): Playlist => {
    if (!currentUser) {
      openAuthModal('signin');
      throw new Error('You must be signed in to create a playlist');
    }

    const defaultCovers = [
      '/There_is_a_Light_That_Never_Goes_Out_Neon_Sign_U705_3bbdd44f-b8e1-4d50-a996-3a3f0d460a21.webp',
      '/cass.jpg',
      '/are you mine.jpg',
      '/sweater.jpg',
      '/OK_Computer.jpg',
      '/nirvana-nevermind-1991/nevermind.jpeg'
    ];
    const randomCover = defaultCovers[Math.floor(Math.random() * defaultCovers.length)];

    const newPlaylist: Playlist = {
      id: 'pl_' + Date.now(),
      userId: currentUser.id,
      title: title.trim() || 'My Void Playlist',
      description: description.trim() || 'Curated personal soundtrack on Melovoid.',
      coverImage: coverImage || randomCover,
      createdBy: currentUser.name,
      creatorAvatar: currentUser.avatar,
      createdAt: 'November 2026',
      songs: [],
      isPublic: true
    };

    setPlaylists((prev) => [newPlaylist, ...prev]);
    return newPlaylist;
  };

  const deletePlaylist = (playlistId: string) => {
    if (!currentUser) return;
    setPlaylists((prev) => prev.filter((p) => p.id !== playlistId));
  };

  const updatePlaylist = (playlistId: string, updates: Partial<Playlist>) => {
    if (!currentUser) return;
    setPlaylists((prev) =>
      prev.map((p) => (p.id === playlistId ? { ...p, ...updates } : p))
    );
  };

  const addSongToPlaylist = (playlistId: string, song: Song): boolean => {
    if (!currentUser) {
      openAuthModal('signin');
      return false;
    }

    let added = false;
    setPlaylists((prev) =>
      prev.map((pl) => {
        if (pl.id === playlistId) {
          if (pl.songs.some((s) => s.id === song.id)) {
            return pl;
          }
          added = true;
          return {
            ...pl,
            songs: [...pl.songs, song]
          };
        }
        return pl;
      })
    );
    return added;
  };

  const removeSongFromPlaylist = (playlistId: string, songId: string) => {
    if (!currentUser) return;
    setPlaylists((prev) =>
      prev.map((pl) => {
        if (pl.id === playlistId) {
          return {
            ...pl,
            songs: pl.songs.filter((s) => s.id !== songId)
          };
        }
        return pl;
      })
    );
  };

  const isSongInPlaylist = (playlistId: string, songId: string): boolean => {
    const pl = playlists.find((p) => p.id === playlistId);
    return pl ? pl.songs.some((s) => s.id === songId) : false;
  };

  const openAddToPlaylistModal = (song: Song) => {
    if (!currentUser) {
      openAuthModal('signin');
      return;
    }
    setActiveAddToPlaylistSong(song);
  };

  const closeAddToPlaylistModal = () => {
    setActiveAddToPlaylistSong(null);
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        isAuthenticated: !!currentUser,
        isAuthModalOpen,
        authModalMode,
        isProfileModalOpen,
        activeAddToPlaylistSong,
        playlists,
        openAuthModal,
        closeAuthModal,
        openProfileModal,
        closeProfileModal,
        signIn,
        signUp,
        signOut,
        updateProfile,
        demoLogin,
        createPlaylist,
        deletePlaylist,
        updatePlaylist,
        addSongToPlaylist,
        removeSongFromPlaylist,
        isSongInPlaylist,
        openAddToPlaylistModal,
        closeAddToPlaylistModal
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
