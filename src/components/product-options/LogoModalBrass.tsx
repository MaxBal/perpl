import React from 'react';
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  image: string;
}

const LogoModalBrass: React.FC<Props> = ({ open, onOpenChange, title, image }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent
      className={`
        w-screen max-w-none sm:w-[90vw] sm:max-w-lg
        left-0 sm:left-1/2
        -translate-x-0 sm:-translate-x-1/2
        top-1/2 -translate-y-1/2
        rounded-none sm:rounded-xl
        bg-white
        px-4 py-6 sm:p-6
      `}
    >
      <VisuallyHidden.Root>
        <DialogTitle>{title}</DialogTitle>
      </VisuallyHidden.Root>
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <DialogClose asChild>
          <button className="p-1 rounded-full hover:bg-muted/50">
            <X size={22} />
          </button>
        </DialogClose>
      </div>

      <div className="w-full">
        <img 
          src={image} 
          alt={title}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>
    </DialogContent>
  </Dialog>
);

export default LogoModalBrass;