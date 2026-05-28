"use client";

import { PROJECTS } from "@/src/mock/projects.mock";
import { Project } from "@/src/types/project";
import { useState } from "react";
import { ProjectCard } from "../../project/components/project-card";
import { Modal } from "@/src/components/modal";
import { ProjectModal } from "../../project/components/project-modal";


export default function Projects() {
    const [open, setOpen] = useState(false)
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
                        Explore some of the projects and platforms we have built for
                        our clients across various industries.
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-16 grid gap-px overflow-hidden rounded border border-primary/10 bg-primary/10 md:grid-cols-2">
                    {PROJECTS.map((project) => (
                        <div key={project.id} className="bg-background">
                            <ProjectCard
                                project={project}
                                onSelect={(project) => {
                                    setSelectedProject(project)
                                    setOpen(true)
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {selectedProject && (
                <Modal open={open} onClose={() => setOpen(false)}>
                    <ProjectModal project={selectedProject} />
                </Modal>
            )}

        </section>
    );
}
