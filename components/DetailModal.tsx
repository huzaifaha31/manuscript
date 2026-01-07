
import React, { useEffect } from 'react';
import { Remedy } from '../types';
import { X, Leaf, Sparkles, Book, Droplets, Activity } from 'lucide-react';

interface DetailModalProps {
  remedy: Remedy;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ remedy, onClose }) => {
  // Prevent scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-manuscript-dark/80 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-manuscript-paper w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-manuscript-gold/30 animate-fade-in-up">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-manuscript-dark/50 hover:bg-manuscript-dark text-white p-2 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        {/* Image Sidebar */}
        <div className="w-full md:w-2/5 h-64 md:h-auto relative">
          <img 
            src={remedy.imageUrl} 
            alt={remedy.diseaseName} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-manuscript-dark/80 via-transparent to-transparent md:bg-gradient-to-r"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block bg-manuscript-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              {remedy.category}
            </span>
            <h2 className="text-white font-display text-2xl font-bold leading-tight">
              {remedy.diseaseName}
            </h2>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-white">
          <div className="space-y-8">
            
            {/* Symptoms */}
            <section>
              <h3 className="flex items-center gap-2 text-manuscript-gold font-sans font-bold uppercase text-xs tracking-[0.2em] mb-3">
                <Activity size={16} /> Symptoms Observed
              </h3>
              <p className="font-serif text-manuscript-brown text-lg italic leading-relaxed">
                "{remedy.symptoms}"
              </p>
            </section>

            {/* Ingredients */}
            <section>
              <h3 className="flex items-center gap-2 text-manuscript-gold font-sans font-bold uppercase text-xs tracking-[0.2em] mb-4">
                <Leaf size={16} /> Key Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                {remedy.ingredients.map((item, idx) => (
                  <span key={idx} className="bg-manuscript-paper/40 text-manuscript-dark px-4 py-2 rounded-lg font-sans font-bold text-sm border border-manuscript-gold/10">
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Preparation */}
              <section>
                <h3 className="flex items-center gap-2 text-manuscript-gold font-sans font-bold uppercase text-xs tracking-[0.2em] mb-3">
                  <Droplets size={16} /> Preparation
                </h3>
                <p className="text-sm font-sans text-manuscript-brown leading-relaxed">
                  {remedy.preparationMethod}
                </p>
              </section>

              {/* Method of Use */}
              <section>
                <h3 className="flex items-center gap-2 text-manuscript-gold font-sans font-bold uppercase text-xs tracking-[0.2em] mb-3">
                  <Sparkles size={16} /> Method of Use
                </h3>
                <p className="text-sm font-sans text-manuscript-brown leading-relaxed">
                  {remedy.methodOfUse}
                </p>
              </section>
            </div>

            {/* Spiritual & Source */}
            <div className="border-t border-manuscript-gold/10 pt-8 flex flex-col gap-6">
              {remedy.spiritualElements && (
                <section className="bg-manuscript-paper/20 p-4 rounded-xl border-l-4 border-manuscript-gold">
                  <h3 className="text-manuscript-gold font-sans font-bold uppercase text-[10px] tracking-widest mb-2 flex items-center gap-2">
                    <Sparkles size={12} /> Spiritual Element
                  </h3>
                  <p className="font-serif italic text-manuscript-dark text-sm">
                    {remedy.spiritualElements}
                  </p>
                </section>
              )}
              
              <section className="flex items-center justify-between opacity-50">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                  <Book size={14} /> Source: {remedy.sourceManuscript || 'Kitab Tibb Archive'}
                </div>
              </section>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
