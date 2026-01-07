
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import DetailModal from './components/DetailModal';
import AiAssistant from './components/AiAssistant';
import { Remedy, ViewState } from './types';
import { REMEDIES, BACKGROUND_PATTERN_URL, TEAM_MEMBERS } from './constants';
import { Search, Info, Leaf, Filter, Users, GraduationCap } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [selectedRemedy, setSelectedRemedy] = useState<Remedy | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(REMEDIES.map(r => r.category)))];

  const filteredRemedies = REMEDIES.filter(remedy => {
    const matchesSearch = remedy.diseaseName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          remedy.symptoms.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || remedy.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const getTeamMemberClass = (index: number) => {
    const baseClass = "bg-white rounded-xl shadow-lg overflow-hidden border-b-4 border-manuscript-gold hover:-translate-y-2 transition-transform duration-300";
    if (index === 0) return `${baseClass} lg:col-start-2`;
    if (index === 1) return `${baseClass} lg:col-start-1`;
    if (index === 4) return `${baseClass} md:col-span-2 md:w-1/2 md:mx-auto lg:w-full lg:col-span-1 lg:col-start-2 lg:mx-0`;
    return baseClass;
  };

  return (
    <div 
      className="min-h-screen bg-[#F5E6CA] text-manuscript-dark font-sans selection:bg-manuscript-gold selection:text-white"
      style={{
        backgroundImage: `url("${BACKGROUND_PATTERN_URL}")`,
        backgroundRepeat: 'repeat'
      }}
    >
      <Navbar currentView={currentView} onChangeView={setCurrentView} />

      <main className="pt-20">
        {currentView === 'HOME' && (
          <Hero onStart={() => setCurrentView('BROWSE')} />
        )}

        {currentView === 'BROWSE' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="font-display text-4xl font-bold text-manuscript-brown mb-4 uppercase tracking-wider">Browse The Archive</h2>
              <p className="text-lg font-serif italic text-manuscript-dark/70 max-w-2xl mx-auto">
                Discover remedies recorded in historical manuscripts like Kitab Tibb MSS2999.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center items-center">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-manuscript-brown/50" size={20} />
                <input 
                  type="text" 
                  placeholder="Search diseases or symptoms..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-full border-2 border-manuscript-gold/30 bg-white/50 focus:bg-white focus:outline-none focus:border-manuscript-gold transition-colors shadow-sm"
                />
              </div>
              
              <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto px-2 scrollbar-hide">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                      selectedCategory === cat 
                      ? 'bg-manuscript-brown text-white shadow-md' 
                      : 'bg-white/50 text-manuscript-brown hover:bg-manuscript-gold/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRemedies.map((remedy) => (
                <div 
                  key={remedy.id}
                  onClick={() => setSelectedRemedy(remedy)}
                  className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-manuscript-gold/20 flex flex-col h-full transform hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={remedy.imageUrl} 
                      alt={remedy.diseaseName} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-manuscript-brown uppercase tracking-wider">
                      {remedy.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow relative bg-[#FAFAFA]">
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-10 pointer-events-none" 
                         style={{
                           backgroundImage: 'radial-gradient(circle, #C5A059 1px, transparent 1px)', 
                           backgroundSize: '8px 8px'
                         }}>
                    </div>

                    <h3 className="font-display text-xl font-bold text-manuscript-dark mb-2 group-hover:text-manuscript-gold transition-colors">
                      {remedy.diseaseName}
                    </h3>
                    <p className="text-sm font-serif text-manuscript-brown/70 line-clamp-3 mb-4 flex-grow">
                      {remedy.symptoms}
                    </p>
                    
                    <div className="pt-4 border-t border-manuscript-gold/20 flex items-center justify-between text-xs text-manuscript-dark/50 font-bold uppercase tracking-widest">
                      <span>{remedy.ingredients.length} Ingredients</span>
                      <span className="flex items-center gap-1 group-hover:gap-2 transition-all text-manuscript-gold">
                        Read Manuscript <Leaf size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredRemedies.length === 0 && (
              <div className="text-center py-20 text-manuscript-brown/50">
                <Filter size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-xl font-serif">No remedies found matching your search.</p>
              </div>
            )}
          </div>
        )}

        {currentView === 'ABOUT' && (
          <div className="max-w-6xl mx-auto px-4 py-16 animate-fade-in-up">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-8 border-manuscript-gold relative overflow-hidden mb-12">
              <div className="absolute -right-20 -top-20 text-manuscript-gold/10 pointer-events-none">
                <Info size={300} />
              </div>

              <h2 className="font-display text-4xl font-bold text-manuscript-dark mb-6">About the Project</h2>
              
              <div className="space-y-6 text-lg font-serif text-manuscript-brown leading-relaxed">
                <p>
                  <strong className="text-manuscript-dark">Malay Medical Manuscript Exploration</strong> is a digital initiative of the <strong className="text-manuscript-dark">Malay Medical Manuscript Digitization Team, FPQS, USIM.</strong>
                </p>
                <div className="bg-manuscript-paper/20 p-6 rounded-lg border-l-4 border-manuscript-gold">
                  <h3 className="font-sans font-bold text-manuscript-dark mb-2 uppercase text-sm tracking-widest">Our Mission</h3>
                  <p>
                    To preserve and visualize the healing heritage of the Malay Archipelago. Data is sourced from primary manuscripts like <strong className="text-manuscript-dark">MSS2999 and MSS2199.</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-manuscript-dark inline-flex items-center gap-3">
                <Users className="text-manuscript-gold" size={32} />
                Research Team
              </h2>
              <div className="h-1 w-24 bg-manuscript-gold mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map((member, index) => (
                <div key={index} className={getTeamMemberClass(index)}>
                  <div className="p-8 text-center flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full border-4 border-manuscript-paper shadow-md overflow-hidden mb-6">
                       <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-manuscript-dark mb-1 leading-tight">{member.name}</h3>
                    <div className="inline-flex items-center gap-1 bg-manuscript-paper/50 px-3 py-1 rounded-full text-[10px] font-bold text-manuscript-brown uppercase tracking-widest mt-2">
                       {member.role.includes("Supervisor") && <GraduationCap size={14} />}
                       {member.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {selectedRemedy && (
        <DetailModal remedy={selectedRemedy} onClose={() => setSelectedRemedy(null)} />
      )}

      {/* AI Assistant Button & Chat */}
      <AiAssistant />

      <Footer />
    </div>
  );
};

export default App;
