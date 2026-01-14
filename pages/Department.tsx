
import React from 'react';
import { useParams } from 'react-router-dom';
import { FlaskConical, Microscope, Beaker, Pill } from 'lucide-react';

const Department: React.FC = () => {
  const { slug } = useParams();
  
  const getDeptInfo = (s: string | undefined) => {
    switch(s) {
      case 'pharmaceutics': return { title: 'Pharmaceutics', icon: Beaker, desc: 'Focusing on the design, development and evaluation of dosage forms.' };
      case 'pharmacology': return { title: 'Pharmacology', icon: Pill, desc: 'The study of drug action and the interaction of drugs with living systems.' };
      case 'pharmaceutical-chemistry': return { title: 'Pharmaceutical Chemistry', icon: FlaskConical, desc: 'Advanced chemical analysis and development of therapeutic substances.' };
      case 'pharmacognosy': return { title: 'Pharmacognosy', icon: Microscope, desc: 'Researching medicinal drugs derived from plants and natural sources.' };
      default: return { title: 'Department', icon: Beaker, desc: 'Detailed academic and research overview of our specialization.' };
    }
  };

  const info = getDeptInfo(slug);

  return (
    <div className="pt-20">
      <section className="bg-teal-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <info.icon className="w-12 h-12" />
            <div className="w-px h-12 bg-white/20"></div>
            <span className="text-sm font-bold uppercase tracking-[0.3em] opacity-80">Department of</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">{info.title}</h1>
          <p className="text-xl text-teal-50 max-w-2xl font-light leading-relaxed">{info.desc}</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Research Focus Areas</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Nano-Formulations', 'Advanced Kinetics', 'Molecular Docking', 'Phyto-Extraction'].map((area, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 font-bold text-slate-800 flex items-center">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span> {area}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Laboratory Infrastructure</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Our laboratories are equipped with industry-standard instrumentation including HPLC, Gas Chromatography, and High-Precision Spectrometers, providing students with a hands-on technical environment.
                </p>
                <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src="https://picsum.photos/id/102/800/450" className="w-full" alt="Lab" />
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-8">Quick Statistics</h3>
                <div className="space-y-8">
                  <div className="flex items-center justify-between border-b border-white/10 pb-6">
                    <span className="text-slate-400 font-medium">Faculty Members</span>
                    <span className="text-2xl font-black text-teal-500">25+</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-6">
                    <span className="text-slate-400 font-medium">Ongoing Research</span>
                    <span className="text-2xl font-black text-teal-500">12 Projects</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Publications (2023)</span>
                    <span className="text-2xl font-black text-teal-500">45+</span>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-teal-50 rounded-[3rem] border border-teal-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Industrial Collaborations</h3>
                <p className="text-slate-600 mb-8">We maintain strategic tie-ups with leading pharma manufacturers for internships and collaborative research.</p>
                <div className="flex flex-wrap gap-8 opacity-40 grayscale">
                  <div className="font-black text-2xl tracking-tighter">PHARMA-CO</div>
                  <div className="font-black text-2xl tracking-tighter">BIO-GEN</div>
                  <div className="font-black text-2xl tracking-tighter">CHEM-TECH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Department;
