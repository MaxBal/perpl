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
}

export const InfoModal: React.FC<Props> = ({
  open,
  onOpenChange,
  tabs,
  defaultTab,
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent
      className={`
        /* ───── mobile bottom-sheet ───── */
        fixed inset-x-0 bottom-0
        w-screen max-w-none
        rounded-t-2xl
        transform-none
        max-h-[80vh] overflow-y-auto
        px-4 pt-3 pb-6
        /* ───── desktop ───── */
        sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2
        sm:w-[90vw] sm:max-w-lg
        sm:rounded-xl sm:px-6 sm:pt-6
      `}
    >
      <VisuallyHidden.Root>
        <DialogTitle>Modal</DialogTitle>
      </VisuallyHidden.Root>

      <Tabs defaultValue={defaultTab} className="w-full">
        {/* Header: только вкладки + крестик */}
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
          <TabsContent key={t.id} value={t.id} className="text-left space-y-4">
            {t.node}
          </TabsContent>
        ))}
      </Tabs>
    </DialogContent>
  </Dialog>
);