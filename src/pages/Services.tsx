import React from 'react';
import { motion } from 'motion/react';
import { services } from '../data';
import { Check, ArrowRight, HelpCircle } from 'lucide-react';

export const Services = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-luxury-navy text-luxury-white py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-8"
          >
            Our Services
          </motion.h1>
          <p className="text-luxury-white/60 text-xl font-light">
            From bespoke itineraries to full relocation support, we provide the expertise you need to travel with confidence.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -10 }}
              className="luxury-card p-10 flex flex-col h-full"
            >
              <div className="mb-8">
                <h3 className="text-3xl font-serif font-bold mb-4">{service.title}</h3>
                <p className="text-luxury-navy/60 mb-6">{service.description}</p>
                <div className="text-2xl font-medium text-luxury-navy">{service.price}</div>
              </div>
              
              <div className="space-y-4 mb-10 flex-1">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-luxury-beige flex items-center justify-center">
                      <Check size={12} className="text-luxury-navy" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="btn-primary w-full flex items-center justify-center gap-2">
                Inquire Now <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-luxury-beige py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle className="mx-auto mb-6 text-luxury-navy/30" size={40} />
            <h2 className="text-4xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-luxury-navy/60">Everything you need to know about working with us.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "How far in advance should I book?", a: "We recommend booking at least 3-6 months in advance for custom itineraries, especially for peak seasons." },
              { q: "Do you handle flight bookings?", a: "We provide flight recommendations and coordination, but we do not book flights directly to ensure you have full control over your tickets." },
              { q: "What is your cancellation policy?", a: "Our planning fees are non-refundable once the initial research phase has begun. Individual bookings are subject to vendor policies." }
            ].map((item, i) => (
              <div key={i} className="bg-luxury-white rounded-2xl p-6 border border-luxury-navy/5">
                <h4 className="font-bold mb-3 flex items-center justify-between">
                  {item.q}
                </h4>
                <p className="text-sm text-luxury-navy/60 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className="section-padding text-center">
        <div className="bg-luxury-navy text-luxury-white p-16 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl font-serif font-bold mb-6">Free Travel Resources</h2>
            <p className="text-luxury-white/70 mb-10 max-w-xl mx-auto">
              Get started with our complimentary guides, checklists, and planning tools.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {['Packing Checklist', 'Budget Planner', 'Solo Safety Guide', 'Nomad Starter Kit'].map((item) => (
                <button key={item} className="bg-white/10 hover:bg-white/20 border border-white/20 p-6 rounded-2xl transition-all text-sm font-bold">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
