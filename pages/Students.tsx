
import React from 'react';
import { Book, Globe, Shield, User, Laptop, Library } from 'lucide-react';

const Students: React.FC = () => {
  const resources = [
    { title: 'Student LMS', icon: Laptop, color: 'bg-blue-500' },
    { title: 'Digital Library', icon: Library, color: 'bg-teal-500' },
    { title: 'Exam Results', icon: Book, color: 'bg-amber-500' },
    { title: 'Global Alumni', icon: Globe, color: 'bg-purple-500' },
    { title: 'Counseling Cell', icon: Heart, color: 'bg-rose-500' },
    { title: 'Placement Portal', icon: User, color: 'bg-indigo-500' },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-teal-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Student Success Hub</h1>
          <p className="text-teal-100 text-xl max-w-2xl font-light">All your academic resources and campus utilities in one place.</p>
        </div>
        <div className="absolute right-[-100px] bottom-[-100px] opacity-10">
           <User className="w-[500px] h-[500px]" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-12 flex items-center">
                Digital Resources
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {resources.map((item, i) => (
                  <a key={i} href="#" className="group p-8 bg-slate-50 border border-slate-100 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all flex items-center space-x-6">
                    <div className={`${item.color} p-4 rounded-3xl text-white shadow-lg shadow-black/10 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-teal-600">{item.title}</h3>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Access Now</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-8">Announcements</h3>
                <div className="space-y-6">
                  {[
                    'End Semester Exam schedule is out.',
                    'Workshop on HPLC instrumentation this Saturday.',
                    'Last date for scholarship renewal is Nov 10.',
                  ].map((msg, i) => (
                    <div key={i} className="flex space-x-4 border-l-2 border-teal-500 pl-4 py-1">
                      <p className="text-sm text-slate-300 italic">"{msg}"</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 rounded-[3rem] p-10 border border-amber-100">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Emergency Support</h3>
                <p className="text-amber-800/70 text-sm mb-6 leading-relaxed">24/7 student helpline for medical or administrative emergencies.</p>
                <div className="text-xl font-black text-amber-900">+1 (800) PHARMA-HELP</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Heart: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);

export default Students;
