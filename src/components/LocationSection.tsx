import { MapPin, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { MAPS_URL } from '../types/popcorn';

export default function LocationSection() {
  return (
    <section id="onde-estamos" className="relative py-14 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>Localização Estratégica</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
          📍 ONDE ESTAMOS
        </h2>
        <p className="mt-2 text-base sm:text-lg text-yellow-300 font-semibold max-w-md mx-auto">
          Centro de Conceição de Jacareí
        </p>
        <p className="text-xs sm:text-sm text-neutral-400">
          Mangaratiba - Costa Verde, Rio de Janeiro
        </p>
      </div>

      {/* Main Location Card */}
      <div className="rounded-3xl overflow-hidden bg-gradient-to-b from-[#1c1915] to-[#100f0c] border border-neutral-800 shadow-[0_20px_45px_rgba(0,0,0,0.7)] grid grid-cols-1 md:grid-cols-12 items-stretch">
        
        {/* Cart visual render */}
        <div className="md:col-span-6 relative min-h-[260px] sm:min-h-[320px]">
          <img
            src="/src/assets/images/popcorn_cart_jacarei_1791247959789.jpg"
            alt="Carrinho POPCORN em Conceição de Jacareí"
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-yellow-400/40">
            <span className="text-xs font-extrabold text-yellow-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Ponto de Atendimento no Centro de Conceição de Jacareí
            </span>
          </div>
        </div>

        {/* Details & Map Action */}
        <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Venha retirar sua pipoca quentinha!
            </h3>
            
            <p className="text-sm text-neutral-300 leading-relaxed">
              Nosso carrinho fica estrategicamente no coração de Conceição de Jacareí. O cheirinho inconfundível de pipoca na manteiga e caramelo guia você até nós!
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span><strong>Endereço:</strong> Centro de Conceição de Jacareí, Rio de Janeiro - RJ</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                <Clock className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span><strong>Dica:</strong> Peça com antecedência no WhatsApp e retire quentinha na hora sem fila.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Pagamento fácil:</strong> Aceitamos Pix, Dinheiro e Cartão.</span>
              </div>
            </div>
          </div>

          {/* Button COMO CHEGAR */}
          <div className="pt-4 border-t border-neutral-800">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-3d-yellow py-3.5 px-6 rounded-2xl text-black font-black text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer select-none transition-transform"
            >
              <Navigation className="w-4 h-4" />
              <span>COMO CHEGAR NO GOOGLE MAPS</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
