import { Twitter, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Minerax Logo" className="h-10 w-auto invert object-contain" />
            </div>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Minerax and industrial manufacturing enterprise dedicated to enduring strength and unmatched quality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-neutral-900 flex items-center justify-center text-white hover:bg-orange-600 transition-colors rounded-sm">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-900 flex items-center justify-center text-white hover:bg-orange-600 transition-colors rounded-sm">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-900 flex items-center justify-center text-white hover:bg-orange-600 transition-colors rounded-sm">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Investment Casting</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Sand Casting</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Die Casting</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Precision Machining</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Rapid Prototyping</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Investors</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">News & Media</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-neutral-400 mb-4">Subscribe for the latest industrial insights and company updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-neutral-900 border border-neutral-800 text-white px-4 py-2 w-full focus:outline-none focus:border-orange-600 transition-colors"
              />
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 font-bold transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Minerax Industrial Co. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
