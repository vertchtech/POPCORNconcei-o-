import { Sparkles } from 'lucide-react';

export default function WhyPopcornSection() {
  const differentials = [
    {
      emoji: '🍿',
      title: 'Sempre fresquinha',
      description: 'Feita na hora. Nada de pipoca velha guardada de um dia para o outro.',
      tag: 'Qualidade Máxima',
      highlightColor: 'from-amber-400/20 to-yellow-500/10',
      borderColor: 'border-yellow-500/40',
    },
    {
      emoji: '🧈',
      title: 'Salgada na manteiga',
      description: 'Sabor marcante, aroma irresistível e preparada artesanalmente com manteiga de verdade.',
      tag: 'Receita Exclusiva',
      highlightColor: 'from-yellow-400/20 to-amber-600/10',
      borderColor: 'border-yellow-400/40',
    },
    {
      emoji: '🔥',
      title: 'Bacon + calabresa',
      description: 'A pipoca salgada já leva pedacinhos crocantes de bacon e calabresa misturados na hora.',
      tag: 'Mais Sabor',
      highlightColor: 'from-red-500/20 to-amber-500/10',
      borderColor: 'border-red-500/40',
    },
    {
      emoji: '🍯',
      title: 'Doce caramelizada',
      description: 'Pipoca doce caramelizada com calda dourada, crocância perfeita e sabor inesquecível.',
      tag: 'Crocante & Doce',
      highlightColor: 'from-amber-500/20 to-yellow-600/10',
      borderColor: 'border-amber-400/40',
    },
    {
      emoji: '📦',
      title: 'Peça pelo WhatsApp',
      description: 'Faça seu pedido antecipadamente pelo nosso site e passe para buscar quentinha sem fila.',
      tag: 'Rápido & Prático',
      highlightColor: 'from-emerald-500/20 to-yellow-500/10',
      borderColor: 'border-emerald-500/40',
    },
  ];

  return (
    <section className="relative py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Diferenciais Exclusivos</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
          Por que a <span className="text-yellow-400">POPCORN</span> é diferente?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-lg mx-auto">
          Ingredientes selecionados, preparo na hora e a verdadeira paixão por pipoca.
        </p>
      </div>

      {/* Grid of 5 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {differentials.map((item, index) => (
          <div
            key={index}
            className={`group relative rounded-3xl p-6 bg-gradient-to-b from-[#181613] to-[#100f0c] border ${item.borderColor} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] ${
              index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
            }`}
            style={{
              boxShadow: '0 8px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Top highlight indicator */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform">
                {item.emoji}
              </span>
              <span className="text-[11px] font-bold text-neutral-400 group-hover:text-yellow-300 transition-colors uppercase tracking-wider">
                {item.tag}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-1.5 group-hover:text-yellow-300 transition-colors">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {item.description}
            </p>

            {/* Red accent hairline accent */}
            <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent group-hover:via-red-500/70 transition-colors" />
          </div>
        ))}
      </div>
    </section>
  );
}
