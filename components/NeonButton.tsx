import React from 'react';
import { ThemeColor } from '../types';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: ThemeColor;
  className?: string;
  fullWidth?: boolean;
  href?: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  onClick, 
  color = ThemeColor.PURPLE, 
  className = '',
  fullWidth = false,
  href
}) => {
  
  // "Pressed" look by default:
  // 1. Background is slightly filled (bg-opacity-10 or 20)
  // 2. Shadow is INSET (glowing from inside)
  // 3. Text is colored
  const colorMap = {
    [ThemeColor.PURPLE]: 'border-neon-purple text-neon-purple bg-neon-purple/10 shadow-[inset_0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[inset_0_0_25px_rgba(168,85,247,0.6),0_0_15px_rgba(168,85,247,0.5)] active:bg-neon-purple active:text-white active:shadow-[0_0_30px_#a855f7]',
    
    [ThemeColor.BLUE]: 'border-neon-blue text-neon-blue bg-neon-blue/10 shadow-[inset_0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[inset_0_0_25px_rgba(59,130,246,0.6),0_0_15px_rgba(59,130,246,0.5)] active:bg-neon-blue active:text-white active:shadow-[0_0_30px_#3b82f6]',
    
    [ThemeColor.RED]: 'border-neon-red text-neon-red bg-neon-red/10 shadow-[inset_0_0_15px_rgba(239,68,68,0.4)] hover:shadow-[inset_0_0_25px_rgba(239,68,68,0.6),0_0_15px_rgba(239,68,68,0.5)] active:bg-neon-red active:text-white active:shadow-[0_0_30px_#ef4444]',
    
    [ThemeColor.PINK]: 'border-neon-pink text-neon-pink bg-neon-pink/10 shadow-[inset_0_0_15px_rgba(236,72,153,0.4)] hover:shadow-[inset_0_0_25px_rgba(236,72,153,0.6),0_0_15px_rgba(236,72,153,0.5)] active:bg-neon-pink active:text-white active:shadow-[0_0_30px_#ec4899]',
  };

  const baseStyles = `
    relative overflow-hidden group px-8 py-3 font-display font-bold tracking-wide 
    uppercase border-2 transition-all duration-150 ease-out 
    transform active:scale-95 active:translate-y-1
    ${fullWidth ? 'w-full flex justify-center' : 'inline-flex'}
    ${colorMap[color]} 
    ${className}
  `;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Scanline effect for that "screen" look */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[1] bg-[length:100%_4px,6px_100%] pointer-events-none" />
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseStyles}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {content}
    </button>
  );
};

export default NeonButton;