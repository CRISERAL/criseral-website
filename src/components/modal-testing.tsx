"use client"

import { useEffect } from "react"

interface ModalTestingProps {
    open: boolean
    onClose: () => void
    children: React.ReactNode
}

export function ModalTesting({ open, onClose, children }: ModalTestingProps) {
    useEffect(() => {
        if (!open) return
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        window.addEventListener("keydown", handler)
        return () => window.removeEventListener("keydown", handler)
    }, [open, onClose])

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
            return () => { document.body.style.overflow = "" }
        }
    }, [open])

    if (!open) return null

    return (
        <>
            <div
                className="fixed inset-0 z-50 bg-black/50"
                onClick={onClose}
            />
            <div
                role="dialog"
                aria-modal="true"
                className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl dark:bg-zinc-900"
            >
                {children}
            </div>
        </>
    )
}
