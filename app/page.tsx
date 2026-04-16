"use client";

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor?.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update URL without jumping
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <main className="relative">
      <section id="home">
        <Hero />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-8">
        <Skills />
      </section>

      {/* About Section */}
      <section id="about" className="py-6 px-4 md:px-8">
        <About />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="border-y border-white/5 bg-[var(--bg-elevated)]/80 py-20 px-4 md:px-8"
      >
        <Projects />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="border-t border-white/5 bg-[var(--bg-elevated)]/80 py-20 px-4 md:px-8"
      >
        <Contact />
      </section>
    </main>
  );
}