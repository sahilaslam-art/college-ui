
import React from 'react';

const ChairmanMessage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:sticky md:top-32">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&h=800&auto=format&fit=crop" 
                className="rounded-[2.5rem] shadow-2xl mb-6 object-cover aspect-[3/4]" 
                alt="Dashrath Prasad Ramnandan Pandey" 
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-900">Dashrath Prasad Ramnandan Pandey</h3>
                <p className="text-teal-600 font-bold uppercase text-xs tracking-widest">Chairman & Founder</p>
              </div>
            </div>
            <div className="md:col-span-2 space-y-8">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Empowering Healthcare Through Education</h1>
              <div className="prose prose-lg text-slate-600 max-w-none">
                <p className="first-letter:text-7xl first-letter:font-black first-letter:text-teal-600 first-letter:mr-3 first-letter:float-left">
                  Welcome to PharmaCollege. As the landscape of global healthcare undergoes rapid transformation, the role of a pharmacist has never been more critical. We are no longer just dispensers of medicine; we are clinicians, researchers, and patient advocates.
                </p>
                <p>
                  At this institution, we pride ourselves on a culture of inquiry. We encourage our students to look beyond the textbook and into the molecular architecture of the future. Our state-of-the-art facilities are designed not just for learning, but for discovery.
                </p>
                <p>
                  Our goal is simple yet profound: to produce graduates who carry with them the scientific rigor to innovate and the compassion to heal. I invite you to join our community and contribute your unique talents to the noble profession of pharmaceutical sciences.
                </p>
                <p className="italic font-bold text-slate-900 pt-8">
                  "Innovating for a Healthier Tomorrow."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChairmanMessage;
