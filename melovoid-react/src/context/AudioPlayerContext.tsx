import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import type { Song } from '../types/music';

export type RepeatMode = 'off' | 'all' | 'one';

interface AudioPlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  repeatMode: RepeatMode;
  shuffleMode: boolean;
  playbackSpeed: number;
  playlist: Song[];
  queue: Song[];
  expanded: boolean;
  likedSongIds: string[];
  
  // Playback actions
  playSong: (song: Song, newPlaylist?: Song[]) => void;
  togglePlay: () => void;
  seek: (time: number) => void;
  changeVolume: (volume: number) => void;
  toggleMute: () => void;
  nextSong: () => void;
  prevSong: () => void;
  toggleRepeat: () => void;
  toggleShuffle: () => void;
  setPlaybackSpeed: (speed: number) => void;
  playRandom: () => void;
  setExpanded: (val: boolean) => void;
  closePlayer: () => void;
  
  // Queue & Playlist actions
  addToQueue: (song: Song) => void;
  removeFromQueue: (index: number) => void;
  clearQueue: () => void;
  
  // Favorites / Liked Songs
  toggleLikeSong: (songId: string) => void;
  isSongLiked: (songId: string) => boolean;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.85);
  const [prevVolume, setPrevVolume] = useState<number>(0.85);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [repeatMode, setRepeatMode] = useState<RepeatMode>('all');
  const [shuffleMode, setShuffleMode] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeedState] = useState<number>(1.0);
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [queue, setQueue] = useState<Song[]>([]);
  const [expanded, setExpanded] = useState<boolean>(false);
  
  // Liked songs persistence
  const [likedSongIds, setLikedSongIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('melovoid_liked_songs');
      return stored ? JSON.parse(stored) : ['creep', 'there_is_a_light'];
    } catch {
      return ['creep', 'there_is_a_light'];
    }
  });

  // Persistent audio element reference - NEVER destroyed on state change
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Mutable refs to prevent re-attaching listeners or re-creating the audio element
  const currentSongRef = useRef<Song | null>(null);
  const playlistRef = useRef<Song[]>([]);
  const queueRef = useRef<Song[]>([]);
  const shuffleModeRef = useRef<boolean>(false);
  const repeatModeRef = useRef<RepeatMode>('all');
  const playbackSpeedRef = useRef<number>(1.0);

  // Sync refs with state on every render
  currentSongRef.current = currentSong;
  playlistRef.current = playlist;
  queueRef.current = queue;
  shuffleModeRef.current = shuffleMode;
  repeatModeRef.current = repeatMode;
  playbackSpeedRef.current = playbackSpeed;

  // Sync liked songs to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('melovoid_liked_songs', JSON.stringify(likedSongIds));
    } catch {}
  }, [likedSongIds]);

  const toggleLikeSong = (songId: string) => {
    setLikedSongIds((prev) =>
      prev.includes(songId) ? prev.filter((id) => id !== songId) : [...prev, songId]
    );
  };

  const isSongLiked = (songId: string) => likedSongIds.includes(songId);

  // Play next track using refs (safe inside ended callback)
  const playNextInternal = useCallback(() => {
    const activeSong = currentSongRef.current;
    const currentQueue = queueRef.current;
    const currentPlaylist = playlistRef.current;
    const isShuffle = shuffleModeRef.current;
    const currentRepeat = repeatModeRef.current;

    // 1. Check user queue first
    if (currentQueue.length > 0) {
      const nextSong = currentQueue[0];
      setQueue((q) => q.slice(1));
      loadAndPlay(nextSong);
      return;
    }

    if (currentPlaylist.length === 0 || !activeSong) return;

    // 2. If shuffle is enabled
    if (isShuffle && currentPlaylist.length > 1) {
      const candidates = currentPlaylist.filter((s) => s.id !== activeSong.id);
      const randomSong = candidates[Math.floor(Math.random() * candidates.length)];
      loadAndPlay(randomSong);
      return;
    }

    // 3. Sequential playback
    const currentIndex = currentPlaylist.findIndex((s) => s.id === activeSong.id);
    if (currentIndex === -1) {
      loadAndPlay(currentPlaylist[0]);
    } else if (currentIndex < currentPlaylist.length - 1) {
      loadAndPlay(currentPlaylist[currentIndex + 1]);
    } else {
      // Reached the end
      if (currentRepeat === 'all') {
        loadAndPlay(currentPlaylist[0]);
      } else {
        if (audioRef.current) {
          audioRef.current.pause();
        }
        setIsPlaying(false);
      }
    }
  }, []);

  // Internal function to load audio src and start playing
  const loadAndPlay = (song: Song) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = song.audioSrc;
    audio.playbackRate = playbackSpeedRef.current;
    setCurrentSong(song);

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn(`Playback error on "${song.title}" (${audio.src}):`, err);
          setIsPlaying(false);
        });
    }
  };

  // Instantiate & bind audio ONCE on mount
  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;
    audio.volume = volume;
    audio.playbackRate = playbackSpeed;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      if (repeatModeRef.current === 'one') {
        audio.currentTime = 0;
        audio.play().catch(() => {});
        setIsPlaying(true);
      } else {
        playNextInternal();
      }
    };

    const handleError = (e: Event) => {
      console.warn(`Audio error loading: ${audio.src}`, e);
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.src = '';
    };
  }, []); // Run ONLY once on mount!

  // Sync volume change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Sync playback rate change
  const setPlaybackSpeed = (speed: number) => {
    setPlaybackSpeedState(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  // Public playSong method
  const playSong = (song: Song, newPlaylist?: Song[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (newPlaylist && newPlaylist.length > 0) {
      setPlaylist(newPlaylist);
      playlistRef.current = newPlaylist;
    } else if (playlistRef.current.length === 0 || !playlistRef.current.some((s) => s.id === song.id)) {
      setPlaylist([song]);
      playlistRef.current = [song];
    }

    if (currentSongRef.current?.id === song.id) {
      togglePlay();
    } else {
      loadAndPlay(song);
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || !currentSongRef.current) return;

    if (audio.paused) {
      audio.play().catch((err) => console.log('Play resume error:', err));
    } else {
      audio.pause();
    }
  };

  const seek = (time: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const clampedTime = Math.max(0, Math.min(time, duration || audio.duration || 0));
    audio.currentTime = clampedTime;
    setCurrentTime(clampedTime);
  };

  const changeVolume = (val: number) => {
    const clamped = Math.max(0, Math.min(1, val));
    setVolume(clamped);
    if (clamped > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      setVolume(prevVolume > 0 ? prevVolume : 0.85);
    } else {
      setPrevVolume(volume);
      setIsMuted(true);
    }
  };

  const handlePrev = () => {
    const audio = audioRef.current;
    const activeSong = currentSongRef.current;
    const currentPlaylist = playlistRef.current;

    if (currentPlaylist.length === 0 || !activeSong) return;

    // If more than 3 seconds in, restart current song (Spotify standard)
    if (audio && audio.currentTime > 3) {
      seek(0);
      return;
    }

    const index = currentPlaylist.findIndex((s) => s.id === activeSong.id);
    const prevIndex = (index - 1 + currentPlaylist.length) % currentPlaylist.length;
    playSong(currentPlaylist[prevIndex]);
  };

  const toggleShuffle = () => {
    setShuffleMode((prev) => !prev);
  };

  const toggleRepeat = () => {
    setRepeatMode((prev) => {
      if (prev === 'off') return 'all';
      if (prev === 'all') return 'one';
      return 'off';
    });
  };

  const playRandom = () => {
    const currentPlaylist = playlistRef.current;
    if (currentPlaylist.length === 0) return;
    const randomIndex = Math.floor(Math.random() * currentPlaylist.length);
    playSong(currentPlaylist[randomIndex]);
  };

  const addToQueue = (song: Song) => {
    setQueue((prev) => [...prev, song]);
  };

  const removeFromQueue = (index: number) => {
    setQueue((prev) => prev.filter((_, i) => i !== index));
  };

  const clearQueue = () => {
    setQueue([]);
  };

  const closePlayer = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }
    setIsPlaying(false);
    setCurrentSong(null);
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        currentTime,
        duration,
        volume: isMuted ? 0 : volume,
        isMuted,
        repeatMode,
        shuffleMode,
        playbackSpeed,
        playlist,
        queue,
        expanded,
        likedSongIds,
        playSong,
        togglePlay,
        seek,
        changeVolume,
        toggleMute,
        nextSong: playNextInternal,
        prevSong: handlePrev,
        toggleRepeat,
        toggleShuffle,
        setPlaybackSpeed,
        playRandom,
        setExpanded,
        closePlayer,
        addToQueue,
        removeFromQueue,
        clearQueue,
        toggleLikeSong,
        isSongLiked
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (context === undefined) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  }
  return context;
};
