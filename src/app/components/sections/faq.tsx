"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
    {
        question: "How long does a typical project take?",
        answer:
            "Timelines vary depending on scope and complexity. A typical web application takes 8–16 weeks, while larger enterprise solutions may take 4–6 months. We provide a detailed timeline during the discovery phase.",
    },
    {
        question: "What technologies do you use?",
        answer:
            "We work with modern, industry-leading technologies including React, Next.js, Node.js, TypeScript, Python, AWS, and more. We choose the best tech stack based on your project's specific needs.",
    },
    {
        question: "Do you offer post-launch support?",
        answer:
            "Yes, we provide ongoing maintenance and support packages to ensure your application remains secure, up-to-date, and running smoothly after launch.",
    },
    {
        question: "How do you handle project communication?",
        answer:
            "We use agile methodologies with regular sprint reviews, daily updates, and transparent reporting. You will have direct access to your project manager and development team throughout the process.",
    },
    {
        question: "Can you work with our existing team?",
        answer:
            "Absolutely. We can integrate with your in-house team, augment your staff with specialized talent, or take full ownership of the project — whatever works best for your organization.",
    },
    {
        question: "What is your pricing model?",
        answer:
            "We offer flexible pricing models including fixed-price for well-defined projects and time-and-materials for ongoing or evolving work. We provide transparent quotes with no hidden fees.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="relative overflow-hidden border-t border-primary/10 px-6 py-20 md:py-28">
            {/* Top glow line */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

            <div className="relative z-10 mx-auto max-w-3xl">
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <span className="text-[10px] uppercase tracking-widest text-primary">
                        Got Questions?
                    </span>
                    <h2 className="mt-4 text-3xl font-bold uppercase tracking-widest md:text-5xl">
                        FAQ
                    </h2>
                    <p className="mt-4 max-w-2xl text-xs uppercase tracking-widest text-foreground/50 leading-relaxed md:text-sm">
                        Find answers to common questions about how we work and what we offer.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="mt-16 divide-y divide-primary/10 rounded border border-primary/10">
                    {FAQS.map((faq, index) => (
                        <div key={index}>
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-primary/[0.02]"
                            >
                                <span className="text-xs font-semibold uppercase tracking-widest">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`h-4 w-4 shrink-0 text-foreground/40 transition-transform duration-300 ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index
                                        ? "max-h-80 opacity-100"
                                        : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="px-6 pb-5 text-[11px] uppercase tracking-widest text-foreground/50 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
