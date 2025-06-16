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
  
  useEffect(() => setOpen(!!state), [state]);
  useFocusTrap(modalRef, open, onClose);

  if (typeof document === "undefined" || !state) return null;

  const hide = () => {
    setOpen(false);
    setTimeout(onClose, 300);
  };

  return createPortal(
    <>
      <div
        onClick={hide}
        className={`fixed inset-0 z-50 bg-black/70 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
      />
      {/* mobile: bottom sheet */}
      <div 
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`md:hidden fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-[32px] transition-transform duration-300 ${
          open ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ height: 'calc(95vh - 56px)' }}
      >
        <div className="h-full overflow-hidden flex flex-col">
          <div className="px-6 pt-4 pb-3">
            <div className="flex items-center justify-between">
              <h2 id="modal-title" className="text-2xl font-semibold">{state.title}</h2>
              <button 
                onClick={hide}
                aria-label="Close modal"
                className="p-1.5 -mr-1.5 hover:bg-black/5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          <div className="flex-1 px-4 pb-8 overflow-y-auto">
            {state.body}
          </div>
        </div>
      </div>
      {/* desktop: centered modal */}
      <div className="hidden md:flex fixed inset-0 z-50 items-center justify-center">
        <div 
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className={`relative w-full max-w-[640px] bg-white rounded-[24px] transition-all duration-300 ${
            open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 id="modal-title" className="text-2xl font-semibold">{state.title}</h2>
              <button 
                onClick={hide}
                aria-label="Close modal"
                className="p-1.5 -mr-1.5 hover:bg-black/5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
              {state.body}
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}