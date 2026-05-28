import {
    Globe,
    Smartphone,
    Palette,
    Cloud,
    Workflow,
    Headphones,
} from "lucide-react";

const SERVICES = [
    {
        icon: Globe,
        title: "Web Development",
        description:
            "Custom web applications, SPAs, and enterprise portals built with modern frameworks like React, Next.js, and Node.js.",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description:
            "Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and Swift.",
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description:
            "User-centered design with beautiful interfaces, intuitive interactions, and seamless user experiences.",
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        description:
            "Scalable cloud infrastructure on AWS, GCP, and Azure including migration, deployment, and management.",
    },
    {
        icon: Workflow,
        title: "API Development",
        description:
            "RESTful and GraphQL APIs designed for performance, security, and seamless third-party integrations.",
    },
    {
        icon: Headphones,
        title: "IT Consulting",
        description:
            "Strategic technology consulting to help you choose the right architecture, tools, and development approach.",
    },
];

export default function Services() {
    return (
        <section id="services" className="relative overflow-hidden border-t border-primary/10 px-6 py-20 md:py-28">
            {/* Top glow line */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <span className="text-[10px] uppercase tracking-widest text-primary">
                        What We Offer
                    </span>
                    <h2 className="mt-4 text-3xl font-bold uppercase tracking-widest md:text-5xl">
                        Services
                    </h2>
                    <p className="mt-4 max-w-2xl text-xs uppercase tracking-widest text-foreground/50 leading-relaxed md:text-sm">
                        End-to-end software development services tailored to bring your
                        vision to life with cutting-edge technology.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((service) => (
                        <div
                            key={service.title}
                            className="group border border-primary/10 p-8 transition-all duration-300 hover:border-primary/30 hover:bg-primary/[0.02]"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded border border-primary/20 bg-primary/5">
                                <service.icon className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="mt-5 text-sm font-bold uppercase tracking-widest">
                                {service.title}
                            </h3>
                            <p className="mt-3 text-[11px] uppercase tracking-widest text-foreground/50 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
