import React from 'react';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ label: string; href: string; }>;
}

export const MobileMenu: React.FC<Props> = ({ isOpen, onClose, navItems }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 md:hidden">
      <div className="flex flex-col h-full">
        <div className="h-14 px-4 flex items-center justify-between border-b border-white/10">
          <span className="text-xl font-bold text-white hover:text-[#00d1b3] transition-colors">
            Carzo
          </span>
          <button 
            onClick={onClose}
            className="text-white hover:text-[#00d1b3] transition-colors"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-4 text-lg font-medium text-white hover:text-[#00d1b3] transition-colors"
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="px-4 py-8 border-t border-white/10">
          <div className="flex items-center justify-center">
            <span className="text-sm text-white">Designed and manufactured in Ukraine</span>
          </div>
        </div>
      </div>
    </div>
  );
};