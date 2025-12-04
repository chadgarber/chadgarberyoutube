import React from 'react';
import { Video } from '../types';
import { Play, Eye, Music } from 'lucide-react';

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <a 
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-dark-card rounded-xl overflow-hidden border border-gray-800 hover:border-neon-purple transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-neon-purple/20 p-4 rounded-full border border-neon-purple/50 animate-pulse-fast">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-black/80 backdrop-blur border border-white/10 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-neon-blue">
          {video.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 relative z-10 bg-gradient-to-b from-transparent to-black/50">
        <h3 className="text-lg font-bold font-sans text-white mb-2 line-clamp-2 group-hover:text-neon-purple transition-colors">
          {video.title}
        </h3>
        
        <div className="flex items-center justify-between text-gray-400 text-sm mt-3">
          <div className="flex items-center gap-1.5">
            <Eye className="w-4 h-4 text-neon-pink" />
            <span>{video.views} views</span>
          </div>
          <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <span className="text-neon-blue font-semibold">Watch Now</span>
          </div>
        </div>
      </div>
      
      {/* Decorative Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </a>
  );
};

export default VideoCard;