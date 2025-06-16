import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { cn } from '../lib/utils';

interface Props {
  navItems: Array<{ label: string; href: string; }>;
  totalQuantity: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

export const Header: React.FC<Props> = ({
  navItems,
  totalQuantity,
  onCartClick,
  onMenuClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = cn(
    'sticky top-0 z-30 transition-colors duration-200',
    isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-black'
  );

  return (
    <header className={headerClass}>
      <div className="max-w-screen-xl mx-auto h-14 px-4 flex items-center justify-between md:justify-start md:gap-12">
        <button 
          className="md:hidden w-6 h-6 flex flex-col justify-center gap-1.5"
          onClick={onMenuClick}
        >
          <span className="w-6 h-[1px] bg-white transition-transform origin-left" />
          <span className="w-6 h-[1px] bg-white transition-transform origin-left" />
        </button>

        <a href="#" className="text-xl font-bold text-white hover:text-[#00d1b3] transition-colors absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          Carzo
        </a>

        <nav className="hidden md:flex gap-12 text-sm flex-1 justify-center">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="text-white hover:text-[#00d1b3] transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button className="relative" onClick={onCartClick}>
          <ShoppingBag size={20} strokeWidth={1.5} className="text-white" />
          {totalQuantity > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#d45e4b] text-white text-xs flex items-center justify-center rounded-full">
              {totalQuantity}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};