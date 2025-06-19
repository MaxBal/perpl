import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface Props {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  children: ReactNode;
  className?: string;
}

/** Простой обёртка-адаптер, чтобы старый импорт `Modal` не падал. */
const Modal = ({ open, onOpenChange, children, className }: Props) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className={className}>{children}</DialogContent>
  </Dialog>
);

export default Modal;