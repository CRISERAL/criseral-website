import { Project } from "@/src/types/project"

interface Props {
    project: Project
    onSelect: (project: Project) => void;
}
export function ProjectCard({
    project,
    onSelect
}: Props) {
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
    )
}