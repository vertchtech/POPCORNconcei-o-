import { Flame, Sparkles, Check } from 'lucide-react';
import { SIZES, formatCurrency } from '../types/popcorn';

interface SizesAndPricesProps {
  onSelectSize: (sizeId: string) => void;
  selectedSizeId?: string;
}

export default function SizesAndPricesSection({
  onSelectSize,
  selectedSizeId,
}: SizesAndPricesProps) {
  const normalSizes = SIZES.filter((s) => !s.highlight);
  const xgSize = SIZES.find((s) => s.highlight)!;

  return (
    <section id="precos" className="relative py-14 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
          <span>💰 Melhores Preços de Jacareí</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
          💰 TAMANHOS E PREÇOS
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-300 max-w-lg mx-auto">
          Temos o tamanho perfeito para sua fome individual, para dividir a dois ou para toda a galera.
        </p>
      </div>

      {/* SPECIAL HIGHLIGHT CARD: SAQUINHO XG (R$ 20,00) */}
      <div className="mb-10">
        <div
          className={`relative rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#2a2205] via-[#1f1a07] to-[#250d0d] border-2 ${
            selectedSizeId === xgSize.id ? 'border-yellow-300 shadow-[0_0_40px_rgba(250,204,21,0.5)]' : 'border-yellow-400/90 shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
          } overflow-hidden transition-all duration-300`}
        >
          {/* Top banner tag */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-red-600 to-amber-500 text-white font-black text-xs sm:text-sm px-6 py-1.5 rounded-bl-2xl shadow-lg uppercase tracking-wider flex items-center gap-1.5">
            <Flame className="w-4 h-4" />
            <span>O GIGANTE POPCORN • O MAIS PEDIDO</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4 sm:pt-2">
            {/* Visual 3D Massive Bucket Packaging */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-48 sm:w-56 aspect-square rounded-2xl overflow-hidden border-2 border-yellow-400/80 shadow-[0_15px_35px_rgba(0,0,0,0.9)] group">
                <img
                  src="/src/assets/images/popcorn_xg_bucket_3d_1791247950495.jpg"
                  alt="Embalagem Gigante Popcorn XG"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 right-2 bg-yellow-400 text-black font-black text-[11px] text-center py-1 rounded-lg uppercase tracking-wider shadow">
                  Embalagem Gigante XG
                </span>
              </div>
            </div>

            {/* Info and HUGE Price */}
            <div className="md:col-span-7 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ideal para Galera, Cinema em Casa e Família</span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-white font-display">
                  Saquinho XG
                </h3>
                <p className="text-sm text-neutral-300 mt-1">
                  Apresentação gigante, transbordando pipoca quentinha, bem amanteigada ou caramelizada com cobertura.
                </p>
              </div>

              {/* Massive Impact Price Display */}
              <div className="flex flex-wrap items-baseline justify-center md:justify-start gap-3 py-1">
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-bold">Apenas</span>
                <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-500 drop-shadow-[0_4px_20px_rgba(250,204,21,0.6)] tabular-nums">
                  R$ 20,00
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800">
                  Melhor Custo x Benefício
                </span>
              </div>

              {/* CTA */}
              <button
                onClick={() => onSelectSize(xgSize.id)}
                className="w-full sm:w-auto btn-3d-yellow py-3.5 px-8 rounded-2xl text-black font-black text-base flex items-center justify-center gap-2 cursor-pointer transition-transform select-none"
              >
                <span>🔥</span>
                <span>QUERO O SAQUINHO XG (R$ 20,00)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of the Other 7 Sizes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {normalSizes.map((size) => {
          const isSelected = selectedSizeId === size.id;
          const isBox = size.category === 'caixinha';

          return (
            <div
              key={size.id}
              onClick={() => onSelectSize(size.id)}
              className={`relative rounded-3xl p-5 border transition-all duration-200 cursor-pointer select-none flex flex-col justify-between hover:-translate-y-1 ${
                isSelected
                  ? 'bg-[#262013] border-yellow-400 shadow-[0_10px_25px_rgba(250,204,21,0.25)] ring-2 ring-yellow-400'
                  : 'bg-gradient-to-b from-[#181613] to-[#11100e] border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      isBox
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-neutral-800 text-neutral-300'
                    }`}
                  >
                    {isBox ? 'Caixinha' : 'Saquinho'}
                  </span>
                  <span className="text-[11px] text-neutral-400 font-medium">
                    {size.servings}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-1">
                  {size.name}
                </h4>

                <p className="text-xs text-neutral-400 mb-4">
                  {size.tag}
                </p>
              </div>

              {/* Price and Select button */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-neutral-400 block font-semibold">Valor</span>
                  <span className="text-2xl font-black text-yellow-400 tabular-nums">
                    {formatCurrency(size.price)}
                  </span>
                </div>

                <button
                  type="button"
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-yellow-400 text-black shadow-md'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200'
                  }`}
                >
                  {isSelected ? (
                    <span className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-black" />
                      Escolhido
                    </span>
                  ) : (
                    'Escolher'
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
