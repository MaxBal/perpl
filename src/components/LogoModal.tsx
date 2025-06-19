import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface Props {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  title: string;
  children: ReactNode;
}

/** Упрощённая версия старого LogoModal – достаточно для сборки. */
const LogoModal = ({ open, onOpenChange, title, children }: Props) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-md">
      <DialogTitle className="mb-4 text-center font-semibold">{title}</DialogTitle>
      {children}
    </DialogContent>
  </Dialog>
);

export default LogoModal;