import { Video } from './types';

// Updated to use reliable dynamic sources for the Avatar and high-quality neon assets for the banner.

export const ASSETS = {
  // Dynamically fetches Chad Garber's actual YouTube profile picture.
  // Fallback to a video thumbnail if the avatar fetch fails.
  AVATAR_URL: "https://unavatar.io/youtube/chadgarber?fallback=https://i.ytimg.com/vi/zW0X9yX9w9w/hqdefault.jpg", 
  
  // LED Curtain lights / Bokeh background to match the specific YouTube banner request
  BANNER_URL: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2600&auto=format&fit=crop",
};

export const PLAYLIST_LINKS = [
  { text: "GUITAR LESSONS", url: "https://www.youtube.com/@chadgarber/search?query=lesson" },
  { text: "GEAR DEMOS", url: "https://www.youtube.com/@chadgarber/search?query=demo" },
  { text: "COVER SONGS", url: "https://www.youtube.com/@chadgarber/search?query=cover" },
  { text: "ORIGINAL MUSIC", url: "https://www.youtube.com/@chadgarber/search?query=original" },
];

export const CHANNEL_INFO = {
  name: "Chad Garber",
  handle: "@chadgarber",
  subscribers: "18.9K",
  videos: "6K+",
  description: "Master Guitar Skills & Music Production | Guitar Lessons, Cover Songs & Gear Reviews",
  youtubeUrl: "https://www.youtube.com/@chadgarber"
};

export const FEATURED_VIDEOS: Video[] = [
  {
    id: '1',
    title: "System of a Down - B.Y.O.B. - Acoustic Guitar Cover",
    thumbnail: "https://i.ytimg.com/vi/zW0X9yX9w9w/maxresdefault.jpg",
    views: "57K",
    category: "Cover",
    url: "https://www.youtube.com/watch?v=zW0X9yX9w9w"
  },
  {
    id: '2',
    title: "How to use the Line 6 HX Stomp Looper",
    thumbnail: "https://i.ytimg.com/vi/8s-q33j5rXk/maxresdefault.jpg", 
    views: "105K",
    category: "Lesson",
    url: "https://www.youtube.com/@chadgarber"
  },
  {
    id: '3',
    title: "Panasonic Lumix DMC-G7 as a Webcam",
    thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    views: "25K",
    category: "Review",
    url: "https://www.youtube.com/@chadgarber"
  },
  {
    id: '4',
    title: "How to Play Teen Spirit by Nirvana",
    thumbnail: "https://images.unsplash.com/photo-1510915361408-ef5a51ee446c?q=80&w=800&auto=format&fit=crop",
    views: "24K",
    category: "Lesson",
    url: "https://www.youtube.com/@chadgarber"
  },
   {
    id: '5',
    title: "BOSS GT-1000 Core Review",
    thumbnail: "https://images.unsplash.com/photo-1564506305608-d2eb29b37c02?q=80&w=800&auto=format&fit=crop",
    views: "42K",
    category: "Review",
    url: "https://www.youtube.com/@chadgarber"
  },
  {
    id: '6',
    title: "Original Ambient Swell Composition",
    thumbnail: "https://images.unsplash.com/photo-1461783433066-d17b29562dc1?q=80&w=800&auto=format&fit=crop",
    views: "12K",
    category: "Original",
    url: "https://www.youtube.com/@chadgarber"
  }
];