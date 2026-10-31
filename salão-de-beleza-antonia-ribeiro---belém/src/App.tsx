import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { AboutSpecialist } from './components/AboutSpecialist';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FirstVisitVoucher } from './components/FirstVisitVoucher';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { WhatsAppSettingsModal } from './components/WhatsAppSettingsModal';
import { SALON_DATA } from './data/salonData';
import { Sparkles, Shield, Coffee, Wifi, Car, Award } from 'lucide-react';

export default function App() {
  const [whatsAppNumber, setWhatsAppNumber] = useState<string>(() => {
    const stored = localStorage.getItem('studio_antonia_whatsapp');
    if (!stored || stored === '5591981234567') {
      return SALON_DATA.defaultWhatsApp;
    }
    return stored;
  });

  const [bookingModalState, setBookingModalState] = useState<{
    isOpen: boolean;
    service?: string;
  }>({
    isOpen: false,
    service: undefined,
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleOpenBooking = (serviceName?: string) => {
    setBookingModalState({
      isOpen: true,
      service: serviceName,
    });
  };

  const handleCloseBooking = () => {
    setBookingModalState({
      isOpen: false,
      service: undefined,
    });
  };

  const handleSaveWhatsAppNumber = (newNum: string) => {
    setWhatsAppNumber(newNum);
    localStorage.setItem('studio_antonia_whatsapp', newNum);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 selection:bg-[#E8D7C3] selection:text-stone-900 flex flex-col font-sans">
      {/* 1. Sticky Translucent Luxury Navbar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenSettings={() => setIsSettingsOpen(true)}
        whatsAppNumber={whatsAppNumber}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 3. Hero Section with Express WhatsApp Booking Form */}
        <Hero
          onOpenBooking={handleOpenBooking}
          whatsAppNumber={whatsAppNumber}
        />

        {/* 4. Luxury Trust & Amenities Bar */}
        <section className="border-y border-stone-200/80 bg-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Shield className="w-5 h-5 text-[#A37D50] mb-1.5" />
                <span className="text-xs font-bold text-stone-900">Teste de Mecha</span>
                <span className="text-[10px] text-stone-500">100% de segurança</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-5 h-5 text-[#A37D50] mb-1.5" />
                <span className="text-xs font-bold text-stone-900">Marcas Premium</span>
                <span className="text-[10px] text-stone-500">Kérastase & L'Oréal</span>
              </div>
              <div className="flex flex-col items-center">
                <Coffee className="w-5 h-5 text-[#A37D50] mb-1.5" />
                <span className="text-xs font-bold text-stone-900">Coffee Bar</span>
                <span className="text-[10px] text-stone-500">Cappuccino cortesia</span>
              </div>
              <div className="flex flex-col items-center">
                <Wifi className="w-5 h-5 text-[#A37D50] mb-1.5" />
                <span className="text-xs font-bold text-stone-900">Wi-Fi Rápido</span>
                <span className="text-[10px] text-stone-500">Trabalhe ou relaxe</span>
              </div>
              <div className="flex flex-col items-center">
                <Car className="w-5 h-5 text-[#A37D50] mb-1.5" />
                <span className="text-xs font-bold text-stone-900">Estacionamento</span>
                <span className="text-[10px] text-stone-500">Tv. Enéas Pinheiro</span>
              </div>
              <div className="flex flex-col items-center">
                <Sparkles className="w-5 h-5 text-[#A37D50] mb-1.5" />
                <span className="text-xs font-bold text-stone-900">Nota 4.9 ★</span>
                <span className="text-[10px] text-stone-500">Google Maps</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Interactive Services Menu with Categorization & Direct WhatsApp */}
        <ServicesSection
          onOpenBooking={handleOpenBooking}
          whatsAppNumber={whatsAppNumber}
        />

        {/* 6. Interactive Before & After Slider & Visual Transformation Gallery */}
        <BeforeAfterSlider
          onOpenBooking={handleOpenBooking}
          whatsAppNumber={whatsAppNumber}
        />

        {/* 7. About Antonia Ribeiro & Salon Philosophy */}
        <AboutSpecialist
          onOpenBooking={() => handleOpenBooking()}
          whatsAppNumber={whatsAppNumber}
        />

        {/* 8. Exclusive Welcome Voucher & Bonus Incentive */}
        <FirstVisitVoucher
          onOpenBooking={() => handleOpenBooking('Voucher de Primeira Visita')}
          whatsAppNumber={whatsAppNumber}
        />

        {/* 9. Google Reviews & Social Proof */}
        <GoogleReviewsSection
          onOpenBooking={() => handleOpenBooking()}
          whatsAppNumber={whatsAppNumber}
        />

        {/* 10. Interactive Location Map & Directions (Tv. Dr. Enéas Pinheiro 2672 - Marco) */}
        <LocationSection whatsAppNumber={whatsAppNumber} />

        {/* 11. FAQ Accordion */}
        <FaqSection whatsAppNumber={whatsAppNumber} />
      </main>

      {/* 12. Refined Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        whatsAppNumber={whatsAppNumber}
      />

      {/* 13. High-Converting Floating WhatsApp Hub */}
      <FloatingWhatsApp
        whatsAppNumber={whatsAppNumber}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* 14. Quick Booking Modal */}
      <BookingModal
        isOpen={bookingModalState.isOpen}
        onClose={handleCloseBooking}
        initialService={bookingModalState.service}
        whatsAppNumber={whatsAppNumber}
      />

      {/* 15. WhatsApp Phone Setting Modal */}
      <WhatsAppSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        currentNumber={whatsAppNumber}
        onSaveNumber={handleSaveWhatsAppNumber}
      />
    </div>
  );
}
