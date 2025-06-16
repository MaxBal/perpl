import React, { createContext, useContext, useState } from "react";

export interface ModalState {
  title: string;
  body: React.ReactNode;
}

export function useModalProvider() {
  const [state, setState] = useState<ModalState | null>(null);
  const open  = (title: string, body: React.ReactNode) => setState({ title, body });
  const close = () => setState(null);
  return { state, open, close };
}

export const ModalCtx = createContext<ReturnType<typeof useModalProvider>>({
  state: null, open: () => {}, close: () => {}
});
export const useModal = () => useContext(ModalCtx);