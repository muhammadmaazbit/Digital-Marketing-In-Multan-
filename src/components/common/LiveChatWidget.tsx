import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

export const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'agent'; text: string; time: string }>>([
    {
      sender: 'agent',
      text: 'Salam / Hello! Welcome to Maaz Baloch’s studio. How can we elevate your upcoming video edit, calligraphy piece, or brand identity?',
      time: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages(prev => [...prev, { sender: 'user', text: userText, time: now }]);
    setInputValue('');

    // Instant simulated automated concierge response based on keywords
    setTimeout(() => {
      let reply = 'Thank you for reaching out! Muhammad Maaz Yousaf Khan has received your note and will review your timeline requirements promptly.';
      const lower = userText.toLowerCase();

      if (lower.includes('rate') || lower.includes('price') || lower.includes('cost')) {
        reply = 'Commercial video packages start from $1,500 for high-impact social cutdowns to $7,500+ for 4K broadcast commercials with custom sound design. You can also use the "Start Project" onboarding form for exact quotes!';
      } else if (lower.includes('turnaround') || lower.includes('time') || lower.includes('fast')) {
        reply = 'Standard commercial turnarounds are 2-3 weeks, with 48-72 hour emergency broadcast sprints available upon request.';
      } else if (lower.includes('calligraphy') || lower.includes('lettering')) {
        reply = 'Calligraphy commissions include high-resolution 1200 DPI vector delivery, archival paper originals with 24K gold leaf, and licensing for apparel and architectural installations.';
      } else if (lower.includes('davinci') || lower.includes('software') || lower.includes('premiere')) {
        reply = 'Maaz edits natively in DaVinci Resolve Studio for color grading and Premiere Pro / After Effects for motion graphics and sound staging.';
      }

      setMessages(prev => [...prev, { sender: 'agent', text: reply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-3 bg-[#0e1017] hover:bg-zinc-900 text-white rounded-full border border-zinc-700/80 shadow-2xl transition-all hover:scale-105 active:scale-95 group cursor-pointer"
          title="Direct Studio Chat"
        >
          <div className="relative">
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full" />
          </div>
          <span className="text-xs font-semibold text-zinc-200 group-hover:text-amber-400">
            Studio Concierge
          </span>
        </button>
      ) : (
        <div className="w-80 sm:w-96 bg-[#090a0f] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[460px]">
          {/* Header */}
          <div className="p-3.5 bg-zinc-900/80 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <div>
                <div className="text-xs font-bold text-white">Maaz Baloch Studio Direct</div>
                <div className="text-[10px] text-zinc-400 font-mono">Avg. response: &lt; 5 mins</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages list */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-black/40 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-xl leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-amber-400 text-zinc-950 font-medium rounded-br-none'
                      : 'bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[10px] text-zinc-500 mt-1 px-1 font-mono">{m.time}</span>
              </div>
            ))}
          </div>

          {/* Quick prompt suggestions */}
          <div className="p-2 border-t border-zinc-800/80 bg-zinc-950 flex gap-1.5 overflow-x-auto text-[11px] text-zinc-400">
            {['Pricing rates?', 'Turnaround speed?', 'Calligraphy info?'].map(prompt => (
              <button
                key={prompt}
                onClick={() => setInputValue(prompt)}
                className="whitespace-nowrap px-2.5 py-1 bg-zinc-900 hover:bg-zinc-800 rounded border border-zinc-800 text-zinc-300"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Form */}
          <form onSubmit={handleSend} className="p-3 bg-zinc-900/90 border-t border-zinc-800 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about project timelines, pricing..."
              className="flex-1 bg-black/70 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              className="p-2 bg-amber-400 hover:bg-amber-300 text-black rounded-lg transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
