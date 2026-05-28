import { Project } from "@/src/types/project";

export const PROJECTS: Project[] = [
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