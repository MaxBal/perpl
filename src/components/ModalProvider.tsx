import { createContext, useContext, useState, ReactNode } from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";

interface ModalCtx {
  open: (title: string, content: ReactNode) => void;
  close: () => void;
}

const Ctx = createContext<ModalCtx | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<ReactNode>(null);

  const open = (modalTitle: string, modalContent: ReactNode) => {
    setTitle(modalTitle);
    setContent(modalContent);
  };

  const close = () => {
    setTitle("");
    setContent(null);
  };

  return (
    <Ctx.Provider value={{ open, close }}>
      {children}
      <Drawer open={!!content} onOpenChange={(o) => !o && close()}>
        <DrawerContent className="max-w-lg p-0" title={title}>
          {content}
        </DrawerContent>
      </Drawer>
    </Ctx.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useModal must be used inside <ModalProvider>");
  return ctx;
};