export default function About() {
    return (
        <section className="relative overflow-hidden border-t border-primary/10 px-6 py-20 md:py-28">
            {/* Top glow line */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <span className="text-[10px] uppercase tracking-widest text-primary">
                        About Us
                    </span>
                    <h2 className="mt-4 text-3xl font-bold uppercase tracking-widest md:text-5xl">
                        Who We Are
                    </h2>
                    <p className="mt-4 max-w-2xl text-xs uppercase tracking-widest text-foreground/50 leading-relaxed md:text-sm">
                        We are a team of passionate engineers and designers committed to
                        building the modern web development tools.
                    </p>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded border border-primary/10 bg-primary/10 md:grid-cols-4">
                    {[
                        { value: "10K+", label: "Users" },
                        { value: "500+", label: "Components" },
                        { value: "99.9%", label: "Uptime" },
                        { value: "24/7", label: "Support" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center justify-center bg-background py-10"
                        >
                            <span className="text-3xl font-bold uppercase tracking-widest text-primary md:text-4xl">
                                {stat.value}
                            </span>
                            <span className="mt-2 text-[10px] uppercase tracking-widest text-foreground/50">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Values */}
                <div className="mt-20 grid gap-6 md:grid-cols-3">
                    {[
                        {
                            number: "01",
                            title: "Innovation",
                            description:
                                "We push the boundaries of what is possible in web development with cutting-edge tools and frameworks.",
                        },
                        {
                            number: "02",
                            title: "Quality",
                            description:
                                "Every component and tool is rigorously tested to ensure the highest standards of performance and reliability.",
                        },
                        {
                            number: "03",
                            title: "Community",
                            description:
                                "Built by developers, for developers. Our open-source ecosystem thrives on collaboration and feedback.",
                        },
                    ].map((value) => (
                        <div
                            key={value.number}
                            className="group border border-primary/10 p-8 transition-all duration-300 hover:border-primary/30 hover:bg-primary/2"
                        >
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                                {value.number}
                            </span>
                            <h3 className="mt-3 text-lg font-bold uppercase tracking-widest md:text-xl">
                                {value.title}
                            </h3>
                            <p className="mt-3 text-[11px] uppercase tracking-widest text-foreground/50 leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
