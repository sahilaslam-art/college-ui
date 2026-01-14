
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Layers } from 'lucide-react';

const Courses: React.FC = () => {
  const courses = [
    {
      title: 'Bachelor of Pharmacy (B.Pharm)',
      duration: '4 Years',
      seats: '100',
      desc: 'Foundation course focusing on manufacturing, compounding, and clinical pharmacy practice.',
      type: 'Undergraduate'
    },
    {
      title: 'Master of Pharmacy (M.Pharm)',
      duration: '2 Years',
      seats: '18 per Dept',
      desc: 'Specialized research-based postgraduate program in various pharmacology disciplines.',
      type: 'Postgraduate'
    },
    {
      title: 'Pharm.D (Doctor of Pharmacy)',
      duration: '6 Years',
      seats: '30',
      desc: 'Advanced professional doctorate focusing on patient therapy and clinical rotations.',
      type: 'Doctorate'
    },
    {
      title: 'PhD in Pharmaceutical Sciences',
      duration: '3-5 Years',
      seats: '10',
      desc: 'Research intensive program focusing on novel drug discovery and molecular dynamics.',
      type: 'Doctorate'
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-black text-slate-900 mb-6">Explore Our Professional Degrees</h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Our programs are accredited by the Pharmacy Council and designed for global relevance.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-48 h-48 rounded-[2rem] overflow-hidden shrink-0">
                  <img src={`https://picsum.photos/seed/course${i}/400/400`} alt={course.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full mb-3 inline-block">
                    {course.type}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{course.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{course.desc}</p>
                  <div className="flex gap-6 text-xs font-bold text-slate-400">
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-teal-500" /> {course.duration}</span>
                    <span className="flex items-center"><Layers className="w-4 h-4 mr-2 text-teal-500" /> {course.seats} Seats</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
