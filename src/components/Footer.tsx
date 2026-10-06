import { MapPin, Phone, Instagram } from 'lucide-react';
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  buildQuickWhatsAppLink,
  MAPS_URL,
} from '../types/popcorn';

export default function Footer() {
  return (
    <footer className="relative pt-12 pb-24 md:pb-14 px-4 sm:px-6 border-t border-neutral-800 bg-[#0a0907] text-neutral-400">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Brand */}
        <div className="space-y-1">
          <div className="text-2xl font-black text-white font-display flex items-center justify-center md:justify-start gap-2">
            <span className="text-yellow-400">POPCORN</span>
            <span>🍿</span>
          </div>
          <p className="text-sm text-neutral-300 font-medium">
            Pipoca fresquinha, feita na hora.
          </p>
        </div>

        {/* Contact list as specified */}
        <div className="space-y-2 text-xs sm:text-sm">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-2 hover:text-yellow-400 transition-colors"
          >
            <MapPin className="w-4 h-4 text-red-500 shrink-0" />
            <span>Centro de Conceição de Jacareí - RJ</span>
          </a>

          <a
            href={buildQuickWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-2 hover:text-yellow-400 transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-2 hover:text-yellow-400 transition-colors"
          >
            <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
            <span>Instagram: {INSTAGRAM_HANDLE}</span>
          </a>
        </div>

      </div>

      <div className="max-w-4xl mx-auto mt-8 pt-6 border-t border-neutral-900 text-center text-[11px] text-neutral-400">
        <p>© {new Date().getFullYear()} POPCORN Conceição de Jacareí. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
