
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { title: 'Advanced Lab', category: 'Facilities' },
    { title: 'Main Campus', category: 'Campus' },
    { title: 'Convocation', category: 'Events' },
    { title: 'Student Research', category: 'Academic' },
    { title: 'Library Wing', category: 'Facilities' },
    { title: 'Cultural Fest', category: 'Events' },
    { title: 'Auditorium', category: 'Campus' },
    { title: 'Botanical Garden', category: 'Departments' },
    { title: 'Chem Lab', category: 'Facilities' },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-black text-slate-900 mb-6">Visual Journey</h1>
            <p className="text-slate-600 text-lg">A window into our thriving pharmaceutical community.</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, i) => (
              <div key={i} className="relative group overflow-hidden rounded-[2.5rem] break-inside-avoid shadow-lg transition-all duration-500 hover:shadow-2xl">
                <img src={`https://picsum.photos/seed/gal${i}/600/${400 + (i % 3) * 100}`} className="w-full h-auto group-hover:scale-110 transition-transform duration-700" alt={img.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <span className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-1">{img.category}</span>
                  <h3 className="text-xl font-bold text-white">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
