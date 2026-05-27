export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20 md:pt-36 md:pb-28">
            {/* Top glow line */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent" />

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 rounded border border-primary/20 bg-primary/5 px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-[10px] uppercase tracking-widest text-primary">
                        Modern SaaS Platform
                    </span>
                </div>

                {/* Heading */}
                <h1 className="mt-6 text-4xl font-bold uppercase tracking-widest md:text-6xl lg:text-7xl">
                    Build Faster
                    <br />
                    <span className="text-primary">With Criseral</span>
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-2xl text-xs uppercase tracking-widest text-foreground/50 leading-relaxed md:text-sm">
                    A modern, type-safe platform for building exceptional web experiences.
                    Ship faster with our comprehensive suite of tools and components.
                </p>

                {/* CTAs */}
                <div className="mt-10 flex items-center gap-4">
                    <a
                        href="#pricing"
                        className="rounded border border-primary bg-primary px-6 py-3 text-[10px] uppercase tracking-widest text-primary-foreground shadow-[0_0_24px_var(--primary)] transition-all duration-300 hover:bg-primary/90"
                    >
                        Get Started
                    </a>
                    <a
                        href="#features"
                        className="rounded border border-primary/30 bg-transparent px-6 py-3 text-[10px] uppercase tracking-widest text-foreground/70 transition-all duration-300 hover:border-primary/60 hover:text-foreground"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    )
}
