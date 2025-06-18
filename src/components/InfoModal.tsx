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
  title: string;
}

export const InfoModal: React.FC<Props> = ({
  open,
  onOpenChange,
  tabs,
  defaultTab,
  title,
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-[640px] p-6">
      <VisuallyHidden.Root>
        <DialogTitle>{title}</DialogTitle>
      </VisuallyHidden.Root>
      
      {/* 1️⃣  Всё внутри <Tabs> */}
      <Tabs defaultValue={defaultTab} className="w-full">
        {/* Шапка — вкладки + крестик */}
        <div className="flex justify-between items-center mb-4">
          <TabsList className="bg-transparent p-0 gap-4">
            {tabs.map((t) => (
              <TabsTrigger key={t.id} value={t.id}>
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <DialogClose asChild>
            <button className="p-1 rounded-full hover:bg-muted/50">
              <X size={20} />
            </button>
          </DialogClose>
        </div>

        {/* Контент вкладок */}
        {tabs.map((t) => (
          <TabsContent key={t.id} value={t.id}>
            {t.node}
          </TabsContent>
        ))}
      </Tabs>
    </DialogContent>
  </Dialog>
);