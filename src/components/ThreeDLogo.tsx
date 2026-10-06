import { useState, useRef, MouseEvent, TouchEvent } from 'react';

export default function ThreeDLogo({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 12;
    const rotY = ((x - centerX) / centerX) * 14;

    setRotate({ x: rotX, y: rotY });
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 8;
    const rotY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotX, y: rotY });
  };

  const handleLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleLeave}
      onTouchEnd={handleLeave}
      className={`relative inline-block select-none cursor-pointer [perspective:1200px] ${className}`}
      aria-label="Logomarca Oficial POPCORN em 3D"
    >
      {/* Golden halo glow behind the logo */}
      <div
        className="absolute -inset-6 rounded-full bg-gradient-to-tr from-amber-500/25 via-yellow-400/20 to-red-500/15 blur-2xl -z-10 transition-transform duration-500 will-change-transform"
        style={{
          transform: isHovered
            ? `scale(1.15) translate3d(${rotate.y * 1.5}px, ${-rotate.x * 1.5}px, 0)`
            : 'scale(1)',
        }}
      />

      {/* 3D Floating container */}
      <div
        className={`relative transition-transform duration-200 ease-out will-change-transform ${
          !isHovered ? 'animate-float-soft' : ''
        }`}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(20px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Soft floor shadow with 3D offset */}
        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[75%] h-8 bg-black/70 rounded-[100%] blur-xl -z-20 transition-all duration-300"
          style={{
            transform: `scale(${1 - Math.abs(rotate.x) * 0.02}) translateX(${rotate.y * 1.2}px)`,
            opacity: isHovered ? 0.9 : 0.65,
          }}
        />

        {/* 3D High-Relief Extrusion Layer (Backplate depth) */}
        <div
          className="relative max-w-[280px] sm:max-w-[340px] md:max-w-[400px] mx-auto filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.85)] drop-shadow-[0_4px_12px_rgba(250,204,21,0.35)]"
        >
          {/* Main Logo Image (Extracted transparent PNG with fallback) */}
          <img
            src="/popcorn-logo-transparent.png"
            onError={(e) => {
              // fallback to direct URL with visual mask/blend
              const target = e.currentTarget;
              target.onerror = null;
              target.src = 'https://i.postimg.cc/JhVVzCzp/IMG-20260708-160521.png';
            }}
            alt="POPCORN Logomarca Oficial"
            className="w-full h-auto object-contain block relative z-10 pointer-events-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.2)]"
            loading="eager"
            referrerPolicy="no-referrer"
          />

          {/* Realistic Specular Gloss Sheen Sweep */}
          <div
            className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-full opacity-60"
            style={{ mixBlendMode: 'overlay' }}
          >
            <div className="w-[80%] h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-sheen" />
          </div>

          {/* Subdued top rim highlight */}
          <div className="absolute top-1 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-yellow-200/60 to-transparent z-20 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
