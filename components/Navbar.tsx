
import React, { useState } from 'react';
import { ViewState } from '../types.ts';
import { BookOpen, Home, Info, Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'HOME' as ViewState, label: 'Home', icon: Home },
    { id: 'BROWSE' as ViewState, label: 'Browse Archive', icon: BookOpen },
    { id: 'ABOUT' as ViewState, label: 'About Project', icon: Info },
  ];

  const handleNavClick = (view: ViewState) => {
    onChangeView(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] bg-manuscript-paper/90 backdrop-blur-md border-b border-manuscript-gold/30 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer group shrink-0"
              onClick={() => handleNavClick('HOME')}
            >
              <div className="bg-manuscript-dark p-2 rounded-lg group-hover:bg-manuscript-brown transition-colors">
                <BookOpen className="h-6 w-6 text-manuscript-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg md:text-xl text-manuscript-dark tracking-tighter leading-none">
                  Malay Medical
                </span>
                <span className="font-serif text-[10px] text-manuscript-gold font-bold uppercase tracking-[0.2em]">
                  Archive Exploration
                </span>
              </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = currentView === link.id;
                return (
                  <button 
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-4 py-2 rounded-full flex items-center gap-2 font-sans font-bold text-xs uppercase tracking-widest transition-all duration-200 ${
                      isActive 
                        ? 'bg-manuscript-brown text-white shadow-md' 
                        : 'text-manuscript-dark hover:bg-manuscript-gold/10'
                    }`}
                  >
                    <Icon size={14} />
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-manuscript-brown hover:bg-manuscript-gold/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[70] md:hidden">
          <div className="absolute inset-0 bg-manuscript-dark/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="absolute top-0 right-0 w-4/5 h-full bg-manuscript-paper shadow-2xl flex flex-col animate-fade-in-right p-6 border-l border-manuscript-gold/30">
            <div className="flex justify-end mb-8">
              <button 
                className="p-2 text-manuscript-brown hover:bg-manuscript-gold/20 rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = currentView === link.id;
                return (
                  <button 
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl font-sans font-bold text-sm uppercase tracking-widest transition-all ${
                      isActive 
                        ? 'bg-manuscript-gold text-white shadow-lg' 
                        : 'bg-white/50 text-manuscript-dark hover:bg-white'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={18} />
                      {link.label}
                    </span>
                    <ChevronRight size={16} />
                  </button>
                );
              })}
            </div>

            <div className="mt-auto pt-10 border-t border-manuscript-gold/20">
              <p className="font-serif italic text-xs text-manuscript-brown/60 text-center">
                Preserving ancient Malay wisdom through digital innovation.
              </p>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;
