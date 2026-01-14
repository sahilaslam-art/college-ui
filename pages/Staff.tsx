
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Staff: React.FC = () => {
  const departments = [
    {
      name: 'Department of Pharmaceutics',
      members: [
        { name: 'Dr. Sarah Kensington', role: 'Head of Department', expertise: 'Dosage Form Design' },
        { name: 'Prof. Mark Stevens', role: 'Professor', expertise: 'Industrial Pharmacy' },
        { name: 'Dr. Emily Chen', role: 'Associate Professor', expertise: 'Nanotechnology' },
      ]
    },
    {
      name: 'Department of Pharmacology',
      members: [
        { name: 'Dr. James Thorne', role: 'Head of Department', expertise: 'Clinical Trials' },
        { name: 'Dr. Lisa Ray', role: 'Associate Professor', expertise: 'Neuro-Pharmacology' },
      ]
    },
    {
      name: 'Pharmaceutical Chemistry',
      members: [
        { name: 'Dr. Robert Miller', role: 'Professor', expertise: 'Medicinal Chemistry' },
        { name: 'Ms. Anita Gupta', role: 'Assistant Professor', expertise: 'Analytical Chemistry' },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-black text-slate-900 mb-6">Expert Faculty</h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Learn from world-renowned researchers and practitioners who are shaping the future of global medicine.</p>
          </div>

          <div className="space-y-24">
            {departments.map((dept, i) => (
              <div key={i}>
                <h2 className="text-2xl font-black text-teal-600 uppercase tracking-[0.2em] mb-12 border-b border-slate-100 pb-4">{dept.name}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {dept.members.map((member, j) => (
                    <div key={j} className="bg-slate-50 p-8 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border border-slate-100 group text-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 shadow-xl ring-4 ring-white group-hover:ring-teal-500 transition-all duration-300">
                        <img src={`https://picsum.photos/seed/staff${i}${j}/200/200`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={member.name} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                      <p className="text-teal-600 text-sm font-bold uppercase mb-4 tracking-wider">{member.role}</p>
                      <p className="text-slate-500 text-sm mb-8 italic">Specialization: {member.expertise}</p>
                      <div className="flex justify-center space-x-3">
                        <a href="#" className="p-2 bg-white rounded-full text-slate-400 hover:text-teal-600 hover:shadow-md transition-all"><Mail className="w-4 h-4" /></a>
                        <a href="#" className="p-2 bg-white rounded-full text-slate-400 hover:text-teal-600 hover:shadow-md transition-all"><Linkedin className="w-4 h-4" /></a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;
