"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Info } from "lucide-react";
import { ProductData, Size } from "./types";

interface Props {
  product: ProductData;
  currentSize: Size;
  setCurrentSize: (size: Size) => void;
}

const SIZES = [
  { id: "S" as Size, dimensions: "S 40×30×30 см", price: 1690, oldPrice: 2000 },
  { id: "M" as Size, dimensions: "M 50×30×30 см", price: 2090, oldPrice: 2300 },
  { id: "L" as Size, dimensions: "L 60×30×30 см", price: 2290, oldPrice: 2600 },
  { id: "XL" as Size, dimensions: "XL 80×30×30 см", price: 2790, oldPrice: 3100 },
];

const SizeSelector: React.FC<Props> = ({ currentSize, setCurrentSize }) => {
  return (
    <div className="space-y-4">
      {/* Кнопки выбора размера */}
      <div className="grid grid-cols-2 gap-2">
        {SIZES.map((size) => (
          <button
            key={size.id}
            onClick={() => setCurrentSize(size.id)}
            className={`px-4 py-2.5 rounded-[12px] text-sm transition-all ${
              currentSize === size.id
                ? "bg-white border-2 border-black shadow"
                : "bg-white border border-gray-200 hover:bg-gray-50"
            }`}
          >
            <div className="flex flex-col items-start">
              <span className="text-[13px] text-gray-500">
                {size.dimensions}
              </span>
              <div className="flex items-center mt-1">
                <span className="text-[15px] font-semibold text-gray-900">
                  {size.price} ₴
                </span>
                {size.oldPrice && (
                  <span className="line-through text-gray-400 ml-1 text-[13px]">
                    {size.oldPrice} ₴
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Триггер для модалки */}
      <div className="mt-14 md:mt-8">
        <Dialog>
          <DialogTrigger asChild>
            <button className="inline-flex items-center text-gray-900 underline hover:no-underline">
              <Info className="w-4 h-4 mr-1 text-[#66d1be]" />
              Детально про розміри
            </button>
          </DialogTrigger>

          <AnimatePresence>
            <DialogContent
              asChild
              className="p-0 w-full max-w-lg md:max-w-xl"
            >
              <motion.div
                key="size-modal"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl shadow-lg w-full max-h-[80vh] flex flex-col"
              >
                {/* Заголовок и крестик */}
                <div className="relative border-b p-6">
                  <DialogTitle className="text-lg font-semibold">
                    Детально про розміри
                  </DialogTitle>
                  <DialogClose className="absolute right-6 top-6">
                    <X className="w-5 h-5 text-gray-600 hover:text-gray-800" />
                  </DialogClose>
                </div>

                {/* Содержимое */}
                <div className="overflow-y-auto p-6 space-y-4">
                  {SIZES.map((size) => (
                    <div
                      key={size.id}
                      className="bg-gray-100 rounded-xl p-4 flex flex-col gap-2"
                    >
                      <h3 className="font-medium text-base">
                        Розмір {size.id}
                      </h3>
                      <p className="text-sm text-gray-700">
                        Розміри: {size.dimensions}. Ідеально підходить для{" "}
                        {size.id === "S"
                          ? "невеликих багажників"
                          : size.id === "M"
                          ? "середніх багажників"
                          : size.id === "L"
                          ? "великих багажників"
                          : "дуже великих багажників"}
                        .
                      </p>
                    </div>
                  ))}
                </div>

                {/* Футер */}
                <DialogFooter className="border-t p-4">
                  <DialogClose asChild>
                    <Button className="bg-black text-white hover:bg-gray-900">
                      Закрити
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </motion.div>
            </DialogContent>
          </AnimatePresence>
        </Dialog>
      </div>
    </div>
  );
};

export default SizeSelector;
