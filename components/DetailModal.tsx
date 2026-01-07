import React, { useEffect } from 'react';
import { Remedy } from '../types.ts';
import { X, Leaf, Sparkles, Book, Droplets, Activity, Clipboard } from 'lucide-react';

interface DetailModalProps {
  remedy: Remedy;
  onClose: () => void;
  onSummarize: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ remedy, onClose, onSummarize }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in print:relative print:p-0">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-manuscript-dark/90 backdrop-blur-md print:hidden"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-manuscript-paper w-full max-w-5xl max-h-[92vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-manuscript-gold/40 animate-fade-in-up print:shadow-none print:border-none print:max-h-none print:block">
        
        {/* Navigation Actions (Top Right) */}
        <div className="absolute top-4 right-4 z-20 flex gap-2 print:hidden">
          <button 
            onClick={onClose}
            className="bg-manuscript-dark text-white p-2.5 rounded-full transition-all shadow-lg hover:rotate-90"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Image Sidebar / Top */}
        <div className="w-full md:w-[42%] h-72 md:h-auto relative shrink-0 print:hidden">
          <img 
            src={remedy.imageUrl} 
            alt={remedy.diseaseName} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-manuscript-dark/90 via-manuscript-dark/20 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <span className="inline-block bg-manuscript-gold text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-4 shadow-lg">
              {remedy.category}
            </span>
            <h2 className="text-white font-display text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg">
              {remedy.diseaseName}
            </h2>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-white/95 relative print:overflow-visible print:bg-white">
          {/* Subtle Manuscript Texture Overlays */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/handmade-paper.png')` }}></div>
          
          <div className="p-8 md:p-14 space-y-12 relative z-10">
            
            {/* Header for Print only */}
            <div className="hidden print:block mb-8 border-b-2 border-manuscript-gold pb-4">
              <h1 className="font-display text-3xl font-bold text-manuscript-dark">{remedy.diseaseName}</h1>
              <p className="text-xs font-sans uppercase tracking-widest text-manuscript-gold">{remedy.category} Archive</p>
            </div>

            {/* Symptoms */}
            <section className="animate-fade-in [animation-delay:200ms]">
              <h3 className="flex items-center gap-2 text-manuscript-gold font-sans font-black uppercase text-[10px] tracking-[0.3em] mb-4">
                <Activity size={16} /> Observed Symptoms
              </h3>
              <p className="font-serif text-manuscript-brown text-2xl italic leading-relaxed border-l-4 border-manuscript-gold/20 pl-6">
                "{remedy.symptoms}"
              </p>
            </section>

            {/* Ingredients */}
            <section className="animate-fade-in [animation-delay:400ms]">
              <div className="flex justify-between items-center mb-5">
                <h3 className="flex items-center gap-2 text-manuscript-gold font-sans font-black uppercase text-[10px] tracking-[0.3em]">
                  <Leaf size={16} /> Required Ingredients
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {remedy.ingredients.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-manuscript-paper/30 px-5 py-3 rounded-xl border border-manuscript-gold/10 group hover:bg-manuscript-gold/10 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-manuscript-gold shrink-0"></div>
                    <span className="font-sans font-bold text-manuscript-dark text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-4 animate-fade-in [animation-delay:600ms]">
              {/* Preparation */}
              <section className="bg-manuscript-paper/10 p-6 rounded-2xl border-t-4 border-manuscript-gold/30">
                <h3 className="flex items-center gap-2 text-manuscript-brown font-sans font-black uppercase text-[10px] tracking-[0.3em] mb-4">
                  <Droplets size={16} className="text-manuscript-gold" /> Preparation
                </h3>
                <p className="text-sm font-sans text-manuscript-brown leading-relaxed leading-7">
                  {remedy.preparationMethod}
                </p>
              </section>

              {/* Method of Use */}
              <section className="bg-manuscript-gold/5 p-6 rounded-2xl border-t-4 border-manuscript-gold/30">
                <h3 className="flex items-center gap-2 text-manuscript-brown font-sans font-black uppercase text-[10px] tracking-[0.3em] mb-4">
                  <Sparkles size={16} className="text-manuscript-gold" /> Application
                </h3>
                <p className="text-sm font-sans text-manuscript-brown leading-relaxed leading-7">
                  {remedy.methodOfUse}
                </p>
              </section>
            </div>

            {/* Spiritual & Source */}
            <div className="border-t border-manuscript-gold/20 pt-10 flex flex-col gap-8 animate-fade-in [animation-delay:800ms]">
              {remedy.spiritualElements && (
                <section className="bg-manuscript-dark text-white p-7 rounded-2xl shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10"><Sparkles size={80} /></div>
                  <h3 className="text-manuscript-gold font-sans font-black uppercase text-[10px] tracking-[0.4em] mb-3 flex items-center gap-2">
                    Spiritual Element
                  </h3>
                  <p className="font-serif italic text-manuscript-paper text-lg">
                    "{remedy.spiritualElements}"
                  </p>
                </section>
              )}
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 print:hidden">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-manuscript-dark/50">
                  <Book size={18} className="text-manuscript-gold" /> 
                  Folio: {remedy.sourceManuscript || 'MSS 2999 Archive'}
                </div>
                
                <button 
                  onClick={onSummarize}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-manuscript-brown hover:bg-manuscript-gold text-white px-8 py-4 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all shadow-xl hover:-translate-y-1 active:scale-95"
                >
                  <Sparkles size={18} /> Summarize with AI
                </button>
              </div>
            </div>

            {/* Footer disclaimer for print */}
            <div className="hidden print:block pt-10 text-[10px] font-sans text-center text-manuscript-brown/60 italic border-t border-manuscript-gold/20">
              This website is intended solely for the educational exploration of traditional knowledge contained in Malay medical manuscripts and is not meant to be practiced for the treatment of illness. Users are advised to consult qualified medical professionals for valid medical advice.
            </div>

          </div>
        </div>
      </div>
      
      <style>{`
        @media print {
          body * { visibility: hidden; }
          .print-content, .print-content * { visibility: visible; }
          .fixed.inset-0 { position: static; display: block; overflow: visible; background: white; }
          .max-w-5xl { max-width: 100%; border: none !important; }
        }
      `}</style>
    </div>
  );
};

export default DetailModal;