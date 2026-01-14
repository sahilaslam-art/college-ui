import { useEffect, useRef } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export const useMagneticCursor = (enabled: boolean = false) => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<CursorPosition>({ x: 0, y: 0 });
  const targetRef = useRef<CursorPosition>({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;

    // Create cursor elements
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(dot);
    dotRef.current = dot;

    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(ring);
    ringRef.current = ring;

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    // Animate cursor with smooth follow
    const animateCursor = () => {
      const speed = 0.15;
      positionRef.current.x += (targetRef.current.x - positionRef.current.x) * speed;
      positionRef.current.y += (targetRef.current.y - positionRef.current.y) * speed;

      if (dotRef.current) {
        dotRef.current.style.left = `${positionRef.current.x}px`;
        dotRef.current.style.top = `${positionRef.current.y}px`;
        dotRef.current.style.transform = 'translate(-50%, -50%)';
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${positionRef.current.x}px`;
        ringRef.current.style.top = `${positionRef.current.y}px`;
        ringRef.current.style.transform = 'translate(-50%, -50%)';
      }

      requestAnimationFrame(animateCursor);
    };

    // Handle magnetic effect on hover
    const handleElementHover = (e: MouseEvent) => {
      const element = e.target as HTMLElement;
      
      if (element.classList.contains('magnetic-btn') || 
          element.closest('.magnetic-btn') ||
          element.tagName === 'A' ||
          element.tagName === 'BUTTON') {
        
        if (ringRef.current) {
          ringRef.current.style.width = '50px';
          ringRef.current.style.height = '50px';
          ringRef.current.style.borderColor = '#06d6d0';
          ringRef.current.style.boxShadow = '0 0 20px rgba(6, 214, 208, 0.8)';
        }
        
        if (dotRef.current) {
          dotRef.current.style.width = '12px';
          dotRef.current.style.height = '12px';
          dotRef.current.style.boxShadow = '0 0 25px rgba(6, 214, 208, 1)';
        }
      }
    };

    const handleElementLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '30px';
        ringRef.current.style.height = '30px';
        ringRef.current.style.borderColor = '#14b8a6';
        ringRef.current.style.boxShadow = '0 0 10px rgba(20, 184, 166, 0.5)';
      }
      
      if (dotRef.current) {
        dotRef.current.style.width = '8px';
        dotRef.current.style.height = '8px';
        dotRef.current.style.boxShadow = '0 0 15px rgba(20, 184, 166, 0.8)';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseleave', handleElementLeave);
    animateCursor();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseleave', handleElementLeave);
      if (dotRef.current) document.body.removeChild(dot);
      if (ringRef.current) document.body.removeChild(ring);
      document.body.style.cursor = 'auto';
    };
  }, [enabled]);
};
