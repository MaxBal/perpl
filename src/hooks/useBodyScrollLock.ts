import { useLayoutEffect } from "react";

let lockCount = 0;              // одновременно открытых модалок
let prevOverflow = "";          // чтобы вернуть исходное значение

export const toggleBodyLock = (lock: boolean) => {
  if (lock) {
    if (lockCount === 0) {
      prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    lockCount += 1;
  } else {
    lockCount = Math.max(0, lockCount - 1);
    if (lockCount === 0) {
      document.body.style.overflow = prevOverflow;
    }
  }
};

/**
 * Лок ⟷ анлок, синхронно со state модалки.
 */
export const useBodyScrollLock = (active: boolean) => {
  useLayoutEffect(() => {
    toggleBodyLock(active);
    return () => toggleBodyLock(false);   // safety-net на размонтирование
  }, [active]);
};