
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const address = "At:- Erka Colony, Post:- Amba, Dist:- Aurangabad, Bihar 824111.";
  const phoneNumber = "9031043316";
  const emailAddress = "dprppharmacy@gmail.com";
  
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">Let's Connect</h1>
              <p className="text-slate-600 text-xl font-light mb-12 max-w-lg leading-relaxed">
                Whether you're a prospective student, a researcher, or an industry professional, we look forward to hearing from you.
              </p>

              <div className="space-y-8">
                {/* Location Icon Redirect */}
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-6 group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-3xl flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Campus Location</h4>
                    <p className="text-slate-600 group-hover:text-teal-600 transition-colors">{address}</p>
                  </div>
                </a>

                {/* Phone Icon Redirect */}
                <a 
                  href={`tel:${phoneNumber}`} 
                  className="flex items-center space-x-6 group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-3xl flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">General Inquiries</h4>
                    <p className="text-slate-600 group-hover:text-teal-600 transition-colors">+91 {phoneNumber}</p>
                  </div>
                </a>

                {/* Email Icon Redirect */}
                <a 
                  href={`mailto:${emailAddress}`} 
                  className="flex items-center space-x-6 group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-3xl flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-1">Email Us</h4>
                    <p className="text-slate-600 group-hover:text-teal-600 transition-colors">{emailAddress}</p>
                  </div>
                </a>
              </div>
              
              <div className="mt-16 rounded-[3rem] overflow-hidden shadow-2xl h-64 relative grayscale hover:grayscale-0 transition-all border border-slate-100">
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <div className="absolute inset-0 bg-teal-900/10 pointer-events-none group-hover:bg-transparent transition-all"></div>
                  <img src="https://picsum.photos/seed/map/800/600" className="w-full h-full object-cover" alt="Map Placeholder" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-2 rounded-full font-bold text-teal-700 shadow-xl">
                    View on Google Maps
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-slate-50 p-10 lg:p-16 rounded-[4rem] shadow-sm border border-slate-100">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Send an Inquiry</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border-transparent focus:border-teal-500 focus:ring-0 shadow-sm transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border-transparent focus:border-teal-500 focus:ring-0 shadow-sm transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white border-transparent focus:border-teal-500 focus:ring-0 shadow-sm transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Interested Program</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-white border-transparent focus:border-teal-500 focus:ring-0 shadow-sm transition-all appearance-none">
                    <option>B.Pharm</option>
                    <option>M.Pharm</option>
                    <option>Pharm.D</option>
                    <option>PhD</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea rows={5} className="w-full px-6 py-4 rounded-2xl bg-white border-transparent focus:border-teal-500 focus:ring-0 shadow-sm transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-teal-600 text-white font-bold rounded-[2rem] hover:bg-teal-700 transition-all shadow-xl shadow-teal-600/20 flex items-center justify-center space-x-2">
                  <span>Submit Institutional Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
