import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, FileText, ShoppingBag, Map, Settings, Plus, BarChart3, LogOut } from 'lucide-react';

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: 'Total Bookings', value: '128', icon: Map, color: 'bg-blue-500' },
    { label: 'Revenue', value: '$42,500', icon: BarChart3, color: 'bg-green-500' },
    { label: 'New Customers', value: '45', icon: Plus, color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-luxury-beige/10 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-luxury-navy text-luxury-white flex flex-col">
        <div className="p-8">
          <h2 className="text-2xl font-serif font-bold">Admin Panel</h2>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'blog', label: 'Manage Blog', icon: FileText },
            { id: 'shop', label: 'Manage Shop', icon: ShoppingBag },
            { id: 'itineraries', label: 'Itineraries', icon: Map },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === item.id ? 'bg-white/10 text-white' : 'text-white/50 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-white/10">
          <button className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm font-medium">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-serif font-bold mb-2 uppercase tracking-tight">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <p className="text-luxury-navy/40">Welcome back, Mabel. Here's what's happening today.</p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={18} /> Add New
          </button>
        </header>

        {activeTab === 'dashboard' && (
          <div className="space-y-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white p-8 rounded-3xl shadow-sm border border-luxury-navy/5">
                  <div className={`${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6`}>
                    <stat.icon size={24} />
                  </div>
                  <h3 className="text-luxury-navy/40 text-sm font-bold uppercase tracking-widest mb-1">{stat.label}</h3>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Recent Activity Placeholder */}
            <div className="bg-white rounded-3xl shadow-sm border border-luxury-navy/5 overflow-hidden">
              <div className="p-8 border-b border-luxury-navy/5 flex justify-between items-center">
                <h3 className="text-xl font-serif font-bold">Recent Activity</h3>
                <button className="text-sm font-bold text-luxury-navy/40 hover:text-luxury-navy">View All</button>
              </div>
              <div className="divide-y divide-luxury-navy/5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="p-6 flex items-center justify-between hover:bg-luxury-beige/20 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-luxury-beige flex items-center justify-center">
                        <User size={18} className="text-luxury-navy/40" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">New order received from John Doe</p>
                        <p className="text-xs text-luxury-navy/40">2 hours ago</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">Completed</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab !== 'dashboard' && (
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-luxury-navy/5 text-center">
            <div className="w-20 h-20 bg-luxury-beige rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="text-luxury-navy/20" size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-2">Module Under Construction</h3>
            <p className="text-luxury-navy/40 max-w-sm mx-auto">
              We're currently building the {activeTab} management system. Check back soon!
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

const User = ({ size, className }: { size: number, className: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
