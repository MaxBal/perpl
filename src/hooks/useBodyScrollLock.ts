import { useLayoutEffect } from "react";

/**
 * Абсолютная блокировка прокрутки фона:
 * 1) фиксируем <body> в текущей позиции (position: fixed + top)
 * 2) возвращаем всё на место и восстанавливаем scroll после закрытия
 */
export const useBodyScrollLock = (lock: boolean) => {
  useLayoutEffect(() => {
    if (!lock) return;

    const scrollY = window.scrollY;
    const { position, top, overflow, width } = document.body.style;

    // Фиксируем
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    // Чистим при размонтировании / закрытии
    return () => {
      document.body.style.position = position;
      document.body.style.top = top;
      document.body.style.overflow = overflow;
      document.body.style.width = width;
      window.scrollTo(0, scrollY);
    };
  }, [lock]);
};