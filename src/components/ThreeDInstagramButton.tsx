import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../types/popcorn';

interface ThreeDInstagramButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function ThreeDInstagramButton({
  className = '',
  size = 'md',
}: ThreeDInstagramButtonProps) {
  const sizeStyles = {
    sm: 'px-4 py-2.5 text-xs',
    md: 'px-5 py-3 text-sm',
    lg: 'px-7 py-4 text-base font-bold',
  }[size];

  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center gap-3 rounded-2xl font-bold tracking-wide transition-all duration-200 select-none active:scale-95 ${sizeStyles} ${className}`}
      style={{
        background: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
        boxShadow: '0 6px 0 #4a044e, 0 12px 25px rgba(225, 48, 108, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
      }}
      aria-label="Instagram Oficial POPCORN Conceição"
    >
      {/* 3D Instagram Glossy Icon */}
      <span
        className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm border border-white/40 shadow-inner group-hover:scale-110 transition-transform duration-200"
        style={{
          boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.6), 0 2px 5px rgba(0,0,0,0.3)',
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </span>

      {/* Button Text */}
      <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] font-extrabold whitespace-nowrap">
        {INSTAGRAM_HANDLE}
      </span>

      {/* Shiny sheen sweep */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity">
        <div className="w-[80%] h-full bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
      </div>
    </a>
  );
}
