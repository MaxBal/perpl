import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,        // <-- появился
} from "@/components/ui/drawer";
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
      {/* Вариант A — заголовок отображается */}
      <DrawerTitle className="mb-4 text-lg font-semibold">
        {title}
      </DrawerTitle>

      {/* Вариант B — заголовок скрыт визуально, но доступен SR:
          <DrawerTitle className="sr-only">{title}</DrawerTitle>
      */}

      {children}
    </DrawerContent>
  </Drawer>
);

