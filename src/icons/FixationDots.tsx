import React from 'react';
import { cn } from '../lib/utils';

export const FixationDots: React.FC<{className?: string}> = ({className}) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
       className={cn('stroke-none', className)}>
    {/* 6 кружков: 3×2 */}
    {[0,1,2].map(i => (
      [0,1].map(j => (
        <circle key={`${i}${j}`}
                cx={4 + i*4} cy={5 + j*6} r={1.2} fill="currentColor" />
      ))
    ))}
  </svg>
);