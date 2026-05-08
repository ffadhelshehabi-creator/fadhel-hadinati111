import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 min-h-screen flex items-center border-b border-line overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-20 items-stretch relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center border-r border-line pr-12 lg:pr-20"
        >
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl font-serif italic text-ink">4.9</span>
              <div className="flex flex-col">
                <div className="flex text-accent text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < 4 ? "fill-current" : "text-line"}`} />
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-widest font-black text-muted opacity-60">7 Verified Reviews</span>
              </div>
            </div>
            <p className="text-lg font-serif italic text-stone-600 leading-relaxed border-l-2 border-line pl-6">
              "A hidden gem in the heart of Muharraq, providing the community with artisan sweets and essential grocery needs."
            </p>
          </div>

          <div className="space-y-10 mb-16">
            <div className="space-y-1">
              <label className="label-micro">Location</label>
              <p className="text-base font-semibold">109z, Muharraq, Bahrain</p>
            </div>
            <div className="space-y-1">
              <label className="label-micro">Status</label>
              <p className="text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="font-semibold text-ink">Open now</span>
                <span className="text-muted">· Closes 10:00 PM</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.a
              whileHover={{ backgroundColor: "#1A1A1A" }}
              href="#location"
              className="py-4 bg-ink text-white text-[11px] uppercase tracking-[0.2em] font-black text-center transition-colors"
            >
              Directions
            </motion.a>
            <motion.a
              whileHover={{ backgroundColor: "#fafaf9" }}
              href="tel:+97336883327"
              className="py-4 border border-ink text-ink text-[11px] uppercase tracking-[0.2em] font-black text-center transition-colors"
            >
              Call Business
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col"
        >
          <div className="relative mb-12">
            <h2 className="label-micro mb-6 flex items-center gap-4">
              Current Specialties <span className="h-[1px] flex-1 bg-line"></span>
            </h2>
            <div className="grid grid-cols-2 gap-8 h-full">
              <div className="flex flex-col group">
                <div className="aspect-video bg-[#F0EBE6] overflow-hidden flex items-center justify-center rounded-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800" 
                    alt="Artisan Cookies" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-serif italic text-2xl text-ink">Artisan Cookies</h3>
                  <p className="label-micro opacity-70">Baked Fresh Daily</p>
                </div>
              </div>
              <div className="flex flex-col group">
                <div className="aspect-video bg-[#F0EBE6] overflow-hidden flex items-center justify-center rounded-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1543158181-e6f9f67a486e?auto=format&fit=crop&q=80&w=800" 
                    alt="Apricot Paste" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-serif italic text-2xl text-ink">Apricot Paste</h3>
                  <p className="label-micro opacity-70">Limited Quantity</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-auto pt-12 border-t border-line">
             <div className="flex justify-between items-end">
                <div className="max-w-xs">
                  <h1 className="text-6xl font-serif font-bold text-ink leading-[0.9] mb-4">حاضنتي<br /><span className="italic text-accent">فود</span></h1>
                  <p className="text-xs text-muted leading-relaxed font-semibold uppercase tracking-widest">Premium specialty supermarket serving the Muharraq community with distinction.</p>
                </div>
                <div className="hidden lg:block text-right">
                   <div className="text-[60px] font-serif font-bold opacity-5 leading-none">EST.<br />2024</div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
