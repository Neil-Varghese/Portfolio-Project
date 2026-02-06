import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Relentless Problem Solver",
    description:
      "I enjoy breaking down complex problems, iterating fast, and staying with them until the solution feels solid and elegant.",
  },
  {
    icon: Rocket,
    title: "High-Standards Execution",
    description:
      "I’m a hard worker who doesn’t stop at “good enough”—I refine performance, UX, and details until everything clicks.",
  },
  {
    icon: Users,
    title: "Driven Collaboration",
    description:
      "I work closely with teams, communicate clearly, and take ownership to push ideas across the finish line.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Improvement",
    description:
      "I’m always learning, experimenting, and leveling up—whether it’s better UI patterns or smarter AI-driven solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              About Me
            </span>

            {/* Header */}
            <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-4 animate-fade-in animation-delay-100 text-secondary-foreground leading-snug">
              Obsessed with details,
              <br />
              <span className="font-serif italic font-normal text-white">
                driven by solutions.
              </span>
            </h2>

            {/* Body */}
            <div className="space-y-2.5 text-xs text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a motivated Computer Science student who enjoys building
                software and solving problems through code, with a strong focus
                on core engineering fundamentals.
              </p>
              <p>
                I work with HTML, CSS, JavaScript, React, Node.js, Express,
                MongoDB, and SQL, building projects that span intuitive UIs and
                reliable backend logic.
              </p>
              <p>
                Beyond academics, I practice DSA, explore modern tools, and
                build real-world projects to deepen my understanding of
                software systems.
              </p>
            </div>

            {/* Quote */}
            <div className="glass rounded-xl p-4 glow-border animate-fade-in animation-delay-300">
              <p className="text-xs md:text-sm font-medium italic text-foreground">
                "My goal is to grow as a web developer by solving real-world
                problems and building applications that are practical,
                reliable, and easy to use."
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-4 rounded-lg animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center mb-2.5 hover:bg-primary/20">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>

                <h3 className="text-sm font-semibold mb-1">
                  {item.title}
                </h3>

                <p className="text-[13px] leading-snug text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
