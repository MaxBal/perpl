"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { ReactNode, useEffect } from "react";

interface Props {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  title: string;
  children: ReactNode;
}

export default function ModalBase({ open, onOpenChange, title, children }: Props) {
  /* блокируем скролл бэкграунда */
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        /* full-width на моб, 560 px cap на десктопе */
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   w-full max-w-[560px] sm:rounded-lg bg-white shadow-lg
                   focus-visible:outline-none"
      >
        {/* --- ХЕДЕР 56 px, без линии, всегда виден --- */}
        <div className="sticky top-0 z-20 flex h-14 items-center justify-between px-6 bg-white">
          <h2 className="text-xl font-semibold select-none">{title}</h2>
          <button
            onClick={() => onOpenChange(false)}
            aria-label="Close modal"
            className="-m-2 p-2 text-black"
          >
            <X className="w-6 h-6" strokeWidth="2" />
          </button>
        </div>

        {/* --- КОНТЕНТ, скролл --- */}
        <div className="overflow-y-auto px-6 pt-4 pb-6 max-h-[calc(80vh-56px)]">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}