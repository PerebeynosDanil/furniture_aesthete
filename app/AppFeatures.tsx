'use client';

import { useApp } from './providers';
import { X, Phone, MessageCircle, Send } from 'lucide-react';

export default function AppFeatures() {
  const { 
    selectedDoc, setSelectedDoc, 
    contactOpen, setContactOpen, 
    cur 
  } = useApp();

  // Массив контактов с цветами брендов
  const CONTACTS = [
    { label: 'Phone', href: 'tel:+37254887803', icon: <Phone size={20} />, bg: 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' },
    { label: 'Telegram', href: 'https://t.me/bushinkan88', icon: <i className="fa-brands fa-telegram text-xl" />, bg: 'bg-[#229ED9] text-white' },
    { label: 'Viber', href: 'viber://chat?number=%2B380976987712', icon: <i className="fa-brands fa-viber text-xl" />, bg: 'bg-[#7360F2] text-white' },
    { label: 'WhatsApp', href: 'https://wa.me/+380976987712', icon: <i className="fa-brands fa-whatsapp text-xl" />, bg: 'bg-[#25D366] text-white' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61585162651542', icon: <i className="fa-brands fa-facebook-f text-xl" />, bg: 'bg-[#1877F2] text-white' },
  ];

  return (
    <>
      {/* ── PHOTO MODAL (Просмотр фото) ── */}
      {selectedDoc && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in" 
          onClick={() => setSelectedDoc(null)}
        >
          <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 p-2 rounded-full transition-all cursor-pointer z-[110]" 
              onClick={() => setSelectedDoc(null)}
            >
              <X size={28} />
            </button>
            <img 
              src={selectedDoc} 
              alt="Preview" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" 
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}

      {/* ── CONTACTS MODAL (Окно связи) ── */}
      {contactOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" 
          onClick={() => setContactOpen(false)}
        >
          <div 
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 w-full max-w-sm flex flex-col gap-3 shadow-2xl transition-colors duration-300" 
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg md:text-xl font-medium text-zinc-900 dark:text-white text-center mb-2">
              {cur?.ctaModalTitle || 'Связаться со мной'}
            </h3>
            
            {CONTACTS.map((c) => (
              <a 
                key={c.label} 
                href={c.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-center gap-4 px-5 py-3 rounded-2xl font-medium text-[16px] hover:opacity-90 active:scale-[0.98] transition-all ${c.bg}`}
              >
                <span className="w-6 flex justify-center">{c.icon}</span>
                {c.label}
              </a>
            ))}
            
            <button 
              onClick={() => setContactOpen(false)} 
              className="mt-2 text-sm text-zinc-400 cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors text-center font-medium"
            >
              {cur?.ctaModalClose || 'Закрыть'}
            </button>
          </div>
        </div>
      )}

      
    </>
  );
}