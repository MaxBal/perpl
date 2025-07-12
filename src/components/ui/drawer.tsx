"use client";
import * as React from "react";
import * as DrawerPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

export const Drawer = DrawerPrimitive.Root;
export const DrawerTrigger = DrawerPrimitive.Trigger;
export const DrawerClose = DrawerPrimitive.Close;

export const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  // Lock body scroll when drawer is open
  useBodyScrollLock(isOpen);

  React.useEffect(() => {
    const handleOpenChange = (open: boolean) => {
      setIsOpen(open);
    };

    // Listen for state changes from the drawer primitive
    const element = ref as React.MutableRefObject<HTMLElement>;
    if (element?.current) {
      const observer = new MutationObserver(() => {
        const state = element.current?.getAttribute('data-state');
        handleOpenChange(state === 'open');
      });
      
      observer.observe(element.current, {
        attributes: true,
        attributeFilter: ['data-state']
      });
      
      return () => observer.disconnect();
    }
  }, [ref]);

  return (
    <DrawerPrimitive.Portal>
      <DrawerPrimitive.Overlay className="fixed inset-0 z-40 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:animate-in data-[state=open]:fade-in" />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          // Mobile: bottom drawer
          "fixed bottom-0 left-0 right-0 z-50 max-h-[80vh] overflow-y-auto rounded-t-2xl bg-white p-4 shadow-xl outline-none",
          "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom",
          // Desktop: center modal
          "md:bottom-auto md:left-1/2 md:top-1/2 md:max-h-[90vh] md:w-full md:max-w-lg md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-lg",
          "md:data-[state=closed]:slide-out-to-bottom-0 md:data-[state=open]:slide-in-from-bottom-0",
          className
        )}
        {...props}
      >
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