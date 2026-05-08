import { motion } from 'motion/react';
import { ShoppingBasket, Phone, MapPin, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-line"
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-serif font-bold tracking-tight text-ink leading-tight">حاضنتي فود</h1>
          <span className="label-micro -mt-1 block">Hadhati Food • Muharraq</span>
        </div>

        <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-black">
          <a href="#hero" className="border-b-2 border-accent pb-1 text-ink">Overview</a>
          <a href="#products" className="text-muted hover:text-ink transition-colors">Products</a>
          <a href="#reviews" className="text-muted hover:text-ink transition-colors">Reviews</a>
          <a href="#location" className="text-muted hover:text-ink transition-colors">About</a>
        </nav>

        <div className="flex items-center gap-6">
          <a 
            href="tel:+9733688327"
            className="text-[11px] uppercase tracking-widest font-black text-ink hover:text-accent transition-colors hidden sm:block"
            id="nav-cta"
          >
            +973 3688 3327
          </a>
          <button className="bg-ink text-white px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-black hover:bg-stone-800 transition-all rounded-sm shadow-sm" id="nav-directions">
            Directions
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
