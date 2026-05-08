import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Navigation, ExternalLink } from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

export default function Location() {
  const storeLocation = { lat: 26.2514, lng: 50.6152 }; // Approx based on 109z Muharraq

  return (
    <section className="py-32 bg-bg" id="location">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="label-micro text-accent">Our Location</span>
            </motion.div>
            
            <h2 className="text-6xl md:text-7xl font-serif font-bold text-ink mb-12 leading-[0.9]">
              Visit Us in <span className="italic text-accent">Muharraq</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 mb-16 pr-12">
              <div className="space-y-1">
                <label className="label-micro">Address</label>
                <p className="text-lg font-serif italic text-stone-600 leading-tight">109z, Muharraq, <br />Kingdom of Bahrain</p>
              </div>

              <div className="space-y-1">
                <label className="label-micro">Opening Hours</label>
                <p className="text-lg font-serif italic text-stone-600 leading-tight">Everyday: 10:00 AM — 10:00 PM</p>
                <p className="text-[10px] text-muted tracking-widest uppercase font-bold mt-2">Updated 6 weeks ago</p>
              </div>

              <div className="space-y-1">
                <label className="label-micro">Contact</label>
                <a href="tel:+9733688327" className="text-xl font-serif italic text-stone-600 leading-tight block hover:text-accent transition-colors">3688 3327</a>
              </div>
              
              <div className="space-y-1">
                <label className="label-micro">Social</label>
                <span className="text-lg font-serif italic text-stone-600 leading-tight block">@hadhatifood</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ backgroundColor: "#1A1A1A" }}
                className="bg-ink text-white px-10 py-4 text-[11px] uppercase tracking-[0.2em] font-black transition-colors"
              >
                Directions
              </motion.button>
              <motion.a 
                href="https://maps.google.com/?q=Hadhati+Food+Muharraq"
                target="_blank"
                whileHover={{ backgroundColor: "#fff" }}
                className="bg-white border border-line text-ink px-10 py-4 text-[11px] uppercase tracking-[0.2em] font-black transition-all"
              >
                View on Google Maps
              </motion.a>
            </div>
          </div>

          <div className="relative min-h-[500px] rounded-sm overflow-hidden border border-line group">
            {!hasValidKey ? (
              <div className="absolute inset-0 bg-stone-100 flex items-center justify-center p-12 text-center">
                <div className="max-w-md">
                  <MapPin className="w-12 h-12 text-stone-300 mx-auto mb-6" />
                  <h3 className="text-2xl font-serif italic text-ink mb-2">Interactive Map Unavailable</h3>
                  <p className="text-muted text-[13px] font-medium leading-relaxed mb-6">Provision your Google Maps API Key in Secrets to enable the live exploration experience.</p>
                  <div className="bg-bg p-6 text-left border border-line inline-block">
                    <p className="label-micro mb-2">Instructions</p>
                    <ul className="text-[11px] text-muted space-y-1 font-semibold uppercase tracking-widest leading-relaxed">
                      <li>• Open Settings (⚙️) → Secrets</li>
                      <li>• Add KEY: GOOGLE_MAPS_PLATFORM_KEY</li>
                      <li>• Paste your GMP API Key</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <APIProvider apiKey={API_KEY} version="weekly">
                <Map
                  defaultCenter={storeLocation}
                  defaultZoom={15}
                  mapId="HAD_HATI_MAP_EDITORIAL"
                  style={{ width: '100%', height: '100%' }}
                  disableDefaultUI={true}
                  gestureHandling={'cooperative'}
                  internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                >
                  <AdvancedMarker position={storeLocation}>
                    <div className="relative">
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-ink text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 whitespace-nowrap">
                        Hadhati Food
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-ink rotate-45" />
                      </div>
                      <Pin background="#D35400" glyphColor="#fff" borderColor="#2D2A26" />
                    </div>
                  </AdvancedMarker>
                </Map>
              </APIProvider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
