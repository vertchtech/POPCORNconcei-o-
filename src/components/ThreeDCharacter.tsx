import { useState } from 'react';

interface ThreeDCharacterProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
  badgeText?: string;
}

export default function ThreeDCharacter({
  className = '',
  size = 'md',
  showBadge = true,
  badgeText = 'Feita na hora com manteiga! 🍿',
}: ThreeDCharacterProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'max-w-[180px] sm:max-w-[210px]',
    md: 'max-w-[230px] sm:max-w-[280px] md:max-w-[320px]',
    lg: 'max-w-[280px] sm:max-w-[340px] md:max-w-[400px]',
  }[size];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex flex-col items-center select-none ${className}`}
      aria-label="Mascote Oficial POPCORN"
    >
      {/* Speech bubble / Badge */}
      {showBadge && (
        <div
          className={`mb-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-black text-xs sm:text-sm font-bold shadow-lg border border-yellow-200/80 transition-all duration-300 transform ${
            isHovered ? '-translate-y-1 scale-105' : 'translate-y-0'
          }`}
        >
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            {badgeText}
          </span>
        </div>
      )}

      {/* 3D Floating Mascot Body */}
      <div
        className={`relative will-change-transform transition-transform duration-300 ${
          isHovered ? 'scale-105 -translate-y-2' : 'animate-float-opposite'
        }`}
      >
        {/* Warm Golden Halo behind character */}
        <div className="absolute -inset-4 bg-gradient-to-t from-amber-500/25 via-yellow-400/15 to-transparent rounded-full blur-xl -z-10" />

        {/* Character Image */}
        <div className={`relative ${sizeClasses} mx-auto filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.85)] drop-shadow-[0_4px_10px_rgba(250,204,21,0.25)]`}>
          <img
            src="/popcorn-character-transparent.png"
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = 'https://i.postimg.cc/66YXLPMQ/file-0000000087ec820e9d3afa79e6fa0824.png';
            }}
            alt="Mascote Oficial POPCORN"
            className="w-full h-auto object-contain block relative z-10 pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          {/* Subdued specular shine */}
          <div
            className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-3xl opacity-40"
            style={{ mixBlendMode: 'overlay' }}
          >
            <div className="w-[60%] h-full bg-gradient-to-r from-transparent via-white/70 to-transparent animate-sheen" />
          </div>
        </div>

        {/* Realistic Floor Shadow */}
        <div
          className="w-3/4 h-5 mx-auto -mt-2 bg-black/75 rounded-[100%] blur-md -z-20 transition-all duration-300"
          style={{
            transform: isHovered ? 'scale(0.9) translateY(4px)' : 'scale(1)',
            opacity: isHovered ? 0.85 : 0.65,
          }}
        />
      </div>
    </div>
  );
}
