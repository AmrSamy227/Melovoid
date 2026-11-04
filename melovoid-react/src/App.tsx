import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AudioPlayerProvider } from './context/AudioPlayerContext';
import { UserProvider } from './context/UserContext';
import { BackgroundVideo } from './components/BackgroundVideo';
import { ThemeWrapper } from './components/ThemeWrapper';
import { Navbar } from './components/Navbar';
import { PlayerBar } from './components/PlayerBar';
import { AuthModal } from './components/AuthModal';
import { ProfileModal } from './components/ProfileModal';
import { AddToPlaylistModal } from './components/AddToPlaylistModal';
import { HomePage } from './pages/HomePage';
import { AlbumPage } from './pages/AlbumPage';
import { ArtistPage } from './pages/ArtistPage';
import { ArtistsPage } from './pages/ArtistsPage';
import { AlbumsPage } from './pages/AlbumsPage';
import { PlaylistsPage } from './pages/PlaylistsPage';
import { PlaylistViewPage } from './pages/PlaylistViewPage';

function App() {
  return (
    <AudioPlayerProvider>
      <UserProvider>
        <Router>
          <ThemeWrapper>
            {/* Ambient video & audio in background */}
            <BackgroundVideo />

            {/* Floating navbar */}
            <Navbar />

            {/* Global User & Playlist Modals */}
            <AuthModal />
            <ProfileModal />
            <AddToPlaylistModal />

            {/* Routes */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/artists" element={<ArtistsPage />} />
              <Route path="/albums" element={<AlbumsPage />} />
              <Route path="/album/:albumId" element={<AlbumPage />} />
              <Route path="/artist/:artistId" element={<ArtistPage />} />
              <Route path="/playlists" element={<PlaylistsPage />} />
              <Route path="/playlist/:playlistId" element={<PlaylistViewPage />} />
            </Routes>

            {/* Fixed bottom playback controls */}
            <PlayerBar />
          </ThemeWrapper>
        </Router>
      </UserProvider>
    </AudioPlayerProvider>
  );
}

export default App;
