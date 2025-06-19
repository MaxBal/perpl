"use client";
import React from "react";
import { X } from "lucide-react";
import { Dialog, DialogPortal } from "@radix-ui/react-dialog";

interface LogoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  material: "steel" | "brass";
  brandName: string;
  image: string;
}

/**
 * Единая модалка для лого (нерж/латунь).
 */
export const LogoModal: React.FC<LogoModalProps> = ({
  open,
  onOpenChange,
  material,
  brandName,
  image,
}) => {
  const materialText = material === "steel" ? "нержавіюча сталь" : "латунь";
  const title = `Лого ${brandName} (${materialText})`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        {/* Overlay */}
        <div className="fixed inset-0 z-50 bg-black/70" />

        {/* Контейнер: общий стиль с базовой модалкой */}
        <div className="fixed inset-x-0 bottom-0 z-[60] bg-white rounded-t-[32px] md:inset-0 md:m-auto md:max-w-[640px] md:rounded-[24px]">
          <header className="flex items-center justify-between px-6 pt-4 pb-3 md:p-8 md:pb-6">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <button
              onClick={() => onOpenChange(false)}
              className="p-1.5 -mr-1.5 hover:bg-black/5 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </header>

          <section className="px-4 pb-8 md:p-8 md:pt-0 max-h-[calc(95vh-140px)] overflow-y-auto">
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow mb-6">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                width={1280}
                height={720}
              />
            </div>
            {/* при необходимости можно добавить описание */}
          </section>
        </div>
      </DialogPortal>
    </Dialog>
  );
};
