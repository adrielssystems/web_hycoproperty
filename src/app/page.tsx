'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { ArchitecturalHero } from '@/components/ArchitecturalHero';
import { ForLeaseSection } from '@/components/ForLeaseSection';
import { ServicesSection } from '@/components/ServicesSection';
import { CampusShowcaseSection } from '@/components/CampusShowcaseSection';
import { AboutTestimonialsSection } from '@/components/AboutTestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { PropertyDetailModal } from '@/components/PropertyDetailModal';
import { BookingModal } from '@/components/BookingModal';
import { OFFICIAL_LISTINGS, PropertyListing } from '@/lib/portfolioData';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [listings, setListings] = useState<PropertyListing[]>(OFFICIAL_LISTINGS);
  const [selectedProperty, setSelectedProperty] = useState<PropertyListing | null>(null);
  const [bookingOpen, setBookingOpen] = useState<boolean>(false);
  const [bookingTopic, setBookingTopic] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch('/api/properties')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.listings) && data.listings.length > 0) {
          setListings(data.listings);
        }
      })
      .catch(() => {
        // Keep official static listings fallback
      });
  }, []);

  useEffect(() => {
    const sectionIds = ['hero', 'for-lease', 'services', 'architecture', 'about', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 240;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreProperties = () => {
    setActiveSection('for-lease');
    const el = document.getElementById('for-lease');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectPropertyById = (propertyId: string) => {
    const found = listings.find((p) => p.id === propertyId);
    if (found) {
      setSelectedProperty(found);
    } else {
      handleExploreProperties();
    }
  };

  const handleOpenBooking = (topic?: string) => {
    setBookingTopic(topic);
    setBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#070D18] text-slate-100 relative">
      <Navbar
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        onOpenBooking={handleOpenBooking}
      />

      <ArchitecturalHero
        onExploreProperties={handleExploreProperties}
        onSelectPropertyId={handleSelectPropertyById}
        onOpenBooking={handleOpenBooking}
      />

      <ForLeaseSection
        listings={listings}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        onOpenBooking={handleOpenBooking}
      />

      <ServicesSection onOpenBooking={handleOpenBooking} />

      <CampusShowcaseSection onOpenBooking={handleOpenBooking} />

      <AboutTestimonialsSection onOpenBooking={handleOpenBooking} />

      <ContactSection />

      <Footer onSelectSection={setActiveSection} />

      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onBookViewing={(title) => handleOpenBooking(title)}
      />

      <BookingModal
        isOpen={bookingOpen}
        initialTopic={bookingTopic}
        onClose={() => setBookingOpen(false)}
      />
    </main>
  );
}

