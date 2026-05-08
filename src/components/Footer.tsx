import { ShoppingBasket, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-bg">
      <div className="max-w-7xl mx-auto px-12 h-16 flex items-center justify-between">
        <div className="flex gap-8 text-[9px] uppercase tracking-[0.2em] font-black">
          <span>© 2024 Hadhati Food</span>
          <a href="#" className="opacity-40 hover:opacity-100 transition-opacity">Privacy Policy</a>
          <a href="#" className="opacity-40 hover:opacity-100 transition-opacity">Contact Support</a>
        </div>
        
        <div className="flex gap-4">
          <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] opacity-60 italic font-serif hover:opacity-100 hover:border-white/40 transition-all">
            fb
          </a>
          <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] opacity-60 italic font-serif hover:opacity-100 hover:border-white/40 transition-all">
            ig
          </a>
        </div>
      </div>
    </footer>
  );
}
