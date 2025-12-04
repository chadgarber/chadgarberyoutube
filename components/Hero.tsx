import React, { useEffect, useState } from 'react';
import { ASSETS, CHANNEL_INFO, PLAYLIST_LINKS } from '../constants';
import NeonButton from './NeonButton';
import { Youtube, Music, Star } from 'lucide-react';
import { ThemeColor } from '../types';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Banner - Parallax Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${ASSETS.BANNER_URL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`, // Added scale to prevent white edges on scroll
          filter: 'brightness(0.6) contrast(1.2)' // Slightly brighter to show the "lights"
        }}
      />

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(168, 85, 247, 0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          perspective: '500px',
          transform: 'rotateX(60deg) scale(2) translateY(-100px)',
          transformOrigin: 'top center'
        }}
      />

      {/* Gradient Overlay for Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/30 via-transparent to-dark-bg z-0" />

      {/* Content Container */}
      <div className="container mx-auto px-4 z-10 relative mt-20 md:mt-0">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Avatar Section - The Pulsating Circle */}
          <div className="relative group shrink-0 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center order-1 md:order-none">
            
            {/* 1. Outer Glow (Static) */}
            <div className="absolute inset-0 bg-neon-purple blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-500 rounded-full" />
            
            {/* 2. Outer Rotating Ring (Dashed) */}
            <div className="absolute inset-0 border-2 border-neon-blue/30 border-dashed rounded-full animate-spin-slow" />
            
            {/* 3. Inner Rotating Ring (Solid, Reverse) */}
            <div 
              className="absolute inset-4 border border-neon-pink/50 rounded-full animate-spin-slow" 
              style={{ animationDirection: 'reverse', animationDuration: '15s' }} 
            />

            {/* 4. Pulsating Ripple Ring */}
            <div className="absolute inset-0 border-4 border-neon-purple/20 rounded-full animate-ping" />

            {/* 5. Main Avatar Container */}
            <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full p-1.5 bg-gradient-to-tr from-neon-purple via-white to-neon-cyan shadow-[0_0_50px_rgba(168,85,247,0.5)]">
               <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
                <img 
                  src={imageError ? "https://ui-avatars.com/api/?name=Chad+Garber&background=a855f7&color=fff&size=256" : ASSETS.AVATAR_URL} 
                  alt={CHANNEL_INFO.name} 
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
               </div>
            </div>
            
            {/* Floating Icons around avatar */}
            <div className="absolute -top-4 right-10 bg-black/80 p-2 rounded-full border border-neon-purple text-neon-purple animate-float">
              <Music size={20} />
            </div>
             <div className="absolute bottom-4 left-10 bg-black/80 p-2 rounded-full border border-neon-blue text-neon-blue animate-float" style={{ animationDelay: '1s' }}>
              <Star size={20} />
            </div>
          </div>

          {/* Text Content - Matched to YouTube Banner Style */}
          <div className="flex-1 text-center md:text-left space-y-4 order-2 md:order-none relative z-20">
            
            {/* "Subscribe To" - Small Header */}
            <h3 className="text-xl md:text-2xl font-sans font-bold text-white tracking-widest uppercase mb-4 drop-shadow-md">
              Subscribe To
            </h3>

            {/* 3D Animated Banner Container */}
            <div className="animate-float-3d flex flex-col items-center md:items-start group cursor-default">
              
              {/* "IMPROVE YOUR GUITAR SKILLS..." - Realistic Red 3D Banner */}
              <div className="relative transform -skew-x-6 md:-skew-x-12 inline-block z-20">
                {/* 3D Block Construction */}
                <div className="bg-gradient-to-b from-red-500 to-red-700 text-white px-8 py-3 
                                border-t border-red-400 border-b-[6px] border-r-[2px] border-b-red-900 border-r-red-800
                                shadow-[0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden relative">
                  
                  {/* Sheen Effect */}
                  <div className="absolute inset-0 bg-white/20 skew-x-12 translate-x-[-150%] group-hover:animate-shimmer" />

                  <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold leading-none uppercase tracking-tight relative z-10">
                    <span className="block transform skew-x-6 md:skew-x-12">
                      IMPROVE YOUR GUITAR
                    </span>
                    <span className="block transform skew-x-6 md:skew-x-12 mt-1">
                      SKILLS AND SOUND
                    </span>
                  </h1>
                </div>
              </div>

              {/* "GUITAR LESSONS..." - Realistic Yellow 3D Banner */}
              {/* Positioned physically under the red one with negative margin to tuck it slightly */}
              <div className="relative transform -skew-x-6 md:-skew-x-12 inline-block -mt-1 md:-mt-2 z-10 ml-0 md:ml-8">
                 {/* 3D Block Construction */}
                 <div className="bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 text-black px-6 py-2 
                                 border-t border-yellow-200 border-b-[4px] border-r-[2px] border-b-yellow-700 border-r-yellow-600
                                 shadow-[0_10px_15px_rgba(0,0,0,0.4)] relative">
                   
                   <p className="text-sm md:text-lg lg:text-xl font-display font-bold uppercase tracking-normal flex gap-2 items-center flex-wrap justify-center">
                     <span className="transform skew-x-6 md:skew-x-12 flex gap-2 items-center">
                       {PLAYLIST_LINKS.map((link, index) => (
                         <React.Fragment key={link.text}>
                           <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-red-600 hover:underline decoration-2 underline-offset-2 transition-all duration-300"
                           >
                             {link.text}
                           </a>
                           {index < PLAYLIST_LINKS.length - 1 && (
                             <span className="opacity-50 mx-1">-</span>
                           )}
                         </React.Fragment>
                       ))}
                     </span>
                   </p>
                </div>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-8">
              <NeonButton href={CHANNEL_INFO.youtubeUrl} color={ThemeColor.RED} className="text-lg px-8 py-4">
                <Youtube className="w-6 h-6" />
                Subscribe Now
              </NeonButton>
              <NeonButton href={`${CHANNEL_INFO.youtubeUrl}/videos`} color={ThemeColor.BLUE} className="text-lg px-8 py-4">
                Latest Videos
              </NeonButton>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center md:justify-start gap-8 pt-8 text-sm font-display tracking-widest text-gray-300">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold text-white block drop-shadow-lg">{CHANNEL_INFO.subscribers}</span>
                <span className="opacity-80">SUBSCRIBERS</span>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold text-white block drop-shadow-lg">{CHANNEL_INFO.videos}</span>
                <span className="opacity-80">VIDEOS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;