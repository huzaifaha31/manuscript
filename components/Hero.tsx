
import React from 'react';
import { HERO_IMAGE_URL } from '../constants';
import { ArrowRight, ScrollText } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with zoom effect */}
      <div 
        className="absolute inset-0 scale-105 animate-pulse-slow"
        style={{
          backgroundImage: `linear-gradient(rgba(62, 39, 35, 0.7), rgba(62, 39, 35, 0.5)), url("${HERO_IMAGE_URL}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'zoom-fade 20s infinite alternate'
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center animate-fade-in-up">
        <div className="inline-flex items-center gap-2 bg-manuscript-gold/20 backdrop-blur-sm border border-manuscript-gold/30 px-4 py-2 rounded-full mb-8">
          <ScrollText className="text-manuscript-gold" size={18} />
          <span className="text-manuscript-paper text-xs font-bold uppercase tracking-[0.3em]">Ancient Wisdom Reborn</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold text-manuscript-paper mb-6 leading-tight drop-shadow-2xl">
          Discover Traditional <br />
          <span className="text-manuscript-gold">Malay Medicine</span>
        </h1>

        <p className="font-serif text-xl md:text-2xl text-manuscript-paper/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Explore a digital archive of Malay Medical Manuscripts. Discover centuries-old remedies, herbal ingredients, and spiritual practices used to treat ailments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onStart}
            className="group bg-manuscript-gold hover:bg-white text-manuscript-dark px-10 py-4 rounded-full font-sans font-bold text-lg transition-all flex items-center gap-2 shadow-xl hover:shadow-manuscript-gold/20 transform hover:-translate-y-1"
          >
            Start Exploring 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="hidden sm:block w-12 h-[1px] bg-manuscript-paper/30"></div>
          <span className="text-manuscript-paper/50 font-serif italic text-sm">30+ Documented Remedies</span>
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-manuscript-paper to-transparent"></div>

      <style>{`
        @keyframes zoom-fade {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
