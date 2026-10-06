import { Camera } from 'lucide-react';
import ThreeDInstagramButton from './ThreeDInstagramButton';

export default function InstagramSection() {
  return (
    <section className="relative py-14 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#1e1428] via-[#140f1a] to-[#0d0c0e] border border-purple-500/30 shadow-[0_20px_45px_rgba(0,0,0,0.7)] relative overflow-hidden">
        {/* Subtle purple-pink glow */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-gradient-to-br from-pink-500/15 via-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-lg mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Comunidade no Instagram</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display">
            📸 SIGA A POPCORN
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Acompanhe nossas novidades, sabores e promoções no Instagram.
          </p>

          <div className="pt-4 flex justify-center">
            <ThreeDInstagramButton size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
