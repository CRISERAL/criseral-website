'use client'
import React from "react"
import { Menu, X, Zap } from "lucide-react"

const LANDING_NAV_LINKS = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    return (
        <nav className="sticky top-0 z-40 border-b border-primary/20 bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded border border-primary/40 bg-primary/10">
                        <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                        The Gridcn
                    </span>
                </a>

                {/* Desktop nav links */}
                <div className="hidden items-center gap-6 md:flex">
                    {LANDING_NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="font-mono text-[10px] uppercase tracking-widest text-foreground/50 transition-colors hover:text-primary"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#pricing"
                        className="rounded border border-primary bg-primary/20 px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-primary shadow-[0_0_12px_rgba(var(--primary-rgb,0,180,255),0.15)] transition-all duration-300 hover:bg-primary/30"
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="flex h-8 w-8 items-center justify-center rounded border border-primary/30 text-foreground/60 md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <X className="h-4 w-4" />
                    ) : (
                        <Menu className="h-4 w-4" />
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="border-t border-primary/10 bg-background/95 px-6 py-4 backdrop-blur-md md:hidden">
                    <div className="flex flex-col gap-3">
                        {LANDING_NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="font-mono text-xs uppercase tracking-widest text-foreground/60 transition-colors hover:text-primary"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#pricing"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-2 rounded border border-primary bg-primary/20 px-4 py-2 text-center font-mono text-[10px] uppercase tracking-widest text-primary"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}