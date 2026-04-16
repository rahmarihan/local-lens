import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Mic } from 'lucide-react';
import { motion } from 'framer-motion';
import { conversations, places } from '@/data/places';

const ChatListScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="px-5 pt-6 pb-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft size={18} />
        </button>
        <h1 className="text-lg font-extrabold">Messages</h1>
      </div>

      <div className="px-5 space-y-2 mt-2">
        {conversations.map((c) => (
          <div key={c.id} onClick={() => navigate(`/chat/${c.id}`)} className="flex items-center gap-3 p-3 rounded-xl bg-card shadow-card cursor-pointer active:scale-[0.98] transition-transform">
            <span className="text-3xl">{c.avatar}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold">{c.name}</h3>
                <span className="text-[10px] text-muted-foreground">{c.time}</span>
              </div>
              <p className="text-xs text-muted-foreground truncate">{c.lastMessage}</p>
              <span className="text-[10px] text-primary">📍 {c.placeContext}</span>
            </div>
            {c.unread > 0 && (
              <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">{c.unread}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const ChatDetailScreen = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [msgs, setMsgs] = useState([
    { id: '1', sender: 'them', text: 'Hey! Have you been to Café Riche?', time: '10:00 AM' },
    { id: '2', sender: 'me', text: 'Yes! The Turkish coffee is incredible', time: '10:02 AM' },
    { id: '3', sender: 'them', text: 'Thanks for the tip! 🙏', time: '10:03 AM' },
  ]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="px-5 pt-6 pb-3 border-b border-border flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
          <ArrowLeft size={18} />
        </button>
        <span className="text-2xl">👩🏽</span>
        <div>
          <h1 className="text-sm font-bold">Yasmin Ahmed</h1>
          <p className="text-[10px] text-muted-foreground">Online</p>
        </div>
      </div>

      {/* Place context */}
      <div className="mx-5 mt-3 p-2.5 rounded-xl bg-primary/5 border border-primary/10 flex items-center gap-2">
        <img src={places[1].image} className="w-10 h-10 rounded-lg object-cover" />
        <div>
          <p className="text-xs font-bold">Discussing: Café Riche</p>
          <p className="text-[10px] text-muted-foreground">Downtown Cairo</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
        {msgs.map((m) => (
          <motion.div key={m.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className={`flex ${m.sender === 'me' ? 'justify-end' : ''}`}>
            <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${m.sender === 'me' ? 'bg-primary text-primary-foreground rounded-br-sm' : 'bg-card shadow-card rounded-bl-sm'}`}>
              <p>{m.text}</p>
              <p className={`text-[10px] mt-1 ${m.sender === 'me' ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>{m.time}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="px-5 pb-6 flex gap-2">
        <div className="flex-1 flex items-center bg-muted rounded-xl px-4">
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." className="flex-1 py-3 bg-transparent text-sm focus:outline-none" />
          <Mic size={18} className="text-muted-foreground" />
        </div>
        <button className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatListScreen;
