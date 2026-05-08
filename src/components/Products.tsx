import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Artisan Sea Salt Cookies",
    arabicName: "كوكيز بملح البحر",
    description: "The fan-favorite! Crispy edges, chewy center, and a touch of sea salt.",
    price: "BHD 3.500",
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Pure Apricot Paste",
    arabicName: "قمر الدين فاخر",
    description: "Traditional concentrated apricot paste, naturally sweet and smooth.",
    price: "BHD 2.800",
    tag: "Traditional",
    image: "https://images.unsplash.com/photo-1543158181-e6f9f67a486e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Hazelnut Chocolate Cookies",
    arabicName: "كوكيز البندق",
    description: "Rich dark chocolate with roasted hazelnuts for the perfect crunch.",
    price: "BHD 4.000",
    tag: "Premium",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Products() {
  return (
    <section className="py-32 bg-bg border-b border-line" id="products">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="label-micro mb-6 flex items-center gap-4">
            Our Selection <span className="h-[1px] flex-1 bg-line"></span>
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-7xl font-serif font-bold text-ink leading-[0.9]"
            >
              Handcrafted <br />
              <span className="italic text-accent">Perfection</span>
            </motion.h2>
            <p className="text-muted text-sm max-w-sm font-semibold uppercase tracking-widest leading-relaxed">
              From our oven to your hands, discover the treats that have made us a local favorite.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border border-line p-8 bg-white/40 hover:bg-white transition-colors"
              id={`product-${product.id}`}
            >
              <div className="relative aspect-video overflow-hidden mb-8 border border-line">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover grayscale-[0.2] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-0 right-0 bg-ink text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1">
                  {product.tag}
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-serif italic text-ink leading-tight">{product.name}</h3>
                  <p className="label-micro opacity-60">{product.arabicName}</p>
                </div>
                <span className="text-sm font-black text-ink">{product.price}</span>
              </div>
              
              <p className="text-muted text-[13px] leading-relaxed mb-8 font-medium">
                {product.description}
              </p>
              
              <motion.button 
                whileHover={{ backgroundColor: "#2D2A26", color: "#FFFFFF" }}
                className="w-full py-4 border border-ink text-ink text-[11px] uppercase tracking-[0.2em] font-black transition-all"
              >
                Inquire via WhatsApp
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
