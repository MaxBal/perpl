import { useEffect } from "react";

export function useFocusTrap(containerRef: React.RefObject<HTMLElement>, isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const focusable = containerRef.current.querySelectorAll<HTMLElement>(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const prev = document.activeElement as HTMLElement;

    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    first?.focus();
    document.addEventListener("keydown", keyHandler);

    return () => {
      document.removeEventListener("keydown", keyHandler);
      prev?.focus();
    };
  }, [isOpen, onClose]);
}