"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

type ToastType = "success" | "error" | "info";

type Toast = {
  id: number;
  message: string;
  type: ToastType;
};

type ToastContextType = {
  showToast: (message: string, type?: ToastType) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);
let toastId = 0;

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

/**
 * useToast — safe to call from any client component.
 * During SSR / static prerendering the provider is not yet mounted,
 * so we return a no-op rather than throwing, which prevents build failures.
 */
export function useToast(): ToastContextType {
  const ctx = useContext(ToastContext);
  if (!ctx) return { showToast: noop };
  return ctx;
}

const icons: Record<ToastType, string> = {
  success: "✓",
  error: "✕",
  info: "ℹ",
};

const colors: Record<ToastType, string> = {
  success: "border-green-500/30 bg-green-500/10 text-green-300",
  error: "border-red-500/30 bg-red-500/10 text-red-300",
  info: "border-blue-500/30 bg-blue-500/10 text-blue-300",
};

/**
 * ToastProvider — wraps your app to provide the toast context AND renders
 * the toast UI. Placed in root layout so any descendant can call useToast().
 */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (message: string, type: ToastType = "success") => {
      const id = ++toastId;
      setToasts((prev) => [...prev, { id, message, type }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast UI rendered inside the provider */}
      <div className="pointer-events-none fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`pointer-events-auto flex items-center gap-3 rounded-2xl border px-5 py-3.5 text-sm font-medium shadow-2xl backdrop-blur-sm ${colors[t.type]}`}
            >
              <span className="text-base font-bold">{icons[t.type]}</span>
              {t.message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

/** @deprecated — use ToastProvider instead */
export default function ToastContainer({ children }: { children?: ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}
