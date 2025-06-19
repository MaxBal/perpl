"use client";

import React from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";

const modalBaseClasses =
  "sm:max-w-[480px] w-full rounded-2xl p-6 bg-white dark:bg-neutral-900";

interface SizeDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SizeDetailsModal: React.FC<SizeDetailsModalProps> = ({
  open,
  onOpenChange,
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <AnimatePresence>
      {open && (
        <DialogContent
          asChild
          forceMount
          className={cn(
            modalBaseClasses,
            "max-h-[80vh] overflow-y-auto flex flex-col gap-4"
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.25 }}
          >
            {/* header */}
            <header className="flex items-start justify-between">
              <h2 className="text-lg font-semibold leading-tight">
                Детально про розміри
              </h2>
              <DialogClose asChild>
                <button
                  aria-label="Закрити"
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  ✕
                </button>
              </DialogClose>
            </header>

            {/* body */}
            <section className="space-y-4 leading-relaxed">
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-[#00d1b3] text-white rounded-full flex items-center justify-center text-sm font-bold">S</span>
                    Розмір S (40×30×30 см)
                  </h3>
                  <p className="text-sm text-gray-600">
                    Ідеально підходить для компактних автомобілів та невеликих багажників. 
                    Підходить для: Volkswagen Polo, Skoda Fabia, Renault Clio.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-[#00d1b3] text-white rounded-full flex items-center justify-center text-sm font-bold">M</span>
                    Розмір M (50×30×30 см)
                  </h3>
                  <p className="text-sm text-gray-600">
                    Найпопулярніший розмір для середнього класу автомобілів. 
                    Підходить для: Toyota Camry, Honda Accord, Volkswagen Passat.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-[#00d1b3] text-white rounded-full flex items-center justify-center text-sm font-bold">L</span>
                    Розмір L (60×30×30 см)
                  </h3>
                  <p className="text-sm text-gray-600">
                    Для великих седанів та універсалів з просторими багажниками. 
                    Підходить для: BMW 5 Series, Mercedes E-Class, Audi A6.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-[#00d1b3] text-white rounded-full flex items-center justify-center text-sm font-bold">XL</span>
                    Розмір XL (80×30×30 см)
                  </h3>
                  <p className="text-sm text-gray-600">
                    Для великих SUV та кросоверів з максимальним простором. 
                    Підходить для: BMW X5, Mercedes GLE, Audi Q7, Toyota Land Cruiser.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="flex items-start gap-2 text-sm">
                  <Info className="mt-0.5 shrink-0 text-[#00d1b3]" size={16} />
                  <span>
                    <strong>Порада:</strong> Якщо вагаєтесь між двома розмірами — оберіть більший. 
                    Наш менеджер уточнить габарити вашого багажника перед виробництвом.
                  </span>
                </p>
              </div>
            </section>

            {/* footer */}
            <DialogClose asChild>
              <Button variant="default" className="mt-6 w-full bg-[#00d1b3] hover:bg-[#00b8a0] text-white">
                Закрити
              </Button>
            </DialogClose>
          </motion.div>
        </DialogContent>
      )}
    </AnimatePresence>
  </Dialog>
);

export default SizeDetailsModal;