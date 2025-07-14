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
      <DrawerPrimitive.Overlay className="fixed inset-0 z-40 bg-black/60 transition-opacity duration-200 ease-out data-[state=closed]:opacity-0 data-[state=open]:opacity-100" />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 bg-white shadow-xl outline-none overflow-y-auto",
          // базовые стили
          "md:right-0 w-full md:max-w-md",
          // высота
          "h-screen md:h-screen",
          // скругление
          "rounded-t-3xl md:rounded-none md:rounded-l-3xl",
          // позиционирование
          "bottom-0 left-0 right-0 md:top-0 md:bottom-0 md:left-auto p-4 md:p-6",
          // анимации mobile
          "translate-y-full animate-in slide-in-from-bottom duration-180",
          "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=closed]:duration-180",
          // анимации desktop
          "md:translate-x-full md:animate-in md:slide-in-from-right md:duration-200",
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