import { Code2, Rocket, Shield, Gauge, GitBranch, Smartphone } from "lucide-react";

const FEATURES = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "We write maintainable, scalable, and well-documented code following industry best practices and design patterns.",
    },
    {
        icon: Rocket,
        title: "Fast Delivery",
        description:
            "Agile methodologies and efficient workflows ensure we deliver high-quality products on time and within budget.",
    },
    {
        icon: Shield,
        title: "Security First",
        description:
            "Security is embedded in every layer of our development process, from authentication to data encryption.",
    },
    {
        icon: Gauge,
        title: "Performance",
        description:
            "We optimize every aspect of your application for speed, ensuring fast load times and smooth user experiences.",
    },
    {
        icon: GitBranch,
        title: "Version Control",
        description:
            "Strict version control and CI/CD pipelines guarantee smooth deployments and easy rollbacks when needed.",
    },
    {
        icon: Smartphone,
        title: "Responsive Design",
        description:
            "Every project we build is fully responsive and optimized for all devices, from desktops to mobile phones.",
    },
];

export default function Features() {
    return (
        <section id="features" className="relative overflow-hidden border-t border-primary/10 px-6 py-20 md:py-28">
            {/* Top glow line */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <span className="text-[10px] uppercase tracking-widest text-primary">
                        Why Choose Us
                    </span>
                    <h2 className="mt-4 text-3xl font-bold uppercase tracking-widest md:text-5xl">
                        Features
                    </h2>
                    <p className="mt-4 max-w-2xl text-xs uppercase tracking-widest text-foreground/50 leading-relaxed md:text-sm">
                        We combine technical excellence with creative thinking to deliver
                        software that makes a real impact.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="mt-16 grid gap-px overflow-hidden rounded border border-primary/10 bg-primary/10 md:grid-cols-3">
                    {FEATURES.map((feature) => (
                        <div
                            key={feature.title}
                            className="flex flex-col items-center bg-background p-8 text-center transition-all duration-300 hover:bg-primary/[0.02]"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded border border-primary/20 bg-primary/5">
                                <feature.icon className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="mt-5 text-sm font-bold uppercase tracking-widest">
                                {feature.title}
                            </h3>
                            <p className="mt-3 text-[11px] uppercase tracking-widest text-foreground/50 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
