
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, FlaskConical, Award, ArrowRight, Calendar } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full mb-6 font-bold text-xs uppercase tracking-widest">
                {/* Fixed: Capitalized GraduationCap component */}
                <GraduationCap className="w-4 h-4" />
                <span>Admissions Open for Fall 2024</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
                Dashrath Prasad Ramnandan Pandey <span className="text-teal-600 italic">College of Pharmacy</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                Join a legacy of scientific innovation. We prepare the next generation of healthcare leaders through rigorous academic training and advanced clinical research.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/academics/admission" className="px-10 py-4 bg-teal-600 text-white font-bold rounded-full text-center shadow-xl shadow-teal-600/20 hover:bg-teal-700 transition-all transform hover:-translate-y-1">
                  Apply Online
                </Link>
                <Link to="/academics/courses" className="px-10 py-4 bg-white text-teal-600 border-2 border-teal-600 font-bold rounded-full text-center hover:bg-teal-50 transition-all">
                  Explore Programs
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-teal-100 rounded-3xl blur-2xl opacity-50 -z-10"></div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://picsum.photos/id/101/600/800" 
                  alt="Modern Lab" 
                  className="rounded-3xl shadow-2xl h-96 object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                />
                <div className="space-y-4 pt-12">
                  <img 
                    src="https://picsum.photos/id/201/600/600" 
                    alt="Research" 
                    className="rounded-3xl shadow-2xl h-48 w-full object-cover"
                  />
                  <div className="bg-teal-600 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-center aspect-square">
                    <h3 className="text-3xl font-bold mb-2">#12</h3>
                    <p className="text-sm font-medium opacity-80">National Pharmacy Rank</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Qualified Faculty', value: '120+', icon: Users },
              { label: 'Research Centers', value: '15+', icon: FlaskConical },
              { label: 'NAPLEX Pass Rate', value: '98%', icon: Award },
              { label: 'Alumni Network', value: '5K+', icon: GraduationCap },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex p-4 rounded-2xl bg-slate-50 text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  <stat.icon className="w-8 h-8" />
                </div>
                <h4 className="text-4xl font-black text-slate-900 mb-2">{stat.value}</h4>
                <p className="text-slate-500 font-semibold uppercase text-xs tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Premier Courses</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Specialized programs designed to give you a competitive edge in the global healthcare market.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Bachelor of Pharmacy', desc: 'A comprehensive 4-year undergraduate degree covering all aspects of drug action and delivery.', img: '41' },
              { title: 'Doctor of Pharmacy', desc: 'Professional 6-year doctoral program focusing on patient-centered clinical pharmaceutical practice.', img: '51' },
              { title: 'MS in Drug Design', desc: 'Advanced postgraduate research program focused on discovery and molecular chemistry.', img: '61' },
            ].map((course, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="h-64 overflow-hidden">
                  <img src={`https://picsum.photos/seed/course${i}/600/400`} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{course.title}</h3>
                  <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">{course.desc}</p>
                  <Link to="/academics/courses" className="inline-flex items-center text-teal-600 font-bold hover:text-teal-700 group">
                    {/* Fixed: Capitalized ArrowRight component */}
                    View Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Latest Updates</h2>
              <p className="text-slate-500">Discover the recent happenings and upcoming milestones.</p>
            </div>
            <Link to="/media/gallery" className="hidden sm:inline-flex items-center px-6 py-2 bg-slate-100 text-slate-900 rounded-full font-bold hover:bg-teal-600 hover:text-white transition-all">
              View Newsroom
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {[1, 2].map((n) => (
                <div key={n} className="flex flex-col sm:flex-row gap-8 items-center group">
                  <div className="w-full sm:w-64 h-48 rounded-2xl overflow-hidden shadow-lg">
                    <img src={`https://picsum.photos/seed/news${n}/400/300`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="News" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center text-teal-600 text-xs font-bold mb-2 uppercase tracking-widest">
                      {/* Fixed: Capitalized Calendar component */}
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Oct 24, 2023 • Research</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">New Breakthrough in Oncology Nanoparticles</h3>
                    <p className="text-slate-600 line-clamp-2 leading-relaxed">Our PhD candidates recently published a landmark study on targeted cancer delivery systems in the International Journal of Pharmacy...</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-teal-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
              {/* Fixed: Capitalized Calendar component */}
              <div className="absolute top-0 right-0 p-8 opacity-20"><Calendar className="w-32 h-32" /></div>
              <h3 className="text-2xl font-bold mb-8 relative z-10">Upcoming Events</h3>
              <div className="space-y-6 relative z-10">
                {[
                  { date: '12 Nov', event: 'International Pharmacy Summit 2023' },
                  { date: '15 Nov', event: 'White Coat Ceremony: Class of 2024' },
                  { date: '20 Nov', event: 'Clinical Trial Ethics Workshop' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 border-b border-white/10 pb-6 last:border-0">
                    <div className="bg-white/10 px-4 py-2 rounded-xl text-center">
                      <div className="text-lg font-black">{item.date.split(' ')[0]}</div>
                      <div className="text-[10px] font-bold uppercase">{item.date.split(' ')[1]}</div>
                    </div>
                    <div className="text-sm font-semibold">{item.event}</div>
                  </div>
                ))}
              </div>
              <button className="mt-10 w-full py-4 bg-teal-600 text-white font-bold rounded-2xl hover:bg-teal-500 transition-colors shadow-xl">
                Full Calendar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-teal-600 rounded-[4rem] px-8 py-20 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight relative z-10">Ready to Shape the Future of Medicine?</h2>
            <p className="text-teal-100 text-xl mb-12 max-w-2xl mx-auto font-light relative z-10">
              Applications for the 2024 academic cycle are closing soon. Take the first step toward a rewarding career in the pharmaceutical sciences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link to="/academics/admission" className="px-12 py-5 bg-white text-teal-700 font-bold rounded-full hover:bg-teal-50 transition-all shadow-2xl">Begin Application</Link>
              <Link to="/contact" className="px-12 py-5 border-2 border-white/50 text-white font-bold rounded-full hover:bg-white/10 transition-all">Request Information</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
