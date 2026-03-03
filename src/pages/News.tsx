import React from 'react';
import { motion } from 'motion/react';
import { newsItems } from '../data';
import { Calendar, Tag, ArrowRight, Share2 } from 'lucide-react';

export const News = () => {
  return (
    <div className="min-h-screen bg-luxury-beige/20">
      <section className="bg-luxury-white py-24 px-6 border-b border-luxury-navy/5">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Travel News
          </motion.h1>
          <p className="text-luxury-navy/60 text-xl font-light max-w-2xl">
            Stay updated with the latest trends, regulations, and global events affecting the world of travel.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="luxury-card flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-luxury-navy text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {item.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[10px] font-bold text-luxury-navy/40 uppercase tracking-widest mb-4">
                  <Calendar size={12} /> {item.date}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 leading-tight">{item.title}</h3>
                <p className="text-luxury-navy/60 text-sm mb-8 flex-1">{item.summary}</p>
                <div className="flex items-center justify-between pt-6 border-t border-luxury-navy/5">
                  <button className="flex items-center gap-2 text-sm font-bold hover:text-luxury-navy/60 transition-colors">
                    Read More <ArrowRight size={16} />
                  </button>
                  <button className="p-2 hover:bg-luxury-navy/5 rounded-full transition-colors">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Alert */}
        <div className="mt-20 bg-luxury-navy text-luxury-white p-12 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h3 className="text-3xl font-serif font-bold mb-4">Get Real-Time Alerts</h3>
            <p className="text-luxury-white/60">Be the first to know about breaking travel news and exclusive deals.</p>
          </div>
          <form className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-sm flex-1 md:w-64 focus:outline-none"
            />
            <button className="bg-luxury-white text-luxury-navy px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all">
              Alert Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
