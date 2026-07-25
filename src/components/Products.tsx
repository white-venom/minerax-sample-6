import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Cpu, Anchor, Train } from 'lucide-react';

const products = [
  {
    id: 'power-gen',
    title: 'Power Generation Turbines',
    category: 'Energy & Power',
    image: '/assets/product_turbine.png',
    icon: <Cpu className="text-orange-500" size={24} />,
    description: 'Precision-cast high-pressure turbine housings built to withstand extreme thermal stress up to 650°C.',
    specs: ['Max Weight: 35 Tons', 'Material: Alloy Steel Cr-Mo-V', 'NDT Certification: 100% UT/MT'],
  },
  {
    id: 'mining',
    title: 'Heavy Mining Components',
    category: 'Earthmoving & Mining',
    image: '/assets/product_mining.png',
    icon: <Anchor className="text-orange-500" size={24} />,
    description: 'Ultra-durable manganese and low-alloy steel buckets, crusher jaws, and wear-resistant teeth.',
    specs: ['Hardness: 55-62 HRC', 'Impact Toughness: High', 'Custom Geometry: Available'],
  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas Valve Bodies',
    category: 'Petrochemical & Offshore',
    image: '/assets/product_valve.png',
    icon: <ShieldCheck className="text-orange-500" size={24} />,
    description: 'Forged and cast subsea valve bodies rated for 15,000 PSI high-pressure deepwater drilling.',
    specs: ['Pressure Rating: API 15K', 'Subsea Rated: Yes', 'Corrosion Resistance: Inconel Clad'],
  },
  {
    id: 'rail',
    title: 'Locomotive Rail Castings',
    category: 'Heavy Rail Transport',
    image: '/assets/product_rail.png',
    icon: <Train className="text-orange-500" size={24} />,
    description: 'High-speed rail bogie frames, coupler assemblies, and freight car wheelsets certified for 40-ton axle loads.',
    specs: ['Axle Load: Up to 40T', 'Standard: EN 13715 / AAR', 'Fatigue Life: 5 Million Cycles'],
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-orange-500 font-bold text-xs md:text-sm tracking-widest uppercase mb-3 block"
            >
              Precision Engineering Showcase
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight"
            >
              Featured Heavy Castings
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 max-w-md text-base leading-relaxed"
          >
            Custom metallurgical solutions engineered to exact international specifications for critical heavy industries.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-neutral-800/80 border border-neutral-700/60 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 shadow-xl"
            >
              {/* Product Image Card */}
              <div className="relative h-64 md:h-72 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                <div className="absolute top-4 left-4 bg-neutral-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-orange-400 border border-neutral-700">
                  {item.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-neutral-900 rounded-lg border border-neutral-700">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <a
                    href="#contact"
                    className="p-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all"
                    aria-label={`Inquire about ${item.title}`}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>

                <p className="text-neutral-300 mb-6 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Specs List */}
                <div className="pt-4 border-t border-neutral-700/60 flex flex-wrap gap-2">
                  {item.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="text-xs bg-neutral-900 text-neutral-300 px-3 py-1.5 rounded-md border border-neutral-700/80 font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
