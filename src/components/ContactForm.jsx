import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Mail, MessageSquare, Inbox, ShieldCheck, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState('write');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [savedMessages, setSavedMessages] = useState([]);

  // Load existing mock messages from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('vignesh_portfolio_messages');
    if (saved) {
      try {
        setSavedMessages(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address syntax.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please add a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please write a message.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);

    // Simulate sending message securely
    setTimeout(() => {
      const newMessage = {
        id: Math.random().toString(36).substring(2, 9),
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      const updated = [newMessage, ...savedMessages];
      setSavedMessages(updated);
      localStorage.setItem('vignesh_portfolio_messages', JSON.stringify(updated));

      setIsSending(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setIsSuccess(false);
        setActiveTab('inbox'); // automatically show them the sent box!
      }, 1800);
    }, 1000);
  };

  return (
    <div className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800/60 rounded-2xl overflow-hidden shadow-xl">
      {/* Contact Header/Tabs */}
      <div className="bg-neutral-950 px-5 py-3 border-b border-neutral-900/80 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-neutral-300" />
          <span className="font-bold tracking-tight text-xs text-neutral-200">Connect with Vignesh</span>
        </div>
        
        {/* Mock Sent Box Selector */}
        <div className="flex gap-1.5 bg-neutral-900/60 p-0.5 rounded-lg border border-neutral-800 w-fit">
          <button
            onClick={() => setActiveTab('write')}
            className={`px-3 py-1 rounded-md text-[10px] font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'write'
                ? 'bg-neutral-800 text-neutral-100 shadow-xs'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            ✉️ Write Message
          </button>
          <button
            onClick={() => setActiveTab('inbox')}
            className={`px-3 py-1 rounded-md text-[10px] font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'inbox'
                ? 'bg-neutral-800 text-neutral-100 shadow-xs'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Inbox className="w-3 h-3 text-neutral-500" /> 
            <span>My Sent Box ({savedMessages.length})</span>
          </button>
        </div>
      </div>

      <div className="p-5 min-h-[300px]">
        <AnimatePresence mode="wait">
          {activeTab === 'write' ? (
            <motion.form 
              key="write"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              onSubmit={handleSendMessage}
              className="space-y-4"
            >
              {isSuccess ? (
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-neutral-950 border border-neutral-800 p-8 rounded-xl text-center flex flex-col items-center justify-center gap-2.5 my-6"
                >
                  <CheckCircle className="w-10 h-10 text-neutral-100 animate-bounce" />
                  <h4 className="text-sm font-bold text-neutral-100">Message Encoded & Dispatched!</h4>
                  <p className="text-[11px] text-neutral-400 leading-relaxed max-w-[280px]">
                    Your message has been safely saved in the browser local storage block. Toggling you to the 'Sent Box' now...
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Your Name</label>
                      <input 
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`bg-neutral-950 text-neutral-200 border rounded-xl px-3 py-2 w-full text-xs focus:outline-none transition-colors ${
                          errors.name ? 'border-red-900/60 focus:border-red-600' : 'border-neutral-800/80 focus:border-neutral-500'
                        }`}
                      />
                      {errors.name && <p className="text-[9px] text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Your Email</label>
                      <input 
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`bg-neutral-950 text-neutral-200 border rounded-xl px-3 py-2 w-full text-xs focus:outline-none transition-colors ${
                          errors.email ? 'border-red-900/60 focus:border-red-600' : 'border-neutral-800/80 focus:border-neutral-500'
                        }`}
                      />
                      {errors.email && <p className="text-[9px] text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Subject</label>
                    <input 
                      type="text"
                      placeholder="Opportunity or Feedback"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      className={`bg-neutral-950 text-neutral-200 border rounded-xl px-3 py-2 w-full text-xs focus:outline-none transition-colors ${
                        errors.subject ? 'border-red-900/60 focus:border-red-600' : 'border-neutral-800/80 focus:border-neutral-500'
                      }`}
                    />
                    {errors.subject && <p className="text-[9px] text-red-400 mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Message Description</label>
                    <textarea 
                      rows={4}
                      placeholder="Write your connection query here..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      className={`bg-neutral-950 text-neutral-200 border rounded-xl px-3.5 py-2.5 w-full text-xs focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-900/60 focus:border-red-600' : 'border-neutral-800/80 focus:border-neutral-500'
                      }`}
                    />
                    {errors.message && <p className="text-[9px] text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  <button 
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-950 font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs cursor-pointer shadow-md shadow-black/10 transition-colors disabled:opacity-50"
                  >
                    {isSending ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                        <span>Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Client-Side Message</span>
                      </>
                    )}
                  </button>
                </>
              )}
            </motion.form>
          ) : (
            <motion.div 
              key="inbox"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="space-y-3"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider">Browser localStorage Sandbox Message Logs</span>
                <span className="bg-neutral-950 border border-neutral-800/80 px-2 py-0.5 rounded text-[9px] text-neutral-400 font-mono">
                  {savedMessages.length} Messages Logged
                </span>
              </div>

              {savedMessages.length === 0 ? (
                <div className="bg-neutral-950/40 border border-neutral-900 rounded-xl py-12 px-4 text-center">
                  <Mail className="w-8 h-8 text-neutral-700 mx-auto mb-2" />
                  <p className="text-neutral-400 text-xs font-semibold">Your sent container is empty!</p>
                  <p className="text-neutral-600 text-[10px] max-w-[240px] mx-auto leading-relaxed mt-1">
                    Fill out the 'Write Message' form above to log an interactive submission that persists in this client block.
                  </p>
                </div>
              ) : (
                <div className="space-y-2 max-h-[280px] overflow-y-auto scrollbar-thin">
                  {savedMessages.map((msg) => (
                    <div key={msg.id} className="bg-neutral-950/80 border border-neutral-900 rounded-xl p-3 flex flex-col gap-1.5 relative group">
                      <button 
                        onClick={() => {
                          const updated = savedMessages.filter(m => m.id !== msg.id);
                          setSavedMessages(updated);
                          localStorage.setItem('vignesh_portfolio_messages', JSON.stringify(updated));
                        }}
                        className="absolute top-2.5 right-3 text-neutral-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs cursor-pointer"
                        title="Delete logged entry"
                      >
                        ✕
                      </button>
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-neutral-500" />
                          <span className="font-bold text-neutral-200 text-xs">{msg.name}</span>
                          <span className="text-[10px] text-neutral-500">({msg.email})</span>
                        </div>
                        <span className="text-[9px] text-neutral-600 font-mono">{msg.timestamp}</span>
                      </div>
                      <div className="text-[11px] text-neutral-300 font-semibold border-l border-neutral-800 pl-2">
                        {msg.subject}
                      </div>
                      <p className="text-[10px] text-neutral-400 leading-relaxed bg-neutral-900/40 p-2 rounded border border-neutral-900/60 font-sans">
                        {msg.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="bg-neutral-950 px-5 py-2.5 text-center text-[9px] text-neutral-600 font-mono border-t border-neutral-900/60 flex items-center justify-center gap-1.5">
        <ShieldCheck className="w-3.5 h-3.5 text-neutral-500" />
        <span>Submissions sandbox is simulated locally and respects your visual browser boundaries</span>
      </div>
    </div>
  );
}
