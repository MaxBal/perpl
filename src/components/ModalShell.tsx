import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ReactNode } from "react";

interface Props {
  trigger: ReactNode;
  title: string;
  children: ReactNode;
}

export const ModalShell = ({ trigger, title, children }: Props) => (
  <Drawer>
    <DrawerTrigger asChild>{trigger}</DrawerTrigger>
    <DrawerContent>
      <div className="pt-4">
        <h2 className="mb-4 text-lg font-semibold">{title}</h2>
        {children}
      </div>
    </DrawerContent>
  </Drawer>
);