import React, { ReactNode } from 'react';
import { useMagneticCursor } from '../hooks/useMagneticCursor';
import { useParticles } from '../hooks/useParticles';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface CursorProviderProps {
  children: ReactNode;
}

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  useMagneticCursor(false); // Cursor effect disabled
  useParticles();
  useScrollReveal();

  return <>{children}</>;
};
