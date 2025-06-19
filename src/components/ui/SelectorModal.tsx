import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
}

/**
 * Unified modal component for all product selectors
 * Uses the same Radix structure as InfoModal for consistency
 */
export const SelectorModal: React.FC<Props> = ({ open, onOpenChange, title, children }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-lg max-h-[80vh] rounded-lg bg-white p-0 shadow-lg">
      <div className="sticky top-0 z-20 flex h-14 items-center justify-between bg-white px-6 border-b">
        <DialogTitle className="text-[18px] leading-[28px] font-semibold">{title}</DialogTitle>
        <DialogClose className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Close">
          <X size={20} />
        </DialogClose>
      </div>
      <div className="overflow-y-auto px-6 pt-4 pb-6 text-[14px] leading-[20px] font-normal">
        {children}
      </div>
    </DialogContent>
  </Dialog>
);