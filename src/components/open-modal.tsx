"use client"

import * as React from "react"
import { cn } from "@/src/lib/utils"

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean
    onClose: () => void
}

export function Modal({
    open,
    onClose,
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
            <div
                className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
                onClick={onClose}
            />
            <div
                className={cn(
                    "fixed left-1/2 top-1/2 z-50 w-[calc(100vw-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded border border-primary/30 bg-card/95 shadow-[0_0_40px_rgba(var(--primary-rgb,0,180,255),0.08)] backdrop-blur-md",
                    className
                )}
                {...props}
            >
                <div className="px-6 py-5 md:px-8 md:py-6">
                    {children}
                </div>
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
