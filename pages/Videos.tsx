
import React from 'react';
import { Play } from 'lucide-react';

const Videos: React.FC = () => {
  const videos = [
    { title: 'Campus Virtual Tour', duration: '5:40' },
    { title: 'Introduction to Pharmaceutics', duration: '12:15' },
    { title: 'Alumni Success Stories', duration: '8:30' },
    { title: 'A Day at PharmaCollege', duration: '4:20' },
    { title: 'Research Lab Showcase', duration: '15:10' },
    { title: 'Chairman Special Message', duration: '3:45' },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-black text-slate-900 mb-6">Video Library</h1>
            <p className="text-slate-600 text-lg">Watch our stories, lectures, and virtual facility tours.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {videos.map((vid, i) => (
              <div key={i} className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group">
                <div className="relative aspect-video">
                  <img src={`https://picsum.photos/seed/vid${i}/800/450`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={vid.title} />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-125 group-hover:bg-teal-600 transition-all duration-300">
                      <Play className="text-white fill-white w-6 h-6" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    {vid.duration}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{vid.title}</h3>
                  <p className="text-slate-500 text-sm mt-2 font-medium">Educational Series • Oct 2023</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;
