"use client";
import React from "react";

export type ColorCode =
  | "black"
  | "black-grey"
  | "black-blue"
  | "black-red"
  | "brown"
  | "beige";

interface Props {
  value: ColorCode | null;
  onChange: (c: ColorCode) => void;
}

const COLORS: { id: ColorCode; title: string; style: string }[] = [
  { id: "black",      title: "Чорний",        style: "bg-black" },
  { id: "black-grey", title: "Чорний/сірий", style: "bg-[linear-gradient(135deg,#000_50%,#c8c6cb_50%)]" },
  { id: "black-blue", title: "Чорний/синій", style: "bg-[linear-gradient(135deg,#000_50%,#005bff_50%)]" },
  { id: "black-red",  title: "Чорний/червоний", style: "bg-[linear-gradient(135deg,#000_50%,#e30900_50%)]" },
  { id: "brown",      title: "Коричневий",    style: "bg-[#8c4a34]" },
  { id: "beige",      title: "Бежевий",       style: "bg-[#d7b68d]" },
];

export const ColorSwatches: React.FC<Props> = ({ value, onChange }) => {
  // Auto-select first color if none selected
  React.useEffect(() => {
    if (!value) {
      onChange(COLORS[0].id);
    }
  }, [value, onChange]);

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-sm font-medium text-gray-900">Колір:</span>
      <div className="flex gap-2">
        {COLORS.map(({ id, title, style }) => (
          <button
            key={id}
            aria-label={title}
            title={title}
            onClick={() => onChange(id)}
            className={`w-7 h-7 sm:w-6 sm:h-6 rounded-full border border-gray-300 cursor-pointer transition-all ${style}
              ${value === id ? "ring-2 ring-black ring-offset-1" : "hover:scale-105"}`}
          />
        ))}
      </div>
    </div>
  );
};