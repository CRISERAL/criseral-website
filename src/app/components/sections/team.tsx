import { Globe, Link, MessageCircle } from "lucide-react";

const TEAM = [
    {
        name: "Alex Morgan",
        role: "CEO & Founder",
        description:
            "Visionary leader with 15+ years of experience in software engineering and business strategy.",
        socials: {
            github: "#",
            linkedin: "#",
            twitter: "#",
        },
    },
    {
        name: "Sarah Chen",
        role: "CTO",
        description:
            "Full-stack architect specialized in scalable distributed systems and cloud infrastructure.",
        socials: {
            github: "#",
            linkedin: "#",
            twitter: "#",
        },
    },
    {
        name: "David Kim",
        role: "Lead Designer",
        description:
            "Creative designer with a passion for crafting intuitive and visually stunning user experiences.",
        socials: {
            github: "#",
            linkedin: "#",
            twitter: "#",
        },
    },
    {
        name: "Maria Lopez",
        role: "Project Manager",
        description:
            "Certified PMP with a track record of delivering complex projects on time and within budget.",
        socials: {
            github: "#",
            linkedin: "#",
            twitter: "#",
        },
    },
];

export default function Team() {
    return (
        <section id="team" className="relative overflow-hidden border-t border-primary/10 px-6 py-20 md:py-28">
            {/* Top glow line */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <span className="text-[10px] uppercase tracking-widest text-primary">
                        Our People
                    </span>
                    <h2 className="mt-4 text-3xl font-bold uppercase tracking-widest md:text-5xl">
                        Team
                    </h2>
                    <p className="mt-4 max-w-2xl text-xs uppercase tracking-widest text-foreground/50 leading-relaxed md:text-sm">
                        Meet the talented professionals behind every successful project we deliver.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {TEAM.map((member) => (
                        <div
                            key={member.name}
                            className="group border border-primary/10 p-8 text-center transition-all duration-300 hover:border-primary/30 hover:bg-primary/[0.02]"
                        >
                            {/* Avatar placeholder */}
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-primary/20 bg-primary/5">
                                <span className="text-2xl font-bold uppercase tracking-widest text-primary">
                                    {member.name.split(" ").map((n) => n[0]).join("")}
                                </span>
                            </div>
                            <h3 className="mt-5 text-sm font-bold uppercase tracking-widest">
                                {member.name}
                            </h3>
                            <span className="mt-2 block text-[10px] uppercase tracking-widest text-primary">
                                {member.role}
                            </span>
                            <p className="mt-3 text-[11px] uppercase tracking-widest text-foreground/50 leading-relaxed">
                                {member.description}
                            </p>
                            {/* Socials */}
                            <div className="mt-5 flex items-center justify-center gap-3">
                                <a
                                    href={member.socials.github}
                                    className="text-foreground/30 transition-colors hover:text-primary"
                                >
                                    <Globe className="h-4 w-4" />
                                </a>
                                <a
                                    href={member.socials.linkedin}
                                    className="text-foreground/30 transition-colors hover:text-primary"
                                >
                                    <Link className="h-4 w-4" />
                                </a>
                                <a
                                    href={member.socials.twitter}
                                    className="text-foreground/30 transition-colors hover:text-primary"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
