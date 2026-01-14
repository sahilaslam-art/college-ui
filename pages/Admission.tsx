
import React from 'react';
import { CheckCircle2, FileText, Calendar, Clock } from 'lucide-react';

const Admission: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-teal-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Admissions 2024-2025</span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">Join Our Global <br/>Cohort Today</h1>
          <p className="text-slate-400 text-xl max-w-2xl font-light">
            Start your journey toward becoming a leader in pharmacy. We value academic excellence, scientific curiosity, and a commitment to service.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10"><img src="https://picsum.photos/id/102/1000/1000" className="w-[800px]" alt="" /></div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Eligibility Criteria</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { title: 'Academic Record', desc: 'Minimum 75% in Science stream (PCMB) for undergraduates.' },
                    { title: 'Entrance Exams', desc: 'Valid score in the National Entrance Test for Pharmacy.' },
                    { title: 'English Proficiency', desc: 'IELTS/TOEFL may be required for international applicants.' },
                    { title: 'Clinical Interest', desc: 'Demonstrated passion for healthcare and medical research.' },
                  ].map((item, i) => (
                    <div key={i} className="flex space-x-4">
                      <CheckCircle2 className="text-teal-600 w-6 h-6 shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Application Roadmap</h2>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Submit Online Form', desc: 'Register via our admission portal and upload required documents.' },
                    { step: '02', title: 'Counseling Session', desc: 'Meet with our faculty advisors to discuss your career aspirations.' },
                    { step: '03', title: 'Entrance Assessment', desc: 'Qualify the college-specific aptitude and subject test.' },
                    { step: '04', title: 'Document Verification', desc: 'In-person verification of academic transcripts and ID.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                      <span className="text-4xl font-black text-teal-600/20">{item.step}</span>
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-teal-600 p-8 rounded-[3rem] text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Key Deadlines</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Clock className="w-5 h-5 text-teal-200" />
                    <div>
                      <p className="text-xs uppercase font-bold text-teal-200">Application Close</p>
                      <p className="font-bold">August 15, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Calendar className="w-5 h-5 text-teal-200" />
                    <div>
                      <p className="text-xs uppercase font-bold text-teal-200">Session Start</p>
                      <p className="font-bold">September 05, 2024</p>
                    </div>
                  </div>
                </div>
                <button className="mt-10 w-full py-4 bg-white text-teal-700 font-bold rounded-2xl hover:bg-teal-50 transition-colors">
                  Apply Now
                </button>
              </div>

              <div className="bg-slate-100 p-8 rounded-[3rem] border border-slate-200">
                <FileText className="w-10 h-10 text-slate-400 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">Brochure 2024</h3>
                <p className="text-slate-600 text-sm mb-6">Download the detailed prospectus containing course info, fee structure, and faculty profiles.</p>
                <button className="text-teal-600 font-bold hover:underline">Download PDF</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
