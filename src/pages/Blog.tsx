import React from 'react';
import { motion } from 'motion/react';
import { blogPosts, newsItems } from '../data';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Calendar, Tag } from 'lucide-react';

export const Blog = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-luxury-navy text-luxury-white py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold mb-6"
            >
              Travel Insights
            </motion.h1>
            <p className="text-luxury-white/60 text-lg">
              Stories, guides, and expert advice for the modern explorer.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-white/10 border border-white/20 rounded-full pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-white/40"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-16">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/blog/${post.id}`}>
                <div className="relative aspect-[16/9] overflow-hidden rounded-3xl mb-8">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-luxury-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-luxury-navy/40 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span>By {post.author}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold group-hover:text-luxury-navy/70 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-luxury-navy/60 text-lg leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm font-bold gap-2 group-hover:gap-4 transition-all">
                    Read Article <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-12">
          {/* Categories */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 pb-2 border-b border-luxury-navy/10">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {['Destinations', 'Luxury', 'Tips', 'Digital Nomad', 'Culture'].map((cat) => (
                <button key={cat} className="px-4 py-2 bg-luxury-beige rounded-lg text-sm hover:bg-luxury-navy hover:text-white transition-all">
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Latest News */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 pb-2 border-b border-luxury-navy/10">Travel News</h3>
            <div className="space-y-6">
              {newsItems.map((news) => (
                <Link key={news.id} to="/news" className="flex gap-4 group">
                  <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-luxury-navy/40 uppercase tracking-widest">{news.date}</span>
                    <h4 className="text-sm font-bold leading-tight group-hover:text-luxury-navy/70 transition-colors line-clamp-2">
                      {news.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="bg-luxury-beige p-8 rounded-3xl text-center">
            <Tag className="mx-auto mb-4 text-luxury-navy/30" size={32} />
            <h3 className="text-xl font-serif font-bold mb-4">Never Miss a Story</h3>
            <p className="text-sm text-luxury-navy/60 mb-6">Get our weekly digest of travel inspiration and news.</p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-white border border-luxury-navy/10 rounded-xl px-4 py-3 text-sm mb-4 focus:outline-none"
            />
            <button className="btn-primary w-full">Subscribe</button>
          </div>
        </aside>
      </div>
    </div>
  );
};
