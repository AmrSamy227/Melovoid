export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  coverImage: string;
  audioSrc: string;
  lyrics?: string;
  duration?: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  releaseDate: string;
  coverImage: string;
  bgColor: string; // Desired theme color for template (e.g. hex or tailwind class)
  accentColor: string; // Color for buttons/highlights
  songs: Song[];
  description?: string;
  spotifyId?: string;
}

export interface Band {
  id: string;
  name: string;
  brandName: string;
  videoSrc: string;
  bgType: 'uncaged' | 'silk' | 'instinct';
  route: string; // The URL path e.g. /artist/radiohead
  bgColor?: string; // Theme color for the artist page
  accentColor?: string;
  description?: string;
  albums: Album[];
}
