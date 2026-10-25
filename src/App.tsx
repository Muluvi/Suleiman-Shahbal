import React, { useState, useEffect } from 'react';
import { ReadingProgressBar } from './components/visuals/ReadingProgressBar.tsx';
import { DisclaimerBanner } from './components/DisclaimerBanner.tsx';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ExecutiveSummaryView } from './components/ExecutiveSummaryView.tsx';
import { PersuasionModule } from './components/PersuasionModule.tsx';
import { NarrativeModule } from './components/NarrativeModule.tsx';
import { ContentPlanModule } from './components/ContentPlanModule.tsx';
import { DataAnalyticsModule } from './components/DataAnalyticsModule.tsx';
import { RapidResponseModule } from './components/RapidResponseModule.tsx';
import { RivalsModule } from './components/RivalsModule.tsx';
import { VerificationModule } from './components/VerificationModule.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('overview');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        'overview',
        'persuasion',
        'narrative',
        'content',
        'wards',
        'rapid-response',
        'rivals',
        'verification',
      ];

      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 font-sans antialiased selection:bg-neutral-800 selection:text-white">
      {/* Sticky Top Reading Progress Bar (Visual System Section 2.4 & 7.2) */}
      <ReadingProgressBar />

      {/* Persistent Disclaimer Banner */}
      <DisclaimerBanner />

      {/* Top Navigation conforming to Top Bar Contract */}
      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content Area */}
      <main className="flex-1">
        <HeroSection onExploreSection={scrollToSection} />
        
        <ExecutiveSummaryView onNavigate={scrollToSection} />

        <PersuasionModule />

        <NarrativeModule />

        <ContentPlanModule />

        <DataAnalyticsModule />

        <RapidResponseModule />

        <RivalsModule />

        <VerificationModule />
      </main>

      {/* Professional Quiet Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
