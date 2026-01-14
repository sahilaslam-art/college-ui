import { useEffect } from 'react';

export const useParticles = () => {
  useEffect(() => {
    const createParticles = (e: MouseEvent) => {
      const particleCount = 5;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const angle = (i / particleCount) * Math.PI * 2;
        const velocity = 5 + Math.random() * 5;
        const tx = Math.cos(angle) * velocity * 20;
        const ty = Math.sin(angle) * velocity * 20;
        
        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
          document.body.removeChild(particle);
        }, 1000);
      }
    };

    document.addEventListener('click', createParticles);
    
    return () => {
      document.removeEventListener('click', createParticles);
    };
  }, []);
};
