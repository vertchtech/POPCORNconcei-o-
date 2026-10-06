import ThreeDLogo from './ThreeDLogo';
import ThreeDCharacter from './ThreeDCharacter';
import ThreeDInstagramButton from './ThreeDInstagramButton';
import { MapPin } from 'lucide-react';

interface HeroSectionProps {
  onOrderClick: () => void;
  onLocationClick: () => void;
}

export default function HeroSection({ onOrderClick, onLocationClick }: HeroSectionProps) {
  return (
    <section className="relative pt-6 pb-14 md:pt-10 md:pb-20 px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center text-center overflow-hidden">
      {/* City trust indicator */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md mb-6 animate-pulse-glow">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Conceição de Jacareí, Rio de Janeiro • Carrinho Oficial</span>
      </div>

      {/* Main 3D Logo Showcase */}
      <div className="w-full flex justify-center mb-6">
        <ThreeDLogo className="transform hover:scale-[1.02] transition-transform duration-300" />
      </div>

      {/* Character Mascot next to / beneath the logo */}
      <div className="mb-6">
        <ThreeDCharacter size="sm" badgeText="Pipoca quentinha saindo! 🍿" />
      </div>

      {/* Hero Headline & Value Proposition */}
      <div className="max-w-2xl mx-auto space-y-3">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-display">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 drop-shadow-[0_2px_15px_rgba(250,204,21,0.4)]">
            POPCORN
          </span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-200">
          Pipoca fresquinha, feita na hora! 🍿
        </p>
        <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-lg mx-auto leading-relaxed">
          Salgada na manteiga ou doce e caramelizada. Escolha seu sabor e faça seu pedido antecipado pelo WhatsApp.
        </p>
      </div>

      {/* 3 Primary Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md">
        {/* FAZER MEU PEDIDO */}
        <button
          onClick={onOrderClick}
          className="w-full sm:w-auto flex-1 btn-3d-yellow py-3.5 px-6 rounded-2xl text-black font-black text-base flex items-center justify-center gap-2 cursor-pointer transition-transform select-none"
        >
          <span className="text-xl">🍿</span>
          <span className="tracking-wide">FAZER MEU PEDIDO</span>
        </button>

        {/* INSTAGRAM */}
        <ThreeDInstagramButton size="md" className="w-full sm:w-auto" />

        {/* CONCEIÇÃO DE JACAREÍ */}
        <button
          onClick={onLocationClick}
          className="w-full sm:w-auto btn-3d-dark py-3.5 px-5 rounded-2xl text-neutral-200 hover:text-white font-bold text-sm flex items-center justify-center gap-2 border border-neutral-700/60 cursor-pointer select-none transition-colors"
        >
          <MapPin className="w-4 h-4 text-red-500 shrink-0" />
          <span className="whitespace-nowrap">CONCEIÇÃO DE JACAREÍ</span>
        </button>
      </div>

      {/* Subtle indicator scroll arrow */}
      <div className="mt-12 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-xs uppercase tracking-widest text-amber-400/80 font-medium">Role para ver o cardápio</span>
        <svg className="w-5 h-5 text-amber-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
