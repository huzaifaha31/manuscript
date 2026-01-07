
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Bot, User, Loader2, Sparkles, MinusSquare, Maximize2 } from 'lucide-react';

interface AiAssistantProps {
  summaryRequest?: string | null;
  onClearRequest?: () => void;
}

const AiAssistant: React.FC<AiAssistantProps> = ({ summaryRequest, onClearRequest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: "Welcome. I am the Ancient Tabib, guardian of these sacred manuscripts. How may I assist your exploration of traditional healing wisdom today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "Tell me about Kitab Tibb MSS 2999.",
    "What are the benefits of Red Ginger?",
    "Explain spiritual elements in Malay medicine."
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (summaryRequest) {
      setIsOpen(true);
      setIsMinimized(false);
      handleSummarizeAction(summaryRequest);
      if (onClearRequest) onClearRequest();
    }
  }, [summaryRequest]);

  const handleSummarizeAction = async (prompt: string) => {
    setMessages(prev => [...prev, { role: 'user', text: "Please provide a wise summary of this remedy in English." }]);
    await generateAiResponse(prompt);
  };

  const generateAiResponse = async (userPrompt: string) => {
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userPrompt,
        config: {
          systemInstruction: "You are an ancient Malay healer (Tabib) from the era of the Kitab Tib manuscripts. You must interact EXCLUSIVELY in English. Your tone is wise, polite, and sage-like. You explain that your wisdom comes from manuscripts like MSS 2999. If you are summarizing a remedy, be concise and highlight the essence of the treatment in English. While you may use traditional Malay names for unique ingredients, always provide their English names or descriptions. IMPORTANT: Always include a short medical disclaimer in italics at the very end stating that this is for educational purposes and to consult a professional.",
          temperature: 0.7,
        },
      });

      const aiResponse = response.text || "Forgive me, the words of the ancestors are hard to reach today.";
      setMessages(prev => [...prev, { role: 'assistant', text: aiResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', text: "My spirit is currently clouded. Please try again when the ink dries." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent | string) => {
    if (typeof e !== 'string') e.preventDefault();
    const userMessage = typeof e === 'string' ? e : input.trim();
    
    if (!userMessage || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    await generateAiResponse(userMessage);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-[110] font-sans transition-all duration-300 ${isMinimized ? 'scale-90' : 'scale-100'}`}>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => {setIsOpen(true); setIsMinimized(false);}}
          className="bg-manuscript-brown hover:bg-manuscript-gold text-white px-6 py-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center gap-3 group border-2 border-manuscript-gold/20"
        >
          <div className="relative">
            <Bot className="group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-manuscript-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-manuscript-gold"></span>
            </span>
          </div>
          <span className="font-black text-xs uppercase tracking-[0.2em] hidden sm:inline">Ask the Tabib</span>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className={`bg-manuscript-paper rounded-2xl shadow-2xl border-2 border-manuscript-gold flex flex-col overflow-hidden animate-fade-in-up transition-all ${isMinimized ? 'h-16 w-[280px]' : 'w-[90vw] sm:w-[420px] h-[550px]'}`}>
          {/* Header */}
          <div className="bg-manuscript-dark p-4 flex justify-between items-center text-white shrink-0">
            <div className="flex items-center gap-3">
              <div className="bg-manuscript-gold/20 p-1.5 rounded-lg border border-manuscript-gold/30">
                <Bot className="text-manuscript-gold" size={18} />
              </div>
              <div>
                <h3 className="font-display text-xs font-bold tracking-widest">ANCIENT TABIB</h3>
                <p className="text-[9px] text-manuscript-paper/60 uppercase tracking-[0.2em]">Archival Guardian</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={() => setIsMinimized(!isMinimized)} 
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-manuscript-paper/60 hover:text-white"
              >
                {isMinimized ? <Maximize2 size={16} /> : <MinusSquare size={16} />}
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-1.5 hover:bg-red-500/20 rounded-lg transition-colors text-manuscript-paper/60 hover:text-red-400"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div 
                className="flex-1 overflow-y-auto p-5 space-y-6 bg-white/50"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(93, 64, 55, 0.03) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
              >
                {messages.map((m, i) => (
                  <div key={i} className={`flex items-start gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`shrink-0 p-2 rounded-lg border ${
                      m.role === 'user' ? 'bg-manuscript-brown border-manuscript-brown text-white' : 'bg-white border-manuscript-gold/30 text-manuscript-gold'
                    }`}>
                      {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                      m.role === 'user' 
                      ? 'bg-manuscript-brown text-white rounded-tr-none shadow-md' 
                      : 'bg-white text-manuscript-dark border border-manuscript-gold/20 rounded-tl-none shadow-sm'
                    }`}>
                      <p className="whitespace-pre-wrap font-serif italic text-base">{m.text}</p>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start items-center gap-3">
                    <div className="bg-white p-2 rounded-lg border border-manuscript-gold/30 text-manuscript-gold"><Bot size={14} /></div>
                    <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-manuscript-gold/20 shadow-sm flex items-center gap-2">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-manuscript-gold rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-manuscript-gold rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-1.5 h-1.5 bg-manuscript-gold rounded-full animate-bounce [animation-delay:0.4s]"></span>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Suggestions Chips */}
                {!isLoading && messages.length < 3 && (
                  <div className="pt-4 flex flex-wrap gap-2">
                    {suggestions.map((s, idx) => (
                      <button 
                        key={idx}
                        onClick={() => handleSendMessage(s)}
                        className="bg-manuscript-paper/40 hover:bg-manuscript-gold/20 border border-manuscript-gold/30 rounded-full px-4 py-1.5 text-[10px] font-bold text-manuscript-brown transition-all"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Form */}
              <form onSubmit={handleSendMessage} className="p-5 bg-white border-t border-manuscript-gold/20 flex gap-3 items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask the Tabib in English..."
                  className="flex-1 bg-manuscript-paper/10 border-2 border-manuscript-gold/20 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-manuscript-gold focus:ring-4 focus:ring-manuscript-gold/10 transition-all placeholder:italic"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-manuscript-gold hover:bg-manuscript-brown text-white p-3.5 rounded-xl transition-all disabled:opacity-50 shadow-lg hover:-translate-y-0.5"
                >
                  <Send size={20} />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AiAssistant;
