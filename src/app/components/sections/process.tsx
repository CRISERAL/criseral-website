import { Lightbulb, PenTool, Code, Bug, Rocket, HeartHandshake } from "lucide-react";

const STEPS = [
    {
        icon: Lightbulb,
        number: "01",
        title: "Discovery",
        description:
            "We analyze your vision, goals, and requirements to define the perfect strategy and architecture for your project.",
    },
    {
        icon: PenTool,
        number: "02",
        title: "Design",
        description:
            "Our designers craft wireframes, prototypes, and high-fidelity mockups that align with your brand and user needs.",
    },
    {
        icon: Code,
        number: "03",
        title: "Development",
        description:
            "Our engineers build your product using agile sprints with continuous integration and transparent progress updates.",
    },
    {
        icon: Bug,
        number: "04",
        title: "Testing",
        description:
            "Rigorous quality assurance including unit tests, integration tests, and user acceptance testing to ensure reliability.",
    },
    {
        icon: Rocket,
        number: "05",
        title: "Deployment",
        description:
            "We handle the entire deployment process with automated CI/CD pipelines for a smooth and secure launch.",
    },
    {
        icon: HeartHandshake,
        number: "06",
        title: "Support",
        description:
            "Post-launch maintenance, monitoring, and ongoing support to keep your application running at its best.",
    },
];

export default function Process() {
    return (
        <section id="process" className="relative overflow-hidden border-t border-primary/10 px-6 py-20 md:py-28">
            {/* Top glow line */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <span className="text-[10px] uppercase tracking-widest text-primary">
                        How We Work
                    </span>
                    <h2 className="mt-4 text-3xl font-bold uppercase tracking-widest md:text-5xl">
                        Our Process
                    </h2>
                    <p className="mt-4 max-w-2xl text-xs uppercase tracking-widest text-foreground/50 leading-relaxed md:text-sm">
                        A proven development methodology that ensures quality, transparency,
                        and successful delivery every time.
                    </p>
                </div>

                {/* Process Grid */}
                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {STEPS.map((step) => (
                        <div
                            key={step.number}
                            className="group border border-primary/10 p-8 transition-all duration-300 hover:border-primary/30 hover:bg-primary/[0.02]"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded border border-primary/20 bg-primary/5">
                                    <step.icon className="h-5 w-5 text-primary" />
                                </div>
                                <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                                    Step {step.number}
                                </span>
                            </div>
                            <h3 className="mt-5 text-sm font-bold uppercase tracking-widest">
                                {step.title}
                            </h3>
                            <p className="mt-3 text-[11px] uppercase tracking-widest text-foreground/50 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
