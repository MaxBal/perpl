"use client";
import React, { useCallback } from 'react';
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { motion, AnimatePresence } from "framer-motion";
import { X, PlusCircle, Factory, Cpu, Ruler, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

interface LogoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  material: "steel" | "brass";
  brandName: string;
  image: string;
  onAddLogo?: (material: "steel" | "brass") => void;
}

const LogoModal: React.FC<LogoModalProps> = ({ 
  open, 
  onOpenChange, 
  material, 
  brandName, 
  image, 
  onAddLogo 
}) => {
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Optimized animation variants
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

  // Optimized callback for CTA button (INP < 200ms)
  const handleAddLogo = useCallback(() => {
    if (onAddLogo) {
      onAddLogo(material);
    }
  }, [onAddLogo, material]);

  const materialText = material === "steel" ? "нержавіюча сталь" : "латунь";
  const title = `Лого ${brandName} (${materialText})`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <AnimatePresence mode="wait">
        {open && (
          <DialogContent asChild>
            <motion.div
              variants={modalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
              className={cn(
                "fixed z-50 bg-white dark:bg-zinc-900 shadow-2xl",
                "dialog-sheet md:dialog-center",
                // Mobile styles
                "inset-x-0 bottom-0 max-h-[80vh] overflow-y-auto rounded-t-2xl p-4",
                // Desktop styles  
                "md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2",
                "md:max-w-[480px] md:w-[90vw] md:max-h-none md:rounded-2xl md:p-6"
              )}
            >
              <VisuallyHidden.Root>
                <DialogTitle>{title}</DialogTitle>
              </VisuallyHidden.Root>
              
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl md:text-2xl font-bold pr-8 text-gray-900 dark:text-white">
                  {title}
                </h2>
                <DialogClose asChild>
                  <button 
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                    aria-label="Закрити модальне вікно"
                  >
                    <X size={22} className="text-gray-500 dark:text-gray-400" />
                  </button>
                </DialogClose>
              </div>

              {/* Content */}
              <div className="space-y-5">
                {/* Optimized Image with proper aspect ratio to prevent CLS */}
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={image}
                    alt={`Лого ${brandName} на ${materialText}`}
                    className="w-full h-full object-cover"
                    width={1280}
                    height={720}
                    loading="eager"
                    decoding="async"
                  />
                </div>
                
                {/* Specifications List */}
                <ul className="space-y-2 text-[15px] leading-5">
                  <li className="flex items-start gap-2">
                    <Factory className="w-5 h-5 shrink-0 text-emerald-600" />
                    <span className="font-medium text-gray-900 dark:text-white">
                      Власне&nbsp;виробництво
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <Cpu className="w-5 h-5 shrink-0 text-emerald-600" />
                    Метод&nbsp;виготовлення:&nbsp;фрезування
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <Ruler className="w-5 h-5 shrink-0 text-emerald-600" />
                    Розміри:&nbsp;ширина&nbsp;82 мм&nbsp;×&nbsp;18 мм
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <Sparkles className="w-5 h-5 shrink-0 text-emerald-600" />
                    Висока&nbsp;якість
                  </li>
                </ul>

                {/* CTA Button */}
                {onAddLogo && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full md:w-auto gap-2 font-semibold"
                    onClick={handleAddLogo}
                  >
                    <PlusCircle className="w-5 h-5" />
                    Додати&nbsp;лого
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

export default LogoModal;