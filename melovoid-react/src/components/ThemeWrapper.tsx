import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BANDS_RICH, ALBUMS } from '../data/musicData';

export const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    let newColor = '#f97316';
    if (location.pathname.startsWith('/artist/')) {
      const artistId = location.pathname.split('/')[2];
      const artistInfo = BANDS_RICH.find(b => b.id === artistId || b.id.replace(/_/g, '-') === artistId);
      if (artistInfo && artistInfo.accentColor) newColor = artistInfo.accentColor;
    } else if (location.pathname.startsWith('/album/')) {
      const albumId = location.pathname.split('/')[2];
      const albumInfo = Object.values(ALBUMS).find(a => a.id === albumId || a.id.replace(/_/g, '-') === albumId);
      if (albumInfo) {
        const artistInfo = BANDS_RICH.find(b => b.name === albumInfo.artist);
        if (artistInfo && artistInfo.accentColor) newColor = artistInfo.accentColor;
      }
    }
    
    // Inject directly to document root for truly global availability
    document.documentElement.style.setProperty('--page-accent', newColor);
  }, [location.pathname]);

  return <>{children}</>;
};
