import { useState } from 'react';
import {
  CONDIMENTS,
  DOCE_TOPPINGS,
  SALGADA_INGREDIENTS,
  SIZES,
  PopcornType,
  OrderItem,
  buildWhatsAppLink,
  formatCurrency,
} from '../types/popcorn';
import { Check, Minus, Plus, ShoppingBag, Sparkles } from 'lucide-react';

interface OrderBuilderProps {
  initialType?: PopcornType;
  initialSizeId?: string;
  initialCondiment?: string;
}

export default function OrderBuilderSection({
  initialType = 'salgada',
  initialSizeId = 'saquinho-xg',
  initialCondiment = '',
}: OrderBuilderProps) {
  // Config state
  const [selectedType, setSelectedType] = useState<PopcornType>(initialType);
  const [selectedSizeId, setSelectedSizeId] = useState<string>(initialSizeId);

  // Salgada ingredients (default all selected as included by default)
  const [salgadaItems, setSalgadaItems] = useState<string[]>([
    'Manteiga',
    'Bacon',
    'Calabresa',
    'Queijo ralado',
  ]);

  // Doce toppings (can pick 1 or more)
  const [doceItems, setDoceItems] = useState<string[]>(['Fini Dentadura', 'Leite condensado']);

  // Condiment (single choice or none)
  const [selectedCondiment, setSelectedCondiment] = useState<string>(initialCondiment);

  // Quantity
  const [quantity, setQuantity] = useState<number>(1);

  // Helper toggle for salgada
  const toggleSalgada = (name: string) => {
    setSalgadaItems((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  };

  // Helper toggle for doce
  const toggleDoce = (name: string) => {
    setDoceItems((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  };

  // Get selected size object
  const currentSize = SIZES.find((s) => s.id === selectedSizeId) || SIZES[7]; // default XG
  const unitPrice = currentSize.price;
  const totalPrice = unitPrice * quantity;

  // Build current OrderItem
  const currentOrder: OrderItem = {
    id: `order-${Date.now()}`,
    type: selectedType,
    sizeId: currentSize.id,
    sizeName: currentSize.name,
    unitPrice: unitPrice,
    quantity: quantity,
    salgadaIngredients: selectedType === 'salgada' ? salgadaItems : undefined,
    doceToppings: selectedType === 'doce' ? doceItems : undefined,
    condiments: selectedCondiment ? [selectedCondiment] : undefined,
  };

  const handleFinishWhatsApp = () => {
    const link = buildWhatsAppLink(currentOrder);
    window.open(link, '_blank');
  };

  return (
    <section id="monte-sua-popcorn" className="relative py-14 px-4 sm:px-6 max-w-4xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Configurador Interativo</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-display">
          🍿 MONTE SUA POPCORN
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-300 max-w-md mx-auto">
          Personalize cada detalhe da sua pipoca e envie o pedido diretamente para nosso WhatsApp!
        </p>
      </div>

      {/* Main Interactive Box */}
      <div className="rounded-3xl p-6 sm:p-8 md:p-10 bg-gradient-to-b from-[#1c1915] via-[#14120e] to-[#0d0c09] border border-yellow-500/40 shadow-[0_25px_50px_rgba(0,0,0,0.8)]">
        
        {/* STEP 1: TIPO DE PIPOCA */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-400 text-black text-xs font-black">
              1
            </span>
            <label className="text-base sm:text-lg font-bold text-white">
              Escolha o Tipo de Pipoca:
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Salgada button */}
            <button
              type="button"
              onClick={() => setSelectedType('salgada')}
              className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center justify-center text-center cursor-pointer select-none ${
                selectedType === 'salgada'
                  ? 'bg-yellow-400 text-black border-yellow-300 shadow-[0_10px_25px_rgba(250,204,21,0.35)] scale-[1.02]'
                  : 'bg-[#221f1a] text-neutral-200 border-neutral-700/80 hover:border-yellow-400/60'
              }`}
            >
              <span className="text-3xl mb-1 filter drop-shadow">🧈</span>
              <span className="text-base font-extrabold">PIPOCA SALGADA</span>
              <span className={`text-xs mt-0.5 ${selectedType === 'salgada' ? 'text-black/80 font-semibold' : 'text-neutral-400'}`}>
                Feita na manteiga com bacon e calabresa
              </span>
            </button>

            {/* Doce button */}
            <button
              type="button"
              onClick={() => setSelectedType('doce')}
              className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center justify-center text-center cursor-pointer select-none ${
                selectedType === 'doce'
                  ? 'bg-amber-400 text-black border-amber-300 shadow-[0_10px_25px_rgba(245,158,11,0.35)] scale-[1.02]'
                  : 'bg-[#221f1a] text-neutral-200 border-neutral-700/80 hover:border-amber-400/60'
              }`}
            >
              <span className="text-3xl mb-1 filter drop-shadow">🍯</span>
              <span className="text-base font-extrabold">PIPOCA DOCE</span>
              <span className={`text-xs mt-0.5 ${selectedType === 'doce' ? 'text-black/80 font-semibold' : 'text-neutral-400'}`}>
                Caramelizada, crocante e com coberturas
              </span>
            </button>
          </div>
        </div>

        {/* STEP 2: TAMANHO */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-400 text-black text-xs font-black">
              2
            </span>
            <label className="text-base sm:text-lg font-bold text-white">
              Escolha o Tamanho da Embalagem:
            </label>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {SIZES.map((size) => {
              const isSelected = selectedSizeId === size.id;
              return (
                <button
                  key={size.id}
                  type="button"
                  onClick={() => setSelectedSizeId(size.id)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer select-none flex flex-col justify-between ${
                    isSelected
                      ? 'bg-yellow-400 text-black border-yellow-300 shadow-[0_8px_18px_rgba(250,204,21,0.3)] ring-2 ring-yellow-400'
                      : size.highlight
                      ? 'bg-[#281c0c] border-yellow-500/80 text-white hover:border-yellow-400'
                      : 'bg-[#221f1a] text-neutral-200 border-neutral-700/70 hover:border-neutral-600'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className={`text-xs font-bold leading-tight ${isSelected ? 'text-black' : 'text-white'}`}>
                      {size.name}
                    </span>
                    {size.highlight && (
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-black ${isSelected ? 'bg-black text-yellow-300' : 'bg-red-600 text-white'}`}>
                        🔥 XG
                      </span>
                    )}
                  </div>
                  <span className={`text-sm font-black mt-2 tabular-nums ${isSelected ? 'text-black' : 'text-yellow-400'}`}>
                    {formatCurrency(size.price)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 3: INGREDIENTES OU COBERTURAS DEPENDENDO DO TIPO */}
        {selectedType === 'salgada' ? (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-400 text-black text-xs font-black">
                  3
                </span>
                <label className="text-base sm:text-lg font-bold text-white">
                  Ingredientes da Pipoca Salgada (Toque para ajustar):
                </label>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {['Bacon', 'Calabresa', 'Queijo ralado', 'Manteiga'].map((item) => {
                const isChecked = salgadaItems.includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleSalgada(item)}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex items-center justify-center gap-2 select-none ${
                      isChecked
                        ? 'bg-yellow-400/20 text-yellow-300 border-yellow-400/80'
                        : 'bg-[#221f1a] text-neutral-400 border-neutral-700/60 line-through'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-md flex items-center justify-center text-xs font-bold ${isChecked ? 'bg-yellow-400 text-black' : 'bg-neutral-700 text-neutral-400'}`}>
                      {isChecked ? '✓' : ''}
                    </span>
                    <span className="text-xs font-bold">{item}</span>
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] text-neutral-400 mt-2">
              * Por padrão todos os ingredientes já vêm inclusos para dar o sabor máximo. Desmarque se tiver preferência.
            </p>
          </div>
        ) : (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-400 text-black text-xs font-black">
                  3
                </span>
                <label className="text-base sm:text-lg font-bold text-white">
                  Escolha as Coberturas da Pipoca Doce:
                </label>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {[
                'Fini Dentadura',
                'Fini Banana',
                'Fini Beijinho',
                'Leite condensado',
                'Chocolate',
                'Chocolate branco',
                'Caramelo',
              ].map((item) => {
                const isChecked = doceItems.includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleDoce(item)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between select-none ${
                      isChecked
                        ? 'bg-amber-400 text-black border-amber-300 font-bold shadow-md'
                        : 'bg-[#221f1a] text-neutral-300 border-neutral-700/80 hover:border-amber-400/50'
                    }`}
                  >
                    <span className="text-xs">{item}</span>
                    <span className={`w-4 h-4 rounded-md flex items-center justify-center text-xs font-bold ${isChecked ? 'bg-black text-amber-300' : 'border border-neutral-600'}`}>
                      {isChecked ? '✓' : ''}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: CONDIMENTO / FINALIZAÇÃO */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-400 text-black text-xs font-black">
              4
            </span>
            <label className="text-base sm:text-lg font-bold text-white">
              Condimento / Finalização por cima (Opcional):
            </label>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            <button
              type="button"
              onClick={() => setSelectedCondiment('')}
              className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                selectedCondiment === ''
                  ? 'bg-neutral-700 text-white border-neutral-500'
                  : 'bg-[#221f1a] text-neutral-400 border-neutral-800'
              }`}
            >
              Sem condimento
            </button>
            {CONDIMENTS.map((cond) => {
              const isSelected = selectedCondiment === cond.name;
              return (
                <button
                  key={cond.id}
                  type="button"
                  onClick={() => setSelectedCondiment(cond.name)}
                  className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    isSelected
                      ? 'bg-yellow-400 text-black border-yellow-300 shadow-md'
                      : 'bg-[#221f1a] text-neutral-300 border-neutral-700/80 hover:border-yellow-400/50'
                  }`}
                >
                  <span>{cond.icon}</span>
                  <span>{cond.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 5: QUANTIDADE E RESUMO DO VALOR */}
        <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Quantity stepper */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-neutral-300">Quantidade:</span>
            <div className="flex items-center rounded-2xl bg-[#221f1a] border border-neutral-700 p-1">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-800 active:scale-95 transition-all"
                aria-label="Diminuir quantidade"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center font-black text-lg text-white tabular-nums">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-800 active:scale-95 transition-all"
                aria-label="Aumentar quantidade"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Real-time calculated price */}
          <div className="text-center sm:text-right">
            <span className="text-xs uppercase text-neutral-400 font-bold block">Valor Total do Pedido</span>
            <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-500 drop-shadow-[0_2px_15px_rgba(250,204,21,0.5)] tabular-nums">
              {formatCurrency(totalPrice)}
            </span>
          </div>
        </div>

        {/* Dynamic preview summary card */}
        <div className="mt-6 p-4 rounded-2xl bg-black/40 border border-yellow-500/20 text-xs sm:text-sm text-neutral-300 space-y-1">
          <div className="flex items-center gap-1.5 text-yellow-300 font-bold">
            <ShoppingBag className="w-4 h-4" />
            <span>Resumo da sua seleção:</span>
          </div>
          <p>
            <strong className="text-white">
              {quantity}x {selectedType === 'salgada' ? 'Pipoca Salgada na Manteiga' : 'Pipoca Doce Caramelizada'}
            </strong>{' '}
            ({currentSize.name})
          </p>
          <p className="text-neutral-400 text-xs">
            {selectedType === 'salgada'
              ? `Ingredientes: ${salgadaItems.length > 0 ? salgadaItems.join(', ') : 'Nenhum'}`
              : `Coberturas: ${doceItems.length > 0 ? doceItems.join(', ') : 'Nenhuma'}`}
            {selectedCondiment ? ` • Condimento: ${selectedCondiment}` : ''}
          </p>
        </div>

        {/* PRIMARY BIG BUTTON: FINALIZAR PEDIDO NO WHATSAPP */}
        <div className="mt-8">
          <button
            type="button"
            onClick={handleFinishWhatsApp}
            className="w-full btn-3d-yellow py-4 px-6 rounded-2xl text-black font-black text-base sm:text-lg flex items-center justify-center gap-3 cursor-pointer select-none transition-all shadow-[0_10px_30px_rgba(250,204,21,0.4)]"
          >
            <span className="text-2xl">🔥</span>
            <span className="tracking-wide">FINALIZAR PEDIDO NO WHATSAPP</span>
          </button>
          <p className="text-[11px] text-center text-neutral-400 mt-2">
            Ao clicar, abre o WhatsApp com a mensagem formatada para você só enviar e confirmar!
          </p>
        </div>

      </div>
    </section>
  );
}
