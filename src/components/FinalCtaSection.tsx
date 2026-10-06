import { buildQuickWhatsAppLink } from '../types/popcorn';

export default function FinalCtaSection() {
  const handleOpenWhatsApp = () => {
    const link = buildQuickWhatsAppLink(
      'Olá! Deu vontade de comer uma Popcorn quentinha feita na hora 🍿 Como faço para pedir?'
    );
    window.open(link, '_blank');
  };

  return (
    <section className="relative py-14 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#2a1d04] via-[#1c1405] to-[#120d04] border-2 border-yellow-400/80 shadow-[0_25px_60px_rgba(250,204,21,0.25)] overflow-hidden">
        
        {/* Animated background sheen glow */}
        <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.2)_0%,transparent_70%)] animate-pulse-glow pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto space-y-4">
          <span className="text-4xl sm:text-5xl filter drop-shadow block">🍿</span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight">
            DEU VONTADE? <span className="text-yellow-400">🍿</span>
          </h2>

          <p className="text-xl sm:text-2xl font-bold text-amber-200">
            Então não espera!
          </p>

          <p className="text-sm sm:text-base text-neutral-300 max-w-md mx-auto">
            Peça sua Popcorn fresquinha, feita na hora. Salgada na manteiga ou doce caramelizada.
          </p>

          {/* Enormous Button: 🔥 QUERO MINHA PIPOCA */}
          <div className="pt-6">
            <button
              onClick={handleOpenWhatsApp}
              className="w-full sm:w-auto btn-3d-yellow py-5 px-10 rounded-2xl text-black font-black text-xl sm:text-2xl tracking-wide flex items-center justify-center gap-3 cursor-pointer select-none transition-all shadow-[0_15px_35px_rgba(250,204,21,0.45)] hover:scale-105 active:scale-95 mx-auto"
            >
              <span className="text-3xl">🔥</span>
              <span>QUERO MINHA PIPOCA</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
