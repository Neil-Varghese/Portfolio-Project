const education = [
  {
    period: "2023 — 2027",
    degree: "B.E. in Computer Science",
    institution: "BMS Institute of Technology & Management (BMSIT)",
    description:
      "Pursuing a Bachelor’s degree in Computer Science with a focus on web development, data structures and algorithms, and artificial intelligence and machine learning.",
    highlights: ["Computer Science", "Web Development", "DSA", "AI & ML"],
    current: true,
  },
  {
    period: "2023",
    degree: "Class XII (CBSE) — PCMC",
    institution: "Delhi Public School Bangalore North (DPSBN)",
    description:
      "Completed higher secondary education with a focus on Physics, Chemistry, Mathematics, and Computer Science.",
    highlights: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    current: false,
  },
  {
    period: "2021",
    degree: "Class X (CBSE)",
    institution: "Delhi Public School Bangalore North (DPSBN)",
    description:
      "Completed secondary education with a strong academic foundation across science and mathematics.",
    highlights: ["Science", "Mathematics"],
    current: false,
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-44 h-44 bg-primary/5 rounded-full blur-2xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-xl mb-6">
          <span className="text-sm font-medium tracking-wider uppercase text-secondary-foreground">
            Academic Journey
          </span>

          <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-4 text-secondary-foreground">
            Education that{" "}
            <span className="font-serif italic font-normal text-white">
              shaped my foundation.
            </span>
          </h2>

          <p className="text-base text-muted-foreground">
            A concise overview of my academic background and technical grounding.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-4"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-1 w-1.5 h-1.5 bg-primary rounded-full -translate-x-1/2 ring-1 ring-background z-10">
                  {edu.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />
                  )}
                </div>

                {/* Card Wrapper */}
                <div
                  className={`pl-4 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-8"
                      : "md:col-start-2 md:pl-8"
                  }`}
                >
                  {/* Card */}
                  <div className="glass p-2.5 rounded-md border border-primary/15 text-center">
                    <span className="text-[10px] text-primary font-medium">
                      {edu.period}
                    </span>

                    <h3 className="text-[14px] font-semibold mt-0.5">
                      {edu.degree}
                    </h3>

                    <p className="text-[11px] text-muted-foreground">
                      {edu.institution}
                    </p>

                    <p className="text-[11px] text-muted-foreground mt-1 leading-snug">
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1 mt-1.5 justify-center">
                      {edu.highlights.map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="px-1.5 py-0.5 text-[9px] bg-surface rounded-full text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
