import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { itineraries, products, blogPosts } from '../data';

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-luxury-navy/30"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <span className="text-luxury-white text-sm uppercase tracking-[0.3em] mb-6 block font-medium">
            Welcome to Mabel Fol’s
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-luxury-white font-serif font-bold mb-8 leading-tight">
            Travel Smart. <br />
            Travel Beautifully.
          </h1>
          <p className="text-luxury-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            Curated experiences for the modern explorer who values luxury, authenticity, and bold adventures.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/planner" className="btn-primary w-full sm:w-auto">
              Plan Your Itinerary
            </Link>
            <Link to="/shop" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-all w-full sm:w-auto">
              Shop eBooks
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Itineraries */}
      <section className="section-padding">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Featured Itineraries</h2>
            <p className="text-luxury-navy/60 max-w-lg">Hand-picked journeys designed to inspire your next great escape.</p>
          </div>
          <Link to="/planner" className="flex items-center text-sm font-semibold group">
            View All <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {itineraries.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className="luxury-card group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-luxury-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {item.type}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold">{item.title}</h3>
                  <span className="text-sm font-medium">${item.price}</span>
                </div>
                <p className="text-luxury-navy/60 text-sm mb-6 line-clamp-2">{item.description}</p>
                <Link to={`/planner?dest=${item.destination}`} className="text-sm font-bold border-b border-luxury-navy pb-1 hover:text-luxury-navy/60 hover:border-luxury-navy/60 transition-colors">
                  Explore Journey
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured eBooks */}
      <section className="bg-luxury-beige py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Travel Smarter with Our Curated Guides</h2>
            <p className="text-luxury-navy/70 text-lg mb-8 leading-relaxed">
              Our digital products are designed to take the stress out of planning. From comprehensive packing lists to deep-dive destination guides, we've got you covered.
            </p>
            <div className="space-y-4 mb-10">
              {['Expertly Researched', 'Instant Digital Access', 'Lifetime Updates'].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-luxury-navy flex items-center justify-center">
                    <Star size={10} className="text-white fill-white" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <Link to="/shop" className="btn-primary inline-block">
              Browse the Shop
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <div key={product.id} className="luxury-card p-4">
                <img src={product.image} alt={product.name} className="w-full aspect-[3/4] object-cover rounded-xl mb-4" />
                <h4 className="font-serif font-bold text-lg">{product.name}</h4>
                <p className="text-sm text-luxury-navy/60">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Latest from the Blog</h2>
          <p className="text-luxury-navy/60">Insights, stories, and tips from our global travels.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group">
              <div className="relative h-96 overflow-hidden rounded-2xl mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 bg-luxury-white p-4 rounded-xl shadow-lg max-w-[80%]">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-luxury-navy/50 mb-2 block">
                    {post.category} — {post.date}
                  </span>
                  <h3 className="text-xl font-serif font-bold group-hover:text-luxury-navy/70 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-luxury-navy text-luxury-white py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <Mail className="mx-auto mb-6 opacity-50" size={40} />
          <h2 className="text-4xl font-serif font-bold mb-6">Join the Inner Circle</h2>
          <p className="text-luxury-white/70 mb-10 text-lg">
            Receive curated travel inspiration, exclusive offers, and early access to our latest itineraries directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 focus:outline-none focus:border-white/40"
            />
            <button className="bg-luxury-white text-luxury-navy px-10 py-4 rounded-full font-bold hover:opacity-90 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 mb-10 flex justify-between items-center">
          <h2 className="text-2xl font-serif font-bold flex items-center gap-2">
            <Instagram size={24} /> @mabelfolstravel
          </h2>
          <a href="#" className="text-sm font-bold border-b border-luxury-navy pb-1">Follow Us</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square relative overflow-hidden group">
              <img
                src={`https://picsum.photos/seed/travel${i}/600/600`}
                alt="Instagram"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-luxury-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
