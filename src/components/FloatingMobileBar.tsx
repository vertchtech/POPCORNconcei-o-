import { MessageCircle } from 'lucide-react';
import { buildQuickWhatsAppLink } from '../types/popcorn';

interface FloatingMobileBarProps {
  onOrderClick: () => void;
}

export default function FloatingMobileBar({ onOrderClick }: FloatingMobileBarProps) {
  const handleDirectWhatsApp = () => {
    window.open(buildQuickWhatsAppLink(), '_blank');
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] bg-[#0c0a08]/90 backdrop-blur-lg border-t border-neutral-800 shadow-[0_-5px_25px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Main CTA: 🍿 PEDIR AGORA */}
        <button
          onClick={onOrderClick}
          className="flex-1 btn-3d-yellow py-3 px-4 rounded-xl text-black font-black text-sm flex items-center justify-center gap-2 cursor-pointer select-none active:scale-95 transition-all shadow-md"
        >
          <span className="text-lg">🍿</span>
          <span className="tracking-wide">PEDIR AGORA</span>
        </button>

        {/* WhatsApp Fast Icon Button */}
        <button
          onClick={handleDirectWhatsApp}
          className="w-12 h-11 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center cursor-pointer select-none active:scale-95 shadow-[0_4px_0_#065f46] transition-all"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
        </button>
      </div>
    </div>
  );
}
