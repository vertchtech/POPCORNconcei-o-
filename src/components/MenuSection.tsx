import { Check, Flame, Heart, Sparkles } from 'lucide-react';
import ThreeDCharacter from './ThreeDCharacter';
import { CONDIMENTS, DOCE_TOPPINGS, SALGADA_INGREDIENTS, PopcornType } from '../types/popcorn';

interface MenuSectionProps {
  onSelectFlavor: (flavor: PopcornType) => void;
  onSelectCondiment: (condimentId: string) => void;
  selectedCondiment?: string;
}

export default function MenuSection({
  onSelectFlavor,
  onSelectCondiment,
  selectedCondiment,
}: MenuSectionProps) {
  return (
    <section id="cardapio" className="relative py-14 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-2">
          <span>🍿 Receita Artesanal Exclusiva</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
          🍿 NOSSO CARDÁPIO
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-300 max-w-md mx-auto">
          Escolha seu tamanho e monte sua pipoca do seu jeito.
        </p>
      </div>

      {/* Two Main Flavor Cards (3D Packaging) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
        {/* Card 1: PIPOCA SALGADA */}
        <div
          className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#1c1915] via-[#14120f] to-[#0c0a08] border border-yellow-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400"
          style={{
            boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 30px rgba(250,204,21,0.08), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          {/* Top badge */}
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full bg-yellow-400 text-black text-xs font-black uppercase tracking-wider shadow-md">
              Mais Pedida 🔥
            </span>
            <span className="text-xs font-semibold text-neutral-400 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-red-500" />
              Na manteiga com bacon
            </span>
          </div>

          {/* 3D Stylized Packaging Visual (Popcorn yellow/black/red identity) */}
          <div className="relative w-full aspect-square max-w-[260px] sm:max-w-[280px] mx-auto my-2 rounded-2xl overflow-hidden border border-yellow-500/30 shadow-[0_12px_28px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500">
            <img
              src="/src/assets/images/popcorn_bag_packaging_3d_1791247931363.jpg"
              alt="Embalagem 3D Pipoca Salgada Popcorn"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Gloss sheen overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/20 pointer-events-none" />
            <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-yellow-400/40 text-center">
              <span className="text-xs font-bold text-yellow-300">Embalagem Popcorn Salgada</span>
            </div>
          </div>

          {/* Content */}
          <div className="mt-4 space-y-3">
            <h3 className="text-2xl font-black text-white flex items-center gap-2 font-display">
              <span>🧈</span>
              <span className="text-yellow-400">PIPOCA SALGADA</span>
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Feita na manteiga, com bacon, calabresa e queijo ralado. Saborosa, bem temperada e preparada na hora.
            </p>

            {/* Ingredients Tags */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                Ingredientes & Diferenciais inclusos:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {SALGADA_INGREDIENTS.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-yellow-400/10 border border-yellow-400/20 text-xs font-semibold text-yellow-200"
                  >
                    <Check className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="mt-6 pt-4 border-t border-neutral-800">
            <button
              onClick={() => onSelectFlavor('salgada')}
              className="w-full btn-3d-yellow py-3 px-5 rounded-2xl text-black font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer transition-transform select-none"
            >
              <span>🧈</span>
              <span>ESCOLHER PIPOCA SALGADA</span>
            </button>
          </div>
        </div>

        {/* Card 2: PIPOCA DOCE */}
        <div
          className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#1c1915] via-[#14120f] to-[#0c0a08] border border-amber-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-amber-400"
          style={{
            boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 30px rgba(245,158,11,0.08), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          {/* Top badge */}
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-amber-500 text-white text-xs font-black uppercase tracking-wider shadow-md">
              Crocante & Caramelizada ✨
            </span>
            <span className="text-xs font-semibold text-neutral-400 flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-red-500" />
              Com coberturas Fini
            </span>
          </div>

          {/* 3D Stylized Packaging Visual (Popcorn yellow/black/red identity) */}
          <div className="relative w-full aspect-square max-w-[260px] sm:max-w-[280px] mx-auto my-2 rounded-2xl overflow-hidden border border-amber-500/30 shadow-[0_12px_28px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500">
            <img
              src="/src/assets/images/popcorn_box_packaging_3d_1791247940540.jpg"
              alt="Embalagem 3D Pipoca Doce Popcorn"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            {/* Gloss sheen overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/20 pointer-events-none" />
            <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-amber-400/40 text-center">
              <span className="text-xs font-bold text-amber-300">Embalagem Popcorn Doce</span>
            </div>
          </div>

          {/* Content */}
          <div className="mt-4 space-y-3">
            <h3 className="text-2xl font-black text-white flex items-center gap-2 font-display">
              <span>🍯</span>
              <span className="text-amber-400">PIPOCA DOCE</span>
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Pipoca caramelizada, docinha, crocante e com sabor irresistível. O cliente pode escolher sua cobertura favorita!
            </p>

            {/* Toppings Tags */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                Coberturas disponíveis:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {DOCE_TOPPINGS.map((topping) => (
                  <span
                    key={topping.id}
                    className="px-2.5 py-1 rounded-xl bg-amber-400/15 border border-amber-400/30 text-xs font-semibold text-amber-200"
                  >
                    {topping.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="mt-6 pt-4 border-t border-neutral-800">
            <button
              onClick={() => onSelectFlavor('doce')}
              className="w-full btn-3d-yellow py-3 px-5 rounded-2xl text-black font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer transition-transform select-none"
            >
              <span>🍯</span>
              <span>ESCOLHER PIPOCA DOCE</span>
            </button>
          </div>
        </div>
      </div>

      {/* Strategic Character Placement near menu */}
      <div className="my-8 flex flex-col sm:flex-row items-center justify-center gap-6 p-6 rounded-3xl bg-gradient-to-r from-yellow-400/10 via-[#181612] to-amber-500/10 border border-yellow-400/30">
        <ThreeDCharacter size="sm" showBadge={false} />
        <div className="text-center sm:text-left max-w-md">
          <span className="px-3 py-1 rounded-full bg-red-500 text-white text-[11px] font-black uppercase tracking-wider">
            Dica do Mascote
          </span>
          <h4 className="text-xl font-bold text-white mt-1">Já provou nossa Salgada na Manteiga?</h4>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1">
            Bacon sequinho, calabresa defumada e queijo ralado por cima. É a pipoca mais famosa de Conceição de Jacareí!
          </p>
        </div>
      </div>

      {/* CONDIMENTOS / FINALIZAÇÃO */}
      <div className="mt-12 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#181613] to-[#0f0e0b] border border-neutral-800">
        <div className="text-center max-w-lg mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Toque Final Irresistível</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            ✨ ESCOLHA SEU CONDIMENTO
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            O cliente pode escolher uma opção para colocar por cima e dar aquele toque especial!
          </p>
        </div>

        {/* Condiments Selection Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {CONDIMENTS.map((condiment) => {
            const isSelected = selectedCondiment === condiment.id;
            return (
              <button
                key={condiment.id}
                onClick={() => onSelectCondiment(condiment.id)}
                className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all duration-200 cursor-pointer select-none ${
                  isSelected
                    ? 'bg-yellow-400 text-black border-yellow-300 shadow-[0_8px_20px_rgba(250,204,21,0.3)] scale-105'
                    : 'bg-[#201c18] text-neutral-200 border-neutral-700/80 hover:border-yellow-400/60 hover:bg-[#28231d]'
                }`}
              >
                {isSelected && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold shadow-md">
                    ✓
                  </span>
                )}
                <span className="text-3xl mb-2 filter drop-shadow">{condiment.icon}</span>
                <span className={`text-xs font-bold ${isSelected ? 'text-black' : 'text-white'}`}>
                  {condiment.name}
                </span>
                <span className={`text-[10px] mt-1 ${isSelected ? 'text-black/80 font-medium' : 'text-neutral-400'}`}>
                  Toque especial
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
