
import React from 'react';
import { ViewState } from '../types';
import { BookOpen, Home, Info, Menu } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-manuscript-paper/80 backdrop-blur-md border-b border-manuscript-gold/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => onChangeView('HOME')}
          >
            <div className="bg-manuscript-brown text-manuscript-paper p-2 rounded-lg group-hover:bg-manuscript-gold transition-colors">
              <BookOpen size={24} />
            </div>
            <span className="font-display text-lg font-bold text-manuscript-dark tracking-tighter">
              MANUSCRIPT <span className="text-manuscript-gold">EXPLORATION</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => onChangeView('HOME')}
              className={`flex items-center gap-2 font-sans font-bold text-sm uppercase tracking-widest transition-colors ${currentView === 'HOME' ? 'text-manuscript-gold border-b-2 border-manuscript-gold' : 'text-manuscript-brown hover:text-manuscript-gold'}`}
            >
              <Home size={16} /> Home
            </button>
            <button 
              onClick={() => onChangeView('BROWSE')}
              className={`flex items-center gap-2 font-sans font-bold text-sm uppercase tracking-widest transition-colors ${currentView === 'BROWSE' ? 'text-manuscript-gold border-b-2 border-manuscript-gold' : 'text-manuscript-brown hover:text-manuscript-gold'}`}
            >
              <BookOpen size={16} /> Browse Archive
            </button>
            <button 
              onClick={() => onChangeView('ABOUT')}
              className={`flex items-center gap-2 font-sans font-bold text-sm uppercase tracking-widest transition-colors ${currentView === 'ABOUT' ? 'text-manuscript-gold border-b-2 border-manuscript-gold' : 'text-manuscript-brown hover:text-manuscript-gold'}`}
            >
              <Info size={16} /> About Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-manuscript-brown">
            <Menu size={24} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
