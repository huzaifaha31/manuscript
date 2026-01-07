
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Bot, User, Loader2, Sparkles } from 'lucide-react';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: "Assalamualaikum. I am the Ancient Tabib. Ask me about traditional Malay remedies or the secrets of the manuscripts." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are an ancient Malay healer (Tabib) from the era of the Kitab Tib manuscripts. Your tone is wise, polite, and uses traditional Malay terminology for medicine (e.g., 'Akar', 'Daun', 'Rempah-ratus'). You explain that your wisdom comes from manuscripts like MSS 2999. IMPORTANT: Always include a short disclaimer that you are an AI assistant and users should consult a modern medical professional for serious conditions.",
          temperature: 0.7,
        },
      });

      const aiResponse = response.text || "Forgive me, my wisdom fails to recall this remedy at the moment.";
      setMessages(prev => [...prev, { role: 'assistant', text: aiResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', text: "My spirit is currently clouded. Please try asking again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-manuscript-brown hover:bg-manuscript-gold text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center gap-2 group border-2 border-manuscript-gold/20"
        >
          <Sparkles className="group-hover:rotate-12 transition-transform" />
          <span className="font-bold hidden sm:inline">Ask the Tabib</span>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="bg-manuscript-paper w-[90vw] sm:w-[400px] h-[500px] rounded-2xl shadow-2xl border-2 border-manuscript-gold flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-manuscript-dark p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot className="text-manuscript-gold" />
              <div>
                <h3 className="font-display text-sm font-bold">ANCIENT TABIB</h3>
                <p className="text-[10px] text-manuscript-paper/60 uppercase tracking-widest">Archive Guardian</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-manuscript-gold">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div 
            className="flex-1 overflow-y-auto p-4 space-y-4"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(93, 64, 55, 0.05) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-manuscript-brown text-white rounded-tr-none' 
                  : 'bg-white text-manuscript-dark border border-manuscript-gold/20 rounded-tl-none shadow-sm'
                }`}>
                  <p className="whitespace-pre-wrap">{m.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-manuscript-gold/20">
                  <Loader2 className="animate-spin text-manuscript-gold" size={16} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-manuscript-gold/20 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a remedy..."
              className="flex-1 bg-manuscript-paper/20 border border-manuscript-gold/30 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-manuscript-gold"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-manuscript-gold hover:bg-manuscript-brown text-white p-2 rounded-full transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AiAssistant;
