import { MessageCircle } from 'lucide-react';
import { buildQuickWhatsAppLink } from '../types/popcorn';

interface NavbarProps {
  onOrderClick: () => void;
}

export default function Navbar({ onOrderClick }: NavbarProps) {
  const handleWhatsApp = () => {
    window.open(buildQuickWhatsAppLink(), '_blank');
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0c0a08]/85 backdrop-blur-md border-b border-neutral-800/80 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Zone 1: Wordmark */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-black tracking-tight text-white font-display flex items-center gap-1.5 hover:opacity-90 transition-opacity"
        >
          <span className="text-yellow-400">POPCORN</span>
          <span>🍿</span>
        </a>

        {/* Zone 2: 4 Clean Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-neutral-300">
          <a
            href="#cardapio"
            className="hover:text-yellow-400 transition-colors"
          >
            Cardápio
          </a>
          <a
            href="#precos"
            className="hover:text-yellow-400 transition-colors"
          >
            Tamanhos & Preços
          </a>
          <a
            href="#monte-sua-popcorn"
            className="hover:text-yellow-400 transition-colors"
          >
            Monte sua Pipoca
          </a>
          <a
            href="#onde-estamos"
            className="hover:text-yellow-400 transition-colors"
          >
            Onde Estamos
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOrderClick}
            className="hidden sm:flex btn-3d-yellow py-2 px-4 rounded-xl text-black font-extrabold text-xs items-center gap-1.5 cursor-pointer transition-transform select-none"
          >
            <span>🍿</span>
            <span>FAZER PEDIDO</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-1.5 py-2 px-3 sm:px-3.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/40 text-xs font-bold transition-colors cursor-pointer select-none"
            aria-label="WhatsApp Popcorn"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-500/30" />
            <span className="hidden xs:inline">WhatsApp</span>
          </button>
        </div>

      </div>
    </header>
  );
}
