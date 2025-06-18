"use client";
import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ value, onValueChange, children, className }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedChild = React.Children.toArray(children).find((child: any) => 
    child.props?.value === value
  ) as React.ReactElement;

  return (
    <div ref={selectRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-12 px-4 border border-gray-300 rounded-[14px] text-sm focus:border-[#00d1b3] focus:ring-1 focus:ring-[#00d1b3] outline-none bg-white flex items-center justify-between"
      >
        <span>{selectedChild?.props?.children || 'Select...'}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-[14px] shadow-lg z-50 max-h-60 overflow-y-auto">
          {React.Children.map(children, (child: any) => (
            <button
              key={child.props.value}
              type="button"
              onClick={() => {
                onValueChange(child.props.value);
                setIsOpen(false);
              }}
              className={cn(
                "w-full px-4 py-3 text-left text-sm hover:bg-gray-50 first:rounded-t-[14px] last:rounded-b-[14px]",
                child.props.value === value && "bg-[#00d1b3]/10 text-[#00d1b3]"
              )}
            >
              {child.props.children}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

export const SelectItem: React.FC<SelectItemProps> = ({ children }) => {
  return <>{children}</>;
};