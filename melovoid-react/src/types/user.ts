import type { Song } from './music';

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  bio?: string;
  joinedDate: string;
  favoriteGenres?: string[];
}

export interface Playlist {
  id: string;
  userId: string;
  title: string;
  description: string;
  coverImage: string;
  createdBy: string;
  creatorAvatar?: string;
  createdAt: string;
  songs: Song[];
  isPublic?: boolean;
}
