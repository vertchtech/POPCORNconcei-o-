/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyPopcornSection from './components/WhyPopcornSection';
import MenuSection from './components/MenuSection';
import SizesAndPricesSection from './components/SizesAndPricesSection';
import OrderBuilderSection from './components/OrderBuilderSection';
import LocationSection from './components/LocationSection';
import InstagramSection from './components/InstagramSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import FloatingMobileBar from './components/FloatingMobileBar';
import PopcornBackgroundParticles from './components/PopcornBackgroundParticles';
import { PopcornType } from './types/popcorn';

export default function App() {
  const [builderType, setBuilderType] = useState<PopcornType>('salgada');
  const [builderSizeId, setBuilderSizeId] = useState<string>('saquinho-xg');
  const [builderCondiment, setBuilderCondiment] = useState<string>('');

  const scrollToBuilder = () => {
    const el = document.getElementById('monte-sua-popcorn');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToLocation = () => {
    const el = document.getElementById('onde-estamos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectFlavorFromMenu = (flavor: PopcornType) => {
    setBuilderType(flavor);
    scrollToBuilder();
  };

  const handleSelectCondimentFromMenu = (condimentId: string) => {
    setBuilderCondiment(condimentId);
    scrollToBuilder();
  };

  const handleSelectSizeFromPrices = (sizeId: string) => {
    setBuilderSizeId(sizeId);
    scrollToBuilder();
  };

  return (
    <div className="min-h-screen bg-[#0c0a08] text-[#fef9c3] relative selection:bg-amber-400 selection:text-black font-sans">
      {/* Dynamic Background Lighting & Floating Popcorn Particles */}
      <PopcornBackgroundParticles />

      {/* Top Navbar */}
      <Navbar onOrderClick={scrollToBuilder} />

      {/* Main Single Page Continuous Vertical Flow */}
      <main className="relative z-10 space-y-4">
        {/* 1. Hero / Abertura */}
        <HeroSection
          onOrderClick={scrollToBuilder}
          onLocationClick={scrollToLocation}
        />

        {/* 2. Por que Popcorn? */}
        <WhyPopcornSection />

        {/* 3. Nosso Cardápio (3D Packaging) */}
        <MenuSection
          onSelectFlavor={handleSelectFlavorFromMenu}
          onSelectCondiment={handleSelectCondimentFromMenu}
          selectedCondiment={builderCondiment}
        />

        {/* 4. Tamanhos e Preços (Highlighting XG R$ 20,00) */}
        <SizesAndPricesSection
          onSelectSize={handleSelectSizeFromPrices}
          selectedSizeId={builderSizeId}
        />

        {/* 5. Monte sua Popcorn (Configurador Interativo WhatsApp) */}
        <OrderBuilderSection
          key={`${builderType}-${builderSizeId}-${builderCondiment}`}
          initialType={builderType}
          initialSizeId={builderSizeId}
          initialCondiment={builderCondiment}
        />

        {/* 6. Onde Estamos (Conceição de Jacareí) */}
        <LocationSection />

        {/* 7. Siga a Popcorn no Instagram */}
        <InstagramSection />

        {/* 8. Chamada Final de Alto Impacto */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Bar for Mobile Only */}
      <FloatingMobileBar onOrderClick={scrollToBuilder} />
    </div>
  );
}
