import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface Props {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  title: string;
  children: ReactNode;
}

/** Заглушка InfoModal – подтянет Radix и не даст упасть сборке. */
const InfoModal = ({ open, onOpenChange, title, children }: Props) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-lg">
      <DialogTitle className="mb-4 font-semibold">{title}</DialogTitle>
      {children}
    </DialogContent>
  </Dialog>
);

export default InfoModal;