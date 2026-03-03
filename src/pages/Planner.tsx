import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, DollarSign, Users, Sparkles, Download, ChevronRight } from 'lucide-react';
import { generateItinerary } from '../services/geminiService';

export const Planner = () => {
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<any>(null);
  const [formData, setFormData] = useState({
    destination: '',
    budget: 'moderate',
    type: 'luxury',
    duration: '7 days',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await generateItinerary(formData);
    setItinerary(result);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-luxury-beige/30">
      <section className="bg-luxury-navy text-luxury-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            AI Itinerary Planner
          </motion.h1>
          <p className="text-luxury-white/70 text-lg">
            Tell us your dream trip, and our AI will craft a bespoke journey just for you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-12 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-luxury-white p-8 rounded-3xl shadow-xl border border-luxury-navy/5 sticky top-24">
            <h2 className="text-2xl font-serif font-bold mb-8 flex items-center gap-2">
              <Sparkles className="text-luxury-navy" size={24} /> Plan Your Trip
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-luxury-navy/50 mb-2">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-navy/30" size={18} />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Paris, France"
                    className="w-full bg-luxury-beige/50 border border-luxury-navy/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-luxury-navy/30"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-luxury-navy/50 mb-2">
                    Budget
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-navy/30" size={18} />
                    <select
                      className="w-full bg-luxury-beige/50 border border-luxury-navy/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-luxury-navy/30 appearance-none"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      <option value="budget">Budget</option>
                      <option value="moderate">Moderate</option>
                      <option value="luxury">Luxury</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-luxury-navy/50 mb-2">
                    Duration
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-navy/30" size={18} />
                    <select
                      className="w-full bg-luxury-beige/50 border border-luxury-navy/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-luxury-navy/30 appearance-none"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    >
                      <option value="3 days">3 Days</option>
                      <option value="5 days">5 Days</option>
                      <option value="7 days">7 Days</option>
                      <option value="10 days">10 Days</option>
                      <option value="14 days">14 Days</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-luxury-navy/50 mb-2">
                  Travel Style
                </label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-navy/30" size={18} />
                  <select
                    className="w-full bg-luxury-beige/50 border border-luxury-navy/10 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-luxury-navy/30 appearance-none"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="solo">Solo Explorer</option>
                    <option value="luxury">Luxury Traveler</option>
                    <option value="family">Family Adventure</option>
                    <option value="digital-nomad">Digital Nomad</option>
                    <option value="group">Group Fun</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Generate Itinerary <ChevronRight size={18} /></>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Results Area */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {!itinerary && !loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 bg-luxury-white/50 rounded-3xl border-2 border-dashed border-luxury-navy/10"
              >
                <div className="w-20 h-20 bg-luxury-beige rounded-full flex items-center justify-center mb-6">
                  <MapPin className="text-luxury-navy/40" size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2">Ready to Explore?</h3>
                <p className="text-luxury-navy/50 max-w-sm">
                  Fill out the form to generate your personalized AI travel itinerary.
                </p>
              </motion.div>
            )}

            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12"
              >
                <div className="w-16 h-16 border-4 border-luxury-navy/10 border-t-luxury-navy rounded-full animate-spin mb-8" />
                <h3 className="text-2xl font-serif font-bold mb-2">Crafting Your Journey...</h3>
                <p className="text-luxury-navy/50">Our AI is researching the best spots in {formData.destination}.</p>
              </motion.div>
            )}

            {itinerary && !loading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="bg-luxury-white p-10 rounded-3xl shadow-lg border border-luxury-navy/5">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h2 className="text-4xl font-serif font-bold mb-2">{itinerary.title}</h2>
                      <p className="text-luxury-navy/60">{itinerary.summary}</p>
                    </div>
                    <button className="flex items-center gap-2 text-sm font-bold bg-luxury-beige px-4 py-2 rounded-lg hover:bg-luxury-navy hover:text-white transition-all">
                      <Download size={16} /> PDF
                    </button>
                  </div>

                  <div className="space-y-10">
                    {itinerary.days?.map((day: any) => (
                      <div key={day.day} className="relative pl-12 border-l-2 border-luxury-beige pb-4 last:pb-0">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-luxury-navy border-4 border-luxury-white" />
                        <h4 className="text-xl font-serif font-bold mb-4">Day {day.day}</h4>
                        <ul className="space-y-4">
                          {day.activities.map((activity: string, idx: number) => (
                            <li key={idx} className="bg-luxury-beige/30 p-4 rounded-xl text-sm leading-relaxed">
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12 p-6 bg-luxury-navy text-luxury-white rounded-2xl flex items-center justify-between">
                    <div>
                      <h4 className="font-bold mb-1">Love this itinerary?</h4>
                      <p className="text-sm text-luxury-white/70">Upgrade to Premium for hotel bookings and exclusive discounts.</p>
                    </div>
                    <button className="bg-luxury-white text-luxury-navy px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-all">
                      Upgrade Now
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
