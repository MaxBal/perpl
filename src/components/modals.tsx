import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useFocusTrap } from "../hooks/useFocusTrap";

interface Props {
  state: { title: string; body: React.ReactNode } | null;
  onClose: () => void;
}

export default function Modal({ state, onClose }: Props) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  /* ——— Состояние открытия ——— */
  useEffect(() => setOpen(!!state), [state]);

  /* ——— Блокируем фон при открытом модальном окне ——— */
  useEffect(() => {
    if (open) {
      document.documentElement.classList.add("overflow-hidden", "touch-none"); // iOS-fix
    } else {
      document.documentElement.classList.remove("overflow-hidden", "touch-none");
    }
    return () =>
      document.documentElement.classList.remove(
        "overflow-hidden",
        "touch-none"
      );
  }, [open]);

  useFocusTrap(modalRef, open, onClose);

  if (!state) return null;

  const hide = () => {
    setOpen(false);
    setTimeout(onClose, 300);
  };

  return createPortal(
    <>
      {/* Overlay */}
      <div
        onClick={hide}
        className={`fixed inset-0 z-50 bg-black/70 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* ——— Mobile: bottom-sheet ——— */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`md:hidden fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-[32px] transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ height: "calc(95vh - 56px)" }}
      >
        <header className="flex items-center justify-between px-6 pt-4 pb-3">
          <h2 id="modal-title" className="text-2xl font-semibold">
            {state.title}
          </h2>
          <button
            onClick={hide}
            aria-label="Close modal"
            className="p-1.5 -mr-1.5 hover:bg-black/5 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </header>

        <section className="flex-1 px-4 pb-8 overflow-y-auto">
          {state.body}
        </section>
      </div>

      {/* ——— Desktop: centered card ——— */}
      <div className="hidden md:flex fixed inset-0 z-50 items-center justify-center">
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className={`relative w-full max-w-[640px] bg-white rounded-[24px] transition-all duration-300 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <header className="flex items-center justify-between p-8 pb-6">
            <h2 id="modal-title" className="text-2xl font-semibold">
              {state.title}
            </h2>
            <button
              onClick={hide}
              aria-label="Close modal"
              className="p-1.5 -mr-1.5 hover:bg-black/5 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </header>

          <section className="overflow-y-auto max-h-[calc(100vh-200px)] p-8 pt-0">
            {state.body}
          </section>
        </div>
      </div>
    </>,
    document.body
  );
}
