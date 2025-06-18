import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";

export interface TabSpec {
  id: string;
  label: string;
  node: React.ReactNode;
}

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  tabs: TabSpec[];
  defaultTab: string;
  title?: string;
}

export const InfoModal: React.FC<Props> = ({
  open,
  onOpenChange,
  tabs,
  defaultTab,
  title,
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent
      className={`
        w-screen max-w-none sm:w-[90vw] sm:max-w-lg
        left-0 sm:left-1/2
        -translate-x-0 sm:-translate-x-1/2
        top-1/2 -translate-y-1/2
        rounded-none sm:rounded-xl
        bg-white
        px-4 py-6 sm:p-6
      `}
    >
      <VisuallyHidden.Root>
        <DialogTitle>{title || "Modal"}</DialogTitle>
      </VisuallyHidden.Root>
      
      {/* заголовок для «Детально про дизайни» (desktop only) */}
      {title && (
        <h2 className="mb-4 text-2xl font-bold sm:hidden">{title}</h2>
      )}

      <Tabs defaultValue={defaultTab} className="w-full">
        {/* Header: вкладки + крестик */}
        <div className="flex justify-between items-center mb-4">
          <TabsList className="p-0 gap-6">
            {tabs.map((t) => (
              <TabsTrigger key={t.id} value={t.id}>
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <DialogClose asChild>
            <button className="p-1 rounded-full hover:bg-muted/50">
              <X size={22} />
            </button>
          </DialogClose>
        </div>

        {/* Контент вкладок */}
        {tabs.map((t) => (
          <TabsContent key={t.id} value={t.id} className="text-left">
            {t.node}
          </TabsContent>
        ))}
      </Tabs>
    </DialogContent>
  </Dialog>
);