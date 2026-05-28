"use client"

import * as React from "react"
import { cn } from "@/src/lib/utils"

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose: () => void
  size?: "sm" | "md" | "lg"
}

export function Modal({
  open,
  onClose,
  size = "md",
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
          "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded border border-primary/30 bg-card/95 shadow-[0_0_40px_rgba(var(--primary-rgb,0,180,255),0.08)] backdrop-blur-md",
          size === "sm" && "w-full max-w-sm",
          size === "md" && "w-full max-w-lg",
          size === "lg" && "w-full max-w-2xl",
          className
        )}
        {...props}
      >
        {/* Scanline */}
        {/* Body */}
        <div className="px-5 py-4">
          {children}
        </div>
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded text-foreground/30 transition-colors hover:bg-primary/10 hover:text-primary"
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
