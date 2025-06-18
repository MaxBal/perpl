"use client";
import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * @property duration  В миллисекундах.  
 *  – любое положительное число → авто-закрытие  
 *  – 0, undefined или Infinity → тост живёт, пока его не закроют вручную
 */
interface ToastProps {
  title: string;
  description?: string;
  duration?: number;
}

interface ToastContextType {
  toast: (props: ToastProps) => void;
}

const ToastContext = React.createContext<ToastContextType | null>(null);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = React.useState<Array<ToastProps & { id: string }>>([]);

  const toast = React.useCallback((props: ToastProps) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...props, id };
    
    setToasts(prev => [...prev, newToast]);
    
    // Авто-закрываем ТОЛЬКО если duration > 0 и не Infinity
    if (props.duration && isFinite(props.duration) && props.duration > 0) {
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, props.duration);
    }
  }, []);

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      
      {/* Toast container */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              "bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm",
              "animate-in slide-in-from-right-full duration-300"
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h4 className="font-medium text-sm text-gray-900">{toast.title}</h4>
                {toast.description && (
                  <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
                    {toast.description}
                  </p>
                )}
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const toast = (props: ToastProps) => {
  // This is a fallback for when ToastProvider is not available
  console.log('Toast:', props);
};