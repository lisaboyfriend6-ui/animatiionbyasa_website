import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Admin from './components/Admin';
import defaultSeries from './data/series.json';

const STORAGE_KEY = 'asa_series_data';

function App() {
  const [page, setPage] = useState('home');
  const [seriesList, setSeriesList] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultSeries;
  });

  const handleNavigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar onNavigate={handleNavigate} currentPage={page} />

      {page === 'home' && (
        <>
          <Hero onNavigate={handleNavigate} />
          <Catalog seriesList={seriesList} />
          <Pricing />
        </>
      )}

      {page === 'catalog' && (
        <div className="pt-8">
          <Catalog seriesList={seriesList} />
        </div>
      )}

      {page === 'admin' && (
        <Admin seriesList={seriesList} setSeriesList={setSeriesList} />
      )}

      <Footer />
    </div>
  );
}

export default App;
