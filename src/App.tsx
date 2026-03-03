import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { Planner } from './pages/Planner';
import { Shop } from './pages/Shop';
import { Blog } from './pages/Blog';
import { Services } from './pages/Services';
import { News } from './pages/News';
import { AdminDashboard } from './pages/AdminDashboard';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Admin route doesn't use the standard header/footer */}
          <Route path="/admin" element={<AdminDashboard />} />
          
          {/* All other routes use the standard layout */}
          <Route
            path="*"
            element={
              <>
                <Header />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/planner" element={<Planner />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/news" element={<News />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
