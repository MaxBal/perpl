import { useLayoutEffect } from "react";

/**
 * Блокирует scroll <body>, пока active === true.
 * Используем useLayoutEffect, чтобы исключить "скачок" контента.
 */
export const useBodyScrollLock = (active: boolean) => {
  useLayoutEffect(() => {
    if (!active) return;

    const { overflow, touchAction } = document.body.style;
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.touchAction = touchAction;
    };
  }, [active]);
};