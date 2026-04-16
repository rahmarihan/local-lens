import { useState } from 'react';
import { Send, Mic, Sparkles, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { chatMessages } from '@/data/places';

const quickChips = ['Cheap café near me', 'Hidden gems tonight', 'Best local food'];

const AIChatScreen = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(chatMessages);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: String(Date.now()), sender: 'user', text: input, time: 'Now' }]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: String(Date.now() + 1), sender: 'bot', text: "That's a great question! Let me find the best options for you... 🔍", time: 'Now' }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="px-5 pt-6 pb-3 border-b border-border flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft size={18} />
        </button>
        <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
          <Sparkles size={18} className="text-secondary" />
        </div>
        <div>
          <h1 className="font-bold text-sm">AI Local Guide</h1>
          <p className="text-xs text-muted-foreground">Always ready to help</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'bot' && <span className="text-lg mr-2 mt-1">🤖</span>}
            <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
              msg.sender === 'user'
                ? 'bg-primary text-primary-foreground rounded-br-sm'
                : 'bg-card shadow-card rounded-bl-sm'
            }`}>
              <p>{msg.text}</p>
              <p className={`text-[10px] mt-1 ${msg.sender === 'user' ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>{msg.time}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick chips */}
      <div className="px-5 pb-2 flex gap-2 overflow-x-auto scrollbar-hide">
        {quickChips.map((chip) => (
          <button key={chip} onClick={() => setInput(chip)} className="flex-shrink-0 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            {chip}
          </button>
        ))}
      </div>

      <div className="px-5 pb-6 flex gap-2">
        <div className="flex-1 flex items-center bg-muted rounded-xl px-4">
          <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} placeholder="Ask anything..." className="flex-1 py-3 bg-transparent text-sm focus:outline-none" />
          <Mic size={18} className="text-muted-foreground" />
        </div>
        <button onClick={sendMessage} className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default AIChatScreen;
