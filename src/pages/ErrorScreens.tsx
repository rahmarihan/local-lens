import { WifiOff, RefreshCw, AlertTriangle, Search, Bookmark, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const OfflineScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-8 text-center">
      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-5">
        <WifiOff size={32} className="text-muted-foreground" />
      </div>
      <h1 className="text-xl font-extrabold">You're Offline</h1>
      <p className="text-sm text-muted-foreground mt-2">Don't worry, you can still browse your saved places and cached content.</p>
      <div className="flex flex-wrap gap-2 justify-center mt-4">
        {['Saved Pins', 'Cached Places', 'Downloaded Maps'].map((f) => (
          <span key={f} className="px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">{f}</span>
        ))}
      </div>
      <button onClick={() => navigate('/home')} className="mt-6 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center gap-2">
        <RefreshCw size={16} /> Retry Connection
      </button>
    </div>
  );
};

export const FailedUploadScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-8 text-center">
      <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mb-5">
        <AlertTriangle size={32} className="text-destructive" />
      </div>
      <h1 className="text-xl font-extrabold">Upload Failed</h1>
      <p className="text-sm text-muted-foreground mt-2">Something went wrong while uploading your images. Please check your connection and try again.</p>
      <div className="flex gap-3 mt-6">
        <button onClick={() => navigate(-1)} className="px-6 py-3 rounded-xl border border-border text-sm font-semibold">Cancel</button>
        <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold flex items-center gap-2">
          <RefreshCw size={16} /> Retry
        </button>
      </div>
    </div>
  );
};

export const EmptySearchScreen = () => (
  <div className="flex flex-col items-center justify-center py-16 text-center px-8">
    <span className="text-5xl mb-4">🔍</span>
    <h3 className="font-bold text-lg">No results found</h3>
    <p className="text-muted-foreground text-sm mt-1">Try different keywords or adjust your filters</p>
  </div>
);

export const EmptySavedScreen = () => (
  <div className="flex flex-col items-center justify-center py-16 text-center px-8">
    <span className="text-5xl mb-4">📌</span>
    <h3 className="font-bold text-lg">No saved pins yet</h3>
    <p className="text-muted-foreground text-sm mt-1">Start exploring and save your favorite places</p>
    <button className="mt-4 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold">Explore Now</button>
  </div>
);

export const EmptyContributionsScreen = () => (
  <div className="flex flex-col items-center justify-center py-16 text-center px-8">
    <span className="text-5xl mb-4">🗺️</span>
    <h3 className="font-bold text-lg">No contributions yet</h3>
    <p className="text-muted-foreground text-sm mt-1">Share your favorite local spots with the community</p>
    <button className="mt-4 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold">Add a Place</button>
  </div>
);
