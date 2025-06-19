import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X } from 'lucide-react';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Unified modal component that matches the InfoModal structure
 * Used across all product option selectors for consistency
 */
export const UnifiedModal: React.FC<Props> = ({ 
  open, 
  onOpenChange, 
  title, 
  children, 
  className = "" 
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`max-w-lg ${className}`}>
        <div className="sticky top-0 z-10 flex h-14 items-center justify-between px-6 bg-white">
          <DialogTitle className="text-[20px] leading-[28px] font-semibold">
            {title}
          </DialogTitle>
          <DialogClose className="-m-2 p-2 text-2xl leading-none hover:bg-gray-100 rounded-full transition-colors" aria-label="Close">
            <X size={20} />
          </DialogClose>
        </div>
        <div className="overflow-y-auto px-6 pt-4 pb-6 text-[15px] leading-5 font-normal">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};