"use client";
import { ReactNode, useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

export default function SimpleModal({ open, onClose, children, title }: Props) {
  /* ─── Scroll-lock ─── */
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* card */}
      <div
        className="relative z-10 w-[92vw] max-w-lg max-h-[80vh]
                   rounded-lg bg-white shadow-lg
                   flex flex-col"
      >
        {/* header – 56 px */}
        <div className="flex h-14 items-center justify-between px-6 shrink-0">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            aria-label="Закрыть"
            className="-m-2 p-2 text-2xl leading-none"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* body – внутренний скролл */}
        <div
          className="overflow-y-auto px-6 pb-6 pt-4 flex-grow
                     text-[15px] leading-5 font-normal space-y-4"
        >
          {children}
        </div>
      </div>
    </div>
  );
}