import { Info } from 'lucide-react';

export const InfoBadge = () => (
  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#fe5e03] mr-1 animate-pulse">
    <Info className="w-[10px] h-[10px] text-[#fe5e03]" strokeWidth={1.5} />
  </span>
);