import React from "react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { X } from "lucide-react"

export interface TabSpec {
  id: string
  label: string
  node: React.ReactNode
}

interface Props {
  open: boolean
  onOpenChange: (v: boolean) => void
  tabs: TabSpec[]
  defaultTab: string
}

export const InfoModal: React.FC<Props> = ({ open, onOpenChange, tabs, defaultTab }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-[640px] p-6">
      <Tabs defaultValue={defaultTab} className="w-full">
        <div className="flex justify-between items-center mb-4">
          <TabsList className="gap-4 bg-transparent p-0 h-auto">
            {tabs.map(t => (
              <TabsTrigger 
                key={t.id} 
                value={t.id} 
                className="text-base font-medium data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none pb-2 bg-transparent"
              >
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <DialogClose asChild>
            <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
              <X size={20}/>
            </button>
          </DialogClose>
        </div>

        {tabs.map(t => (
          <TabsContent key={t.id} value={t.id} className="pt-2 mt-0">
            {t.node}
          </TabsContent>
        ))}
      </Tabs>
    </DialogContent>
  </Dialog>
)