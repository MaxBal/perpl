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
  { id: "black",      title: "Чёрный",        style: "bg-black" },
  { id: "black-grey", title: "Чёрный/серый", style: "bg-[linear-gradient(135deg,#000_50%,#c8c6cb_50%)]" },
  { id: "black-blue", title: "Чёрний/синий", style: "bg-[linear-gradient(135deg,#000_50%,#005bff_50%)]" },
  { id: "black-red",  title: "Чёрный/красн.", style: "bg-[linear-gradient(135deg,#000_50%,#e30900_50%)]" },
  { id: "brown",      title: "Коричневый",    style: "bg-[#8c4a34]" },
  { id: "beige",      title: "Бежевый",       style: "bg-[#d7b68d]" },
];

export const ColorSwatches: React.FC<Props> = ({ value, onChange }) => (
  <div className="space-y-3">
    <h3 className="text-sm font-medium text-gray-900">Оберіть колір</h3>
    <div className="flex gap-3">
      {COLORS.map(({ id, title, style }) => (
        <button
          key={id}
          aria-label={title}
          title={title}
          onClick={() => onChange(id)}
          className={`relative h-10 w-10 rounded-full border-2 border-gray-200 ${style} transition-all hover:scale-105
            ${value === id ? "ring-2 ring-[#00d1b3] ring-offset-2" : ""}`}
        />
      ))}
    </div>
  </div>
);