import { Toast as ToastPrimitive } from "@base-ui/react/toast";
import type * as React from "react";

export const toastManager = ToastPrimitive.createToastManager();

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <ToastPrimitive.Provider toastManager={toastManager}>
      {children}
      <ToastPrimitive.Portal>
        <ToastPrimitive.Viewport data-slot="toast-viewport">
          <ToastList />
        </ToastPrimitive.Viewport>
      </ToastPrimitive.Portal>
    </ToastPrimitive.Provider>
  );
}

function ToastList() {
  const { toasts } = ToastPrimitive.useToastManager();

  return toasts.map((toast) => (
    <ToastPrimitive.Root
      key={toast.id}
      toast={toast}
      swipeDirection={["down", "right"]}
      data-slot="toast"
      data-tone={toast.type ?? "success"}
      className="group/toast"
    >
      <ToastPrimitive.Content data-slot="toast-content">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <span data-slot="toast-indicator" aria-hidden="true" />
          <div className="flex min-w-0 flex-col gap-0.5">
            <ToastPrimitive.Title data-slot="toast-title" />
            {toast.description ? (
              <ToastPrimitive.Description data-slot="toast-description" />
            ) : null}
          </div>
        </div>
        {toast.actionProps ? (
          <ToastPrimitive.Action data-slot="toast-action" {...toast.actionProps} />
        ) : null}
      </ToastPrimitive.Content>
    </ToastPrimitive.Root>
  ));
}

export function useToast() {
  return ToastPrimitive.useToastManager();
}
