
import React from 'react';

const Fees: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Fee Structure 2024-2025</h1>
            <p className="text-slate-600 text-lg">Detailed breakdown of tuition, laboratory, and campus service fees.</p>
          </div>

          <div className="overflow-x-auto rounded-[3rem] shadow-xl border border-slate-100">
            <table className="w-full text-left bg-white">
              <thead>
                <tr className="bg-teal-600 text-white">
                  <th className="px-10 py-6 text-sm font-bold uppercase tracking-widest">Program Name</th>
                  <th className="px-10 py-6 text-sm font-bold uppercase tracking-widest">Tuition Fee (p.a)</th>
                  <th className="px-10 py-6 text-sm font-bold uppercase tracking-widest">Lab/Dev Fee</th>
                  <th className="px-10 py-6 text-sm font-bold uppercase tracking-widest">Total Annual Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['B.Pharm (Bachelor of Pharmacy)', '$12,500', '$2,200', '$14,700'],
                  ['M.Pharm (Pharmacology)', '$15,800', '$3,500', '$19,300'],
                  ['Pharm.D (Doctor of Pharmacy)', '$18,200', '$4,000', '$22,200'],
                  ['PhD in Pharmaceutical Sciences', '$20,500', '$5,200', '$25,700'],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-teal-50 transition-colors">
                    <td className="px-10 py-6 font-bold text-slate-900">{row[0]}</td>
                    <td className="px-10 py-6 text-slate-600">{row[1]}</td>
                    <td className="px-10 py-6 text-slate-600">{row[2]}</td>
                    <td className="px-10 py-6 font-black text-teal-600">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center bg-slate-50 p-12 rounded-[4rem]">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Payment Methods</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span> Secure online payment via Student Portal</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span> Bank wire transfers (Domestic/International)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span> Flexible 3-installment plan (available on request)</li>
              </ul>
            </div>
            <div className="bg-teal-600 p-10 rounded-[3rem] text-white">
              <h3 className="text-2xl font-bold mb-4">Financial Aid</h3>
              <p className="mb-8 opacity-80 leading-relaxed">We offer merit-based scholarships covering up to 40% of the tuition fee for students with exceptional academic records.</p>
              <button className="px-8 py-4 bg-white text-teal-700 font-bold rounded-2xl hover:bg-teal-50 transition-all">Check Eligibility</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fees;
