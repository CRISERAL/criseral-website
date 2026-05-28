"use client"

import * as React from "react"
import { cn } from "@/src/lib/utils"

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose: () => void
  size?: "sm" | "md" | "lg"
  footer?: React.ReactNode
  heading?: React.ReactNode
}

export function Modal({
  open,
  onClose,
  size = "md",
  footer,
  heading,
  className,
  children,
  ...props
}: ModalProps) {
  // Close on Escape
  React.useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [open, onClose])

  // Lock body scroll
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
      return () => { document.body.style.overflow = "" }
    }
  }, [open])

  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={cn(
          "fixed left-1/2 top-1/2 z-50 flex max-h-[90vh] w-[calc(100vw-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded border border-primary/30 bg-card/95 shadow-[0_0_40px_rgba(var(--primary-rgb,0,180,255),0.08)] backdrop-blur-md",
          className
        )}
        {...props}
      >
        <div className="flex flex-col overflow-hidden px-4 py-4 md:px-8 md:py-6">
          {/* Header */}
          {heading && (
            <>
              <div className="pb-4 md:pb-0">
                {heading}
              </div>
              <div className="mt-4 md:mt-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </>
          )}
          {/* Body */}
          <div className="flex-1 overflow-y-auto py-4 md:py-6">
            {children}
          </div>
          {/* Footer */}
          {footer && (
            <>
              <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="mt-4 md:mt-6">
                {footer}
              </div>
            </>
          )}
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded text-foreground/30 transition-colors hover:bg-primary/10 hover:text-primary"
          aria-label="Close"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </>
  )
}

/** Reusable button for modal footers */
export function ModalButton({
  variant = "default",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "primary" | "danger" }) {
  return (
    <button
      type="button"
      className={cn(
        "rounded border px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-all",
        variant === "default" && "border-primary/20 text-foreground/50 hover:bg-primary/5 hover:text-foreground/70",
        variant === "primary" && "border-primary/40 bg-primary/10 text-primary hover:bg-primary/20",
        variant === "danger" && "border-red-500/40 bg-red-500/10 text-red-400 hover:bg-red-500/20",
        className
      )}
      {...props}
    />
  )
}
