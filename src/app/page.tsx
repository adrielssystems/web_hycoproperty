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
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // If at very top, highlight hero
        if (scrollY < 180) {
          setActiveSection('hero');
          ticking = false;
          return;
        }

        // If near bottom of document, highlight contact
        if (
          window.innerHeight + scrollY >=
          document.documentElement.scrollHeight - 90
        ) {
          setActiveSection('contact');
          ticking = false;
          return;
        }

        const navMidpoint = 220;
        let matched = 'hero';

        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= navMidpoint && rect.bottom >= navMidpoint) {
              matched = id;
              break;
            }
          }
        }

        setActiveSection(matched);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Check if URL has hash on initial load
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      const target = document.getElementById(hashId);
      if (target) {
        setTimeout(() => {
          const navOffset = 95;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          setActiveSection(hashId);
        }, 300);
      }
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreProperties = () => {
    setActiveSection('for-lease');
    const el = document.getElementById('for-lease');
    if (el) {
      const navOffset = 95;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
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

