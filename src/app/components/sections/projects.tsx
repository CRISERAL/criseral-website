"use client";

import { X, ExternalLink } from "lucide-react";
import { useState } from "react";

type Project = {
    id: string;
    title: string;
    category: string;
    description: string;
    fullDescription: string;
    tags: string[];
    image: string;
    link?: string;
};

const PROJECTS: Project[] = [
    {
        id: "1",
        title: "Criseral Core",
        category: "Framework",
        description: "Next-gen web framework for building type-safe applications.",
        fullDescription:
            "Criseral Core is a revolutionary web framework that combines the best of server-side rendering with dynamic client-side interactivity. Built from the ground up with TypeScript, it provides end-to-end type safety from database to UI. Features include automatic code splitting, optimized image optimization, and a plugin system that allows for unlimited extensibility.",
        tags: ["TypeScript", "React", "Node.js"],
        image: "/project-1.jpg",
    },
    {
        id: "2",
        title: "Criseral UI",
        category: "Design System",
        description: "A comprehensive component library with accessibility first.",
        fullDescription:
            "Criseral UI is a production-ready component library that prioritizes accessibility and developer experience. Every component is built with Radix UI primitives, follows WAI-ARIA standards, and supports full theming via CSS custom properties. The library includes over 50 components, from simple buttons to complex data tables and dialogs.",
        tags: ["React", "Radix UI", "Tailwind"],
        image: "/project-2.jpg",
    },
    {
        id: "3",
        title: "Criseral Cloud",
        category: "Infrastructure",
        description: "Serverless infrastructure for modern web applications.",
        fullDescription:
            "Criseral Cloud provides a seamless serverless infrastructure platform that auto-scales with your application. Deploy globally with edge functions, manage your database with built-in PostgreSQL support, and monitor performance with real-time analytics. Our infrastructure handles millions of requests per day with 99.99% uptime.",
        tags: ["AWS", "Docker", "Kubernetes"],
        image: "/project-3.jpg",
    },
    {
        id: "4",
        title: "Criseral AI",
        category: "Artificial Intelligence",
        description: "AI-powered tools for smarter development workflows.",
        fullDescription:
            "Criseral AI integrates cutting-edge machine learning models directly into your development workflow. From intelligent code completion to automated testing and bug detection, our AI tools help developers write better code faster. The platform supports custom model training and seamless integration with existing CI/CD pipelines.",
        tags: ["Python", "TensorFlow", "OpenAI"],
        image: "/project-4.jpg",
    },
];

function ProjectCard({
    project,
    onSelect,
}: {
    project: Project;
    onSelect: (project: Project) => void;
}) {
    return (
        <button
            onClick={() => onSelect(project)}
            className="group flex w-full flex-col items-start border border-primary/10 p-8 text-left transition-all duration-300 hover:border-primary/30 hover:bg-primary/2"
        >
            <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                {project.category}
            </span>
            <h3 className="mt-3 text-lg font-bold uppercase tracking-widest md:text-xl">
                {project.title}
            </h3>
            <p className="mt-3 text-[11px] uppercase tracking-widest text-foreground/50 leading-relaxed">
                {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="border border-primary/20 bg-primary/5 px-2 py-0.5 text-[9px] uppercase tracking-widest text-primary/80"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </button>
    );
}

function ProjectModal({
    project,
    onClose,
}: {
    project: Project;
    onClose: () => void;
}) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

            {/* Modal */}
            <div
                className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto border border-primary/20 bg-background p-8 md:p-12"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center border border-primary/20 text-foreground/60 transition-all duration-200 hover:border-primary/40 hover:text-foreground"
                    aria-label="Close modal"
                >
                    <X className="h-3.5 w-3.5" />
                </button>

                {/* Category */}
                <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                    {project.category}
                </span>

                {/* Title */}
                <h2 className="mt-3 text-2xl font-bold uppercase tracking-widest md:text-3xl">
                    {project.title}
                </h2>

                {/* Divider */}
                <div className="my-6 h-px bg-linear-to-r from-primary/40 via-primary/20 to-transparent" />

                {/* Full description */}
                <p className="text-xs uppercase tracking-widest text-foreground/60 leading-relaxed md:text-sm">
                    {project.fullDescription}
                </p>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-widest text-primary/80"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* External link */}
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 border border-primary/30 px-4 py-2 text-[10px] uppercase tracking-widest text-foreground/70 transition-all duration-300 hover:border-primary/60 hover:text-foreground"
                    >
                        View Project
                        <ExternalLink className="h-3 w-3" />
                    </a>
                )}
            </div>
        </div>
    );
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section className="relative overflow-hidden border-t border-primary/10 px-6 py-20 md:py-28">
            {/* Top glow line */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <span className="text-[10px] uppercase tracking-widest text-primary">
                        Our Work
                    </span>
                    <h2 className="mt-4 text-3xl font-bold uppercase tracking-widest md:text-5xl">
                        Projects
                    </h2>
                    <p className="mt-4 max-w-2xl text-xs uppercase tracking-widest text-foreground/50 leading-relaxed md:text-sm">
                        Discover the tools and platforms we have built to empower
                        developers worldwide.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-16 grid gap-px overflow-hidden rounded border border-primary/10 bg-primary/10 md:grid-cols-2">
                    {PROJECTS.map((project) => (
                        <div key={project.id} className="bg-background">
                            <ProjectCard
                                project={project}
                                onSelect={setSelectedProject}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}
