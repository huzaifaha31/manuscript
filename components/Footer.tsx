import React from 'react';
import { Leaf, AlertTriangle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-manuscript-dark text-manuscript-paper py-12 mt-20 relative overflow-hidden">
      {/* Decorative background pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #F5E6CA 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-1 bg-manuscript-gold rounded-full"></div>
            <Leaf className="text-manuscript-gold" size={24} />
            <div className="w-12 h-1 bg-manuscript-gold rounded-full"></div>
          </div>
          
          <h2 className="font-display text-xl font-bold tracking-widest mb-4">
            MALAY MEDICAL MANUSCRIPT EXPLORATION
          </h2>
          
          <p className="font-serif italic text-manuscript-paper/70 max-w-2xl mb-8">
            "Preserving the healing wisdom of ancestors through digital documentation and modern accessibility."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-manuscript-paper/10 pt-8 mb-8">
            <div className="text-sm">
              <h3 className="font-sans font-bold uppercase tracking-widest text-manuscript-gold mb-2">Institution</h3>
              <p>Faculty of Quranic and Sunnah Studies (FPQS)</p>
              <p>Universiti Sains Islam Malaysia (USIM)</p>
            </div>
            <div className="text-sm">
              <h3 className="font-sans font-bold uppercase tracking-widest text-manuscript-gold mb-2">Sources</h3>
              <p>MSS 2999 (Kitab Tib)</p>
              <p>MSS 2199 (Traditional Malay Remedies)</p>
            </div>
            <div className="text-sm px-4">
              <h3 className="font-sans font-bold uppercase tracking-widest text-manuscript-gold mb-2 flex items-center justify-center gap-2">
                <AlertTriangle size={14} /> Disclaimer
              </h3>
              <p className="text-xs text-manuscript-paper/60 leading-relaxed italic">
                This website is intended solely for educational exploration and is not meant for medical practice. Consult qualified professionals for medical advice.
              </p>
            </div>
          </div>
          
          <div className="text-xs text-manuscript-paper/40 font-sans tracking-widest border-t border-manuscript-paper/10 w-full pt-6">
            © {new Date().getFullYear()} MALAY MEDICAL MANUSCRIPT DIGITIZATION TEAM. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;