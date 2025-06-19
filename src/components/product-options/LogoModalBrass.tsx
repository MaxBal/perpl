import React from 'react';
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { motion, AnimatePresence } from "framer-motion";
import { X, PlusCircle } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  image: string;
  onAddLogo?: () => void;
}

const LogoModalBrass: React.FC<Props> = ({ open, onOpenChange, title, image, onAddLogo }) => {
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const modalVariants = prefersReducedMotion 
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
      }
    : {
        initial: { opacity: 0, y: "100%" },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: "100%" }
      };

  const transition = prefersReducedMotion
    ? { duration: 0.2 }
    : { type: "spring", stiffness: 300, damping: 24 };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <DialogContent asChild>
            <motion.div
              variants={modalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
              className={`
                fixed z-50 bg-white shadow-xl
                
                /* Mobile styles */
                inset-x-0 bottom-0 max-h-[80vh] overflow-y-auto
                rounded-t-2xl p-4
                
                /* Desktop styles */
                md:inset-auto md:left-1/2 md:top-1/2 
                md:-translate-x-1/2 md:-translate-y-1/2
                md:max-w-[480px] md:w-[90vw] md:max-h-none
                md:rounded-2xl md:p-6
              `}
            >
              <VisuallyHidden.Root>
                <DialogTitle>{title}</DialogTitle>
              </VisuallyHidden.Root>
              
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold pr-8">{title}</h2>
                <DialogClose asChild>
                  <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                    <X size={22} />
                  </button>
                </DialogClose>
              </div>

              <div className="space-y-4">
                <img 
                  src={image} 
                  alt="Лого з латуні"
                  className="aspect-video w-full rounded-xl object-cover shadow-lg"
                  width={1280}
                  height={720}
                />
                
                <ul className="flex flex-col gap-1 text-base leading-5 text-gray-700">
                  <li>Власне виробництво</li>
                  <li>Метод виготовлення: фрезування</li>
                  <li>Розміри: ширина 82 мм × 18 мм</li>
                  <li>Висока якість</li>
                </ul>

                {onAddLogo && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full md:w-auto flex items-center justify-center gap-2"
                    onClick={onAddLogo}
                  >
                    <PlusCircle className="w-5 h-5" />
                    Додати лого
                  </Button>
                )}
              </div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
};

export default LogoModalBrass;