"use client";
import React, { useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  PlusCircle,
  Factory,
  Cpu,
  Ruler,
  Sparkles,
} from "lucide-react";
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
  onAddLogo,
}) => {
  /* ————————————————————————————————————————
     Motion setup (+ reduced-motion fallback)
  ———————————————————————————————————————— */
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const modalVariants = prefersReducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: "100%" },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: "100%" },
      };

  const transition = prefersReducedMotion
    ? { duration: 0.2 }
    : { type: "spring", stiffness: 320, damping: 28 };

  /* ————————————————————————————————————————
     Callbacks
  ———————————————————————————————————————— */
  const handleAddLogo = useCallback(() => {
    onAddLogo?.(material);
  }, [onAddLogo, material]);

  /* ————————————————————————————————————————
     Derived data
  ———————————————————————————————————————— */
  const materialText = material === "steel" ? "нержавіюча сталь" : "латунь";
  const title = `Лого ${brandName} (${materialText})`;

  /* ———————————————————————————————————————— */
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
              /* ——————————————————————————————————
                 Контейнер (моб = bottom sheet,
                 десктоп = центровой card)
              —————————————————————————————————— */
              className={cn(
                "logo-modal-container",
                "sm:logo-modal-desktop"
              )}
            >
              {/* Visually-hidden title for screen-readers */}
              <VisuallyHidden.Root>
                <DialogTitle>{title}</DialogTitle>
              </VisuallyHidden.Root>

              {/* ——— Header ——— */}
              <header className="flex items-start justify-between mb-6">
                <h2 className="text-2xl font-bold leading-tight pr-10">
                  {title}
                </h2>
                <DialogClose asChild>
                  <button
                    aria-label="Закрити модальне вікно"
                    className="rounded-full p-1.5 hover:bg-gray-100 transition"
                  >
                    <X size={22} />
                  </button>
                </DialogClose>
              </header>

              {/* ——— Image (16×9, no CLS) ——— */}
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg mb-6">
                <img
                  src={image}
                  alt={`Лого ${brandName} на ${materialText}`}
                  className="h-full w-full object-cover"
                  width={1280}
                  height={720}
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* ——— Specs ——— */}
              <ul className="space-y-3 text-base leading-[1.35] mb-8">
                <li className="flex gap-3">
                  <Factory className="ico" />
                  <span className="font-medium">Власне виробництво</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <Cpu className="ico" />
                  Метод виготовлення:&nbsp;фрезування
                </li>
                <li className="flex gap-3 text-gray-700">
                  <Ruler className="ico" />
                  Розміри:&nbsp;82&nbsp;×&nbsp;18&nbsp;мм
                </li>
                <li className="flex gap-3 text-gray-700">
                  <Sparkles className="ico" />
                  Висока якість
                </li>
              </ul>

              {/* ——— CTA ——— */}
              {onAddLogo && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleAddLogo}
                  className="w-full md:w-auto gap-2 font-semibold"
                >
                  <PlusCircle className="w-5 h-5" />
                  Додати лого
                </Button>
              )}
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
};

export default LogoModal;