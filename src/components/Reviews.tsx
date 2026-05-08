import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    name: "ALI TULEFAT",
    date: "2 months ago",
    comment: "👍 👍 👍",
    rating: 5,
    role: "Local Guide"
  },
  {
    name: "Yousif hussain",
    date: "2 months ago",
    comment: "The cookies are the best thing, I wish they'd bring them every day, and the apricot paste is also delicious, I wish they'd make a large quantity of it because it runs out so quickly.",
    rating: 5,
    role: "Passionate Foodie"
  },
  {
    name: "Hussain Amahri",
    date: "2 months ago",
    comment: "One of the best nurseries in Bahrain, supported by Bloggers Imanis for free.",
    rating: 5,
    role: "Local Reviewer"
  }
];

export default function Reviews() {
  return (
    <section className="py-32 bg-bg border-b border-line" id="reviews">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="label-micro mb-6 flex items-center gap-4">
            Customer Stories <span className="h-[1px] flex-1 bg-line"></span>
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-7xl font-serif font-bold text-ink leading-[0.9]"
            >
              Loved by our <br />
              <span className="italic text-accent">Community</span>
            </motion.h2>
            <div className="flex items-center gap-4">
               <span className="text-4xl font-serif italic text-ink">4.9</span>
               <div className="text-xs font-black uppercase tracking-widest text-muted">
                  Average Rating<br />
                  <span className="text-accent underline">7 Verified Reviews</span>
               </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-line bg-white rounded-lg flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col">
                  <span className="font-black text-[11px] uppercase tracking-wider text-ink">{review.name}</span>
                  <span className="label-micro opacity-60 normal-case">{review.date}</span>
                </div>
                <div className="text-accent text-[10px]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current inline-block mr-0.5" />
                  ))}
                </div>
              </div>
              
              <p className="text-[14px] text-stone-600 leading-relaxed font-medium italic mb-8 flex-1">
                "{review.comment}"
              </p>
              
              <div className="pt-6 border-t border-line flex items-center justify-between">
                <span className="label-micro">{review.role}</span>
                <Quote className="w-4 h-4 text-line" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
