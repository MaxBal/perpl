"use client";
import * as React from "react";
import { cn } from "@/lib/cn";

interface RadioItemProps {
  value: string;
  checked: boolean;
  onCheckedChange: () => void;
  children: React.ReactNode;
  className?: string;
}

export const RadioItem: React.FC<RadioItemProps> = ({ 
  value, 
  checked, 
  onCheckedChange, 
  children, 
  className 
}) => {
  return (
    <label className={cn("flex items-center justify-between cursor-pointer", className)}>
      <span className="text-sm">{children}</span>
      <div className="relative">
        <input
          type="radio"
          value={value}
          checked={checked}
          onChange={onCheckedChange}
          className="sr-only"
        />
        <div className={cn(
          "w-5 h-5 rounded-full border-2 transition-colors",
          checked 
            ? "border-[#00d1b3] bg-[#00d1b3]" 
            : "border-gray-300 bg-white"
        )}>
          {checked && (
            <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          )}
        </div>
      </div>
    </label>
  );
};