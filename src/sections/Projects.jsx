import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with inventory management, payments, and analytics.",
    image: "/projects/project2.png",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Management Tool",
    description:
      "A collaborative workspace with real-time updates, task tracking, and integrations.",
    image: "/projects/project4.png",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-8 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-40 h-40 bg-primary/5 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 left-0 w-28 h-28 bg-highlight/5 rounded-full blur-xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-lg mb-5">
          <span className="text-sm font-medium tracking-wider uppercase text-secondary-foreground">
            Featured Work
          </span>

          <h2 className="text-2xl md:text-3xl font-semibold mt-3 mb-3 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              inspire.
            </span>
          </h2>

          <p className="text-base text-muted-foreground">
            A selection of recent projects focused on solving real-world problems.
          </p>
        </div>


        {/* Projects Grid — TIGHT */}
        <div className="grid md:grid-cols-2 gap-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-lg overflow-hidden h-full flex flex-col w-full"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-36 md:h-64 shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a
                    href={project.link}
                    className="p-1.5 rounded-full glass hover:bg-primary hover:text-primary-foreground transition"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-1.5 rounded-full glass hover:bg-primary hover:text-primary-foreground transition"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 space-y-2.5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-start justify-between">
                    <h3 className="text-[14px] font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <p className="text-[12px] text-muted-foreground leading-snug mt-1">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-1.5 py-0.5 rounded-full bg-surface text-[9px] border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-6">
          <a
            href="https://github.com/Neil-Varghese"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton className="text-[13px] h-13 px-4">
              View All Projects
              <ArrowUpRight className="w-3.5 h-3.5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};