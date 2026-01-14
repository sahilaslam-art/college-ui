
import React from 'react';
import { Target, Lightbulb, Heart } from 'lucide-react';

const VisionMission: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-black text-slate-900 mb-6">Our North Star</h1>
            <div className="w-24 h-1.5 bg-teal-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-slate-600 text-lg leading-relaxed italic">
                "To be a global leader in pharmaceutical education, setting the benchmark for research-driven learning and ethical healthcare leadership that transforms global wellness."
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 shrink-0"></span>
                  <span>Deliver innovative academic programs that blend cutting-edge technology with traditional expertise.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 shrink-0"></span>
                  <span>Foster a culture of high-impact research focused on drug discovery and affordable therapeutics.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 shrink-0"></span>
                  <span>Inculcate deep-rooted clinical ethics and empathy in every student.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
