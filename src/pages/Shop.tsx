import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Filter, Search, Star, ArrowRight } from 'lucide-react';
import { products } from '../data';

export const Shop = () => {
  const [category, setCategory] = useState('All');
  
  const filteredProducts = category === 'All' 
    ? products 
    : products.filter(p => p.category === category);

  return (
    <div className="min-h-screen">
      <section className="bg-luxury-beige py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            The Travel Shop
          </motion.h1>
          <p className="text-luxury-navy/60 text-lg">
            Curated digital tools and physical essentials to elevate your travel experience.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 w-full md:w-auto">
            {['All', 'eBook', 'Planner', 'Checklist'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  category === cat 
                    ? 'bg-luxury-navy text-luxury-white' 
                    : 'bg-luxury-beige text-luxury-navy hover:bg-luxury-navy/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-navy/30" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-luxury-beige/50 border border-luxury-navy/10 rounded-full pl-12 pr-4 py-2 text-sm focus:outline-none focus:border-luxury-navy/30"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="luxury-card group"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-luxury-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <ShoppingBag size={20} className="text-luxury-navy" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-luxury-navy/40 mb-1 block">
                      {product.category}
                    </span>
                    <h3 className="text-2xl font-serif font-bold">{product.name}</h3>
                  </div>
                  <span className="text-xl font-medium">${product.price}</span>
                </div>
                <p className="text-luxury-navy/60 text-sm mb-6 line-clamp-2">
                  {product.description}
                </p>
                <div className="space-y-2 mb-8">
                  {product.features.slice(0, 2).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-luxury-navy/70">
                      <Star size={12} className="fill-luxury-navy text-luxury-navy" />
                      {f}
                    </div>
                  ))}
                </div>
                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  Add to Cart <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cart Sidebar Placeholder */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-16 h-16 bg-luxury-navy text-luxury-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform relative">
          <ShoppingBag size={24} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">0</span>
        </button>
      </div>
    </div>
  );
};
