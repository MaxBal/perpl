"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ReactNode, useEffect } from "react";

interface Props {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  title: string;
  children: ReactNode;
}

export default function ModalBase({ open, onOpenChange, title, children }: Props) {
  /* — Блокируем прокрутку фона — */
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="fixed inset-0 m-auto w-[92vw] max-w-lg max-h-[80vh] rounded-lg bg-white p-0 shadow-lg"
      >
        {/* Стики-хедер без линии, высота 56 px */}
        <div className="sticky top-0 z-10 flex h-14 items-center justify-between bg-white px-5">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={() => onOpenChange(false)}
            aria-label="Close modal"
            className="text-2xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Контент — прокручиваемый, нижний паддинг 24 px */}
        <div className="overflow-y-auto px-5 pb-6 pt-4">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}