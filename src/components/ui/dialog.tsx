"use client";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/cn";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

type RootProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;

export const Dialog: React.FC<RootProps> = ({ open, defaultOpen, onOpenChange, ...rest }) => {
  // uncontrolled → ведём внутреннее состояние, чтобы знать фактический open
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen ?? false);
  const isOpen = open ?? internalOpen;

  // блокировка скролла всегда на уровне Root
  useBodyScrollLock(isOpen);

  return (
    <DialogPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={(state) => {
        onOpenChange?.(state);
        setInternalOpen(state);
      }}
      {...rest}
    />
  );
};

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogTitle = DialogPrimitive.Title;

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  // скролл-лок теперь делает Root, здесь больше не нужен

  return (
    <DialogPrimitive.Portal>
      {/* Overlay-кнопка закрытия */}
      <DialogPrimitive.Close asChild>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40" />
      </DialogPrimitive.Close>

      {/* Само окно */}
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-1/2 top-1/2 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-lg z-50",
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});
DialogContent.displayName = "DialogContent";