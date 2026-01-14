
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-teal-900 text-white py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">Legacy of Innovation</h1>
          <p className="text-teal-100 text-xl max-w-3xl font-light leading-relaxed">
            Founded in 1994, PharmaCollege has stood as a beacon of pharmaceutical excellence for three decades, fostering world-class researchers and healthcare practitioners.
          </p>
        </div>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <img src="https://picsum.photos/id/1070/1600/900" className="w-full h-full object-cover grayscale" alt="Background" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img src="https://picsum.photos/id/1073/800/800" className="rounded-[3rem] shadow-2xl" alt="College History" />
              <div className="absolute -bottom-10 -right-10 bg-teal-600 p-12 rounded-[3rem] text-white shadow-2xl hidden md:block">
                <p className="text-4xl font-black mb-1">30+</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Years of Heritage</p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">Our rich history and commitment to quality education.</h2>
              <div className="prose prose-lg text-slate-600 max-w-none">
                <p>
                  PharmaCollege was established with a singular vision: to bridge the gap between complex pharmacological theory and real-world clinical application. Since our inception, we have expanded from a small training center to a multi-disciplinary campus with international research partnerships.
                </p>
                <p>
                  Our curriculum is continuously evolved in collaboration with industry giants like Pfizer, GSK, and Novartis, ensuring our graduates are not just ready for the industry, but are pioneers within it.
                </p>
                <p>
                  We believe in holistic development, combining rigorous laboratory work with ethical grounding and patient communication skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
