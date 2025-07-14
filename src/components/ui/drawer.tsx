"use client";
import * as React from "react";
import * as DrawerPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

export const Drawer = DrawerPrimitive.Root;
export const DrawerTrigger = DrawerPrimitive.Trigger;
export const DrawerClose = DrawerPrimitive.Close;
export const DrawerTitle = DrawerPrimitive.Title;
export const DrawerDescription = DrawerPrimitive.Description;

export const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> & {
    title?: string;
    description?: string;
  }
>(({ className, children, title, description, ...props }, ref) => {
  return (
    <DrawerPrimitive.Portal>
      <DrawerPrimitive.Overlay className="fixed inset-0 z-40 bg-black/60 transition-opacity duration-200 ease-out data-[state=closed]:opacity-0 data-[state=open]:opacity-100" />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 bg-white shadow-xl outline-none overflow-y-auto",
          "md:right-0 w-full md:max-w-md",
          "h-screen md:h-screen",
          "rounded-t-3xl md:rounded-none md:rounded-l-3xl",
          "bottom-0 left-0 right-0 md:top-0 md:bottom-0 md:left-auto p-4 md:p-6",
          "data-[state=closed]:translate-y-full",
          "data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom data-[state=open]:duration-180",
          "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=closed]:duration-180",
          "md:data-[state=closed]:translate-x-full md:data-[state=closed]:translate-y-0",
          "md:data-[state=open]:animate-in md:data-[state=open]:slide-in-from-right md:data-[state=open]:duration-200",
          "md:data-[state=closed]:animate-out md:data-[state=closed]:slide-out-to-right md:data-[state=closed]:duration-200",
          className
        )}
        {...props}
      >
        {title && (
          <VisuallyHidden.Root>
            <DrawerTitle>{title}</DrawerTitle>
          </VisuallyHidden.Root>
        )}
        {description && (
          <VisuallyHidden.Root>
            <DrawerDescription>{description}</DrawerDescription>
          </VisuallyHidden.Root>
        )}
        <DrawerClose className="absolute right-4 top-4 grid h-6 w-6 place-items-center rounded-full transition-colors hover:bg-gray-100">
          <X className="h-4 w-4" />
          <span className="sr-only">Закрыть</span>
        </DrawerClose>
        {children}
      </DrawerPrimitive.Content>
    </DrawerPrimitive.Portal>
  );
});
DrawerContent.displayName = "DrawerContent";