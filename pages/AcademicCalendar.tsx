
import React from 'react';
import { Calendar as CalendarIcon, Clock, Bell } from 'lucide-react';

const AcademicCalendar: React.FC = () => {
  const events = [
    { date: 'Sep 05, 2024', title: 'Fall Semester Commencement', type: 'Academic' },
    { date: 'Oct 12, 2024', title: 'White Coat Ceremony', type: 'Ceremony' },
    { date: 'Nov 15-20, 2024', title: 'Mid-term Assessments', type: 'Exam' },
    { date: 'Dec 22, 2024', title: 'Winter Break Begins', type: 'Holiday' },
    { date: 'Jan 10, 2025', title: 'Spring Semester Registration', type: 'Administrative' },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Academic Timeline</h1>
              <p className="text-slate-600 text-lg">Stay organized and never miss a critical institutional deadline.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-3xl flex items-center space-x-4 border border-teal-100">
              <Bell className="text-teal-600 w-8 h-8" />
              <div>
                <p className="text-xs font-bold text-teal-700 uppercase tracking-widest">Next Major Event</p>
                <p className="font-bold text-slate-900">Fall Semester Registration</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            <div className="space-y-4">
              {events.map((event, i) => (
                <div key={i} className="group flex items-center justify-between p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
                  <div className="flex items-center space-x-8">
                    <div className="bg-teal-600/10 p-4 rounded-2xl text-teal-600 font-black text-xl group-hover:bg-teal-600 group-hover:text-white transition-all">
                      <CalendarIcon className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-1">{event.type}</div>
                      <h3 className="text-2xl font-bold text-slate-900">{event.title}</h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black text-slate-900">{event.date}</div>
                    <div className="text-slate-400 text-sm flex items-center justify-end">
                      <Clock className="w-4 h-4 mr-1" /> All Day Event
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicCalendar;
