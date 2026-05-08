/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-secondary selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

