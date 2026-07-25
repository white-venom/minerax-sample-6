/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Capabilities } from './components/Capabilities';
import { Products } from './components/Products';
import { Facilities } from './components/Facilities';
import { Quality } from './components/Quality';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans selection:bg-orange-500/30">
      <Navigation />
      <Hero />
      <Stats />
      <Capabilities />
      <Products />
      <Facilities />
      <Quality />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
