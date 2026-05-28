import { Project } from "@/src/types/project"
import { ExternalLink } from "lucide-react";

interface Props {
    project: Project;
}
export function ProjectModal({
    project
}: Props) {
    return (
        <div className="relative max-h-[80vh] w-full bg-background">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                {project.category}
            </span>
            <h2 className="mt-3 text-2xl font-bold uppercase tracking-widest md:text-3xl">
                {project.title}
            </h2>
            <div className="my-6 h-px bg-linear-to-r from-primary/40 via-primary/20 to-transparent" />
            <p className="max-h-[40vh] overflow-y-auto text-xs uppercase tracking-widest text-foreground/60 leading-relaxed md:text-sm">
                {project.fullDescription}
            </p>
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
    )
}