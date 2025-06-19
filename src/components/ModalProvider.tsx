import { createContext, useContext, useState, ReactNode } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ModalCtx {
  open: (content: ReactNode) => void;
  close: () => void;
}

const Ctx = createContext<ModalCtx | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<ReactNode>(null);

  return (
    <Ctx.Provider value={{ open: setContent, close: () => setContent(null) }}>
      {children}
      <Dialog open={!!content} onOpenChange={(o) => !o && setContent(null)}>
        <DialogContent className="max-w-lg p-0">{content}</DialogContent>
      </Dialog>
    </Ctx.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useModal must be used inside <ModalProvider>");
  return ctx;
};