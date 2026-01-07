import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Hero from './components/Hero.tsx';
import DetailModal from './components/DetailModal.tsx';
import AiAssistant from './components/AiAssistant.tsx';
import { Remedy, ViewState } from './types.ts';
import { REMEDIES, BACKGROUND_PATTERN_URL, TEAM_MEMBERS } from './constants.ts';
import { Search, Info, Leaf, Filter, Users, GraduationCap, ArrowUpDown, Copy, ExternalLink, AlertTriangle } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [selectedRemedy, setSelectedRemedy] = useState<Remedy | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'NAME' | 'INGREDIENTS'>('NAME');
  const [summaryRequest, setSummaryRequest] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(REMEDIES.map(r => r.category)))];

  const processedRemedies = useMemo(() => {
    let filtered = REMEDIES.filter(remedy => {
      const matchesSearch = remedy.diseaseName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            remedy.symptoms.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || remedy.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    return filtered.sort((a, b) => {
      if (sortBy === 'NAME') return a.diseaseName.localeCompare(b.diseaseName);
      if (sortBy === 'INGREDIENTS') return b.ingredients.length - a.ingredients.length;
      return 0;
    });
  }, [searchQuery, selectedCategory, sortBy]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleSummarizeRemedy = (remedy: Remedy) => {
    const prompt = `Please summarize the traditional remedy for "${remedy.diseaseName}". 
    Focus on these key points from the manuscript:
    - Symptoms: ${remedy.symptoms}
    - Key Ingredients: ${remedy.ingredients.join(', ')}
    - Preparation: ${remedy.preparationMethod}
    - Method of Use: ${remedy.methodOfUse}
    - Spiritual Elements: ${remedy.spiritualElements || 'None recorded'}.
    
    Give me a wise, concise summary of this healing art.`;
    
    setSummaryRequest(prompt);
  };

  const copyIngredients = (e: React.MouseEvent, ingredients: string[]) => {
    e.stopPropagation();
    navigator.clipboard.writeText(ingredients.join(', '));
    alert('Ingredients copied to clipboard!');
  };

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
            {/* Header section */}
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="font-display text-4xl font-bold text-manuscript-brown mb-4 uppercase tracking-wider">Browse The Archive</h2>
              <p className="text-lg font-serif italic text-manuscript-dark/70 max-w-2xl mx-auto">
                Discover remedies recorded in historical manuscripts like Kitab Tibb MSS2999 and MSS2199.
              </p>
            </div>

            {/* Controls section */}
            <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-manuscript-gold/20 shadow-sm mb-10">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="relative w-full lg:max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-manuscript-brown/40" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search by disease or symptom..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-manuscript-gold/20 bg-white/80 focus:bg-white focus:outline-none focus:border-manuscript-gold transition-all shadow-inner"
                  />
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center lg:flex-1">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all border ${
                        selectedCategory === cat 
                        ? 'bg-manuscript-brown border-manuscript-brown text-white shadow-md transform scale-105' 
                        : 'bg-white border-manuscript-gold/20 text-manuscript-brown hover:bg-manuscript-gold/10'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 border-l border-manuscript-gold/20 pl-6 h-10 hidden lg:flex">
                  <span className="text-[10px] font-bold text-manuscript-brown/60 uppercase tracking-widest">Sort:</span>
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-transparent text-sm font-bold text-manuscript-dark focus:outline-none cursor-pointer"
                  >
                    <option value="NAME">A-Z</option>
                    <option value="INGREDIENTS">Complexity</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processedRemedies.map((remedy) => (
                <div 
                  key={remedy.id}
                  onClick={() => setSelectedRemedy(remedy)}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden border border-manuscript-gold/20 flex flex-col h-full transform hover:-translate-y-2"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={remedy.imageUrl} 
                      alt={remedy.diseaseName} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-manuscript-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-manuscript-brown uppercase tracking-[0.2em] shadow-sm">
                      {remedy.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow relative bg-[#FAFAFA]">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-display text-xl font-bold text-manuscript-dark group-hover:text-manuscript-gold transition-colors leading-tight">
                        {remedy.diseaseName}
                      </h3>
                    </div>
                    <p className="text-sm font-serif text-manuscript-brown/70 line-clamp-2 mb-4 italic">
                      "{remedy.symptoms}"
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-manuscript-gold/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[10px] text-manuscript-dark/40 font-bold uppercase tracking-widest">
                        <Leaf size={14} className="text-manuscript-gold" />
                        {remedy.ingredients.length} Items
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={(e) => copyIngredients(e, remedy.ingredients)}
                          className="p-2 bg-manuscript-paper/40 hover:bg-manuscript-gold/20 text-manuscript-brown rounded-lg transition-colors"
                          title="Copy Ingredients"
                        >
                          <Copy size={14} />
                        </button>
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-manuscript-brown text-white rounded-lg text-[10px] font-bold uppercase tracking-widest group-hover:bg-manuscript-gold transition-all shadow-sm">
                          Read <ExternalLink size={10} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {processedRemedies.length === 0 && (
              <div className="text-center py-32 bg-white/30 rounded-3xl border-2 border-dashed border-manuscript-gold/30">
                <Filter size={64} className="mx-auto mb-6 text-manuscript-gold/40" />
                <h3 className="text-2xl font-display text-manuscript-brown mb-2 uppercase">No Wisdom Found</h3>
                <p className="text-lg font-serif italic text-manuscript-dark/60 max-w-md mx-auto">
                  Even the ancient tabibs could not find this query. Try a different herb or ailment.
                </p>
                <button 
                  onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
                  className="mt-6 text-manuscript-gold font-bold uppercase text-xs tracking-[0.3em] hover:underline"
                >
                  Clear all filters
                </button>
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
                  <strong className="text-manuscript-dark">Malay Medical Manuscript Exploration</strong> is a digital initiative designed to bring the ancient wisdom of the Malay Archipelago to the modern world. This website is an initiative of the <strong className="text-manuscript-dark">Malay Medical Manuscript Digitization Team, Faculty of Quranic and Sunnah Studies, USIM.</strong>
                </p>
                <div className="bg-manuscript-paper/50 p-6 rounded-lg border-l-4 border-manuscript-gold">
                  <h3 className="font-sans font-bold text-manuscript-dark mb-2 uppercase text-sm tracking-widest">Project Mission</h3>
                  <p>
                    For centuries, traditional healers have documented their knowledge in manuscripts written in Jawi script. These texts contain comprehensive guides on treating ailments using locally available herbs, roots, and spiritual practices.
                  </p>
                  <p className="mt-4">
                    Our mission is to digitize, categorize, and visualize this data, making it accessible for researchers, historians, and anyone interested in the rich heritage of Malay traditional medicine. This effort is driven by the commitment of the Faculty of Quranic and Sunnah Studies, USIM, to preserve this invaluable scientific heritage.
                  </p>
                  <p>
                    Data presented here is sourced from various historical manuscripts including <strong className="text-manuscript-dark">Kitab Tibb MSS2999 and MSS2199.</strong>
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600 shadow-sm">
                  <h3 className="font-sans font-bold text-red-800 mb-3 uppercase text-sm tracking-widest flex items-center gap-2">
                    <AlertTriangle size={18} /> Important Disclaimer
                  </h3>
                  <p className="text-red-900 font-sans text-base">
                    This website is intended solely for the educational exploration of traditional knowledge contained in Malay medical manuscripts and is not meant to be practiced for the treatment of illness. Users are advised to consult qualified medical professionals for valid medical advice.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-manuscript-dark inline-flex items-center gap-3 uppercase tracking-widest">
                <Users className="text-manuscript-gold" size={32} />
                Research Team
              </h2>
              <div className="h-1 w-24 bg-manuscript-gold mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map((member, index) => (
                <div key={index} className={getTeamMemberClass(index)}>
                  <div className="p-8 text-center flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full border-4 border-manuscript-paper shadow-md overflow-hidden mb-6 group relative">
                       <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                       <div className="absolute inset-0 bg-manuscript-gold/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
        <DetailModal 
          remedy={selectedRemedy} 
          onClose={() => setSelectedRemedy(null)} 
          onSummarize={() => handleSummarizeRemedy(selectedRemedy)}
        />
      )}

      <AiAssistant 
        summaryRequest={summaryRequest} 
        onClearRequest={() => setSummaryRequest(null)} 
      />

      <Footer />
    </div>
  );
};

export default App;