import { Button } from "@/components/Button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Figma",
  "Git",
  "GitHub",
  "HTML",
  "CSS",
  "JavaScript",
  "Express.js",
  "TensorFlow",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/90 to-background" />
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(200)].map((_, i) => {
            const size = Math.random() * 2 + 2; // 2–4px
            const duration = 18 + Math.random() * 25;

            return (
            <div
                key={i}
                className="absolute rounded-full"
                style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: size < 3 ? 1 : 1,
                filter: size < 3 ? "blur(10px)" : "none",
                background:
                    "radial-gradient(circle, white 0%, rgba(146, 198, 250, 0.6) 60%, transparent 100%)",
                animation: `slow-drift ${duration}s ease-in-out infinite`,
                animationDelay: `${Math.random() * -duration}s`,
                }}
            />
            );
        })}
        </div>

        



      {/* Content */}
      <div className="container mx-auto px-6 pt-20 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left */}
          <div className="space-y-4 lg:translate-x-30 max-w-sm">
            <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full glass text-[10px] text-primary animate-fade-in">
              <span className="w-1 h-1 bg-primary rounded-full animate-pulse" />
              Computer Science Student
            </span>

            {/* Heading */}
            <div className="space-y-1.5">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug animate-fade-in animation-delay-100">
            Engineering <span className="text-primary glow-text">robust</span>
            <br />
            software through
            <br />
            <span className="font-serif italic font-normal text-white">
                thoughtful design.
            </span>
            </h1>


              <p className="text-xs text-muted-foreground max-w-xs animate-fade-in animation-delay-200">
                Hi, I’m Neil Varghese Abraham — a Computer Science student and aspiring software engineer who enjoys solving problems and building clean, scalable web applications with a focus on good user experience.

              </p>
            </div>

            {/* CTA */}
            <div className="hidden md:block animate-fade-in animation-delay-300">
                <a href="#contact">
                    <Button size="sm">Contact Me <ArrowRight className="w-3 h-3" /></Button>
                </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2 animate-fade-in animation-delay-400">
              <span className="text-[10px] text-muted-foreground">Follow</span>
              <div className="flex items-center gap-2 animate-fade-in animation-delay-400">


  <a
    href="https://github.com/Neil-Varghese"
    target="_blank"
    rel="noopener noreferrer"
    className="p-1.5 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
    aria-label="GitHub profile"
  >
    <Github className="w-3 h-3" />
  </a>

  <a
    href="https://www.linkedin.com/in/neilva/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-1.5 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
    aria-label="LinkedIn profile"
  >
    <Linkedin className="w-3 h-3" />
  </a>
</div>

            </div>
          </div>

          {/* Right */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-[260px] mx-auto">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-lg animate-pulse" />

              <div className="relative glass rounded-xl p-1.5 glow-border">
                <img
                  src="/profile-photo2.jpg"
                  alt="Neil Varghese Abraham"
                  className="w-full aspect-[4/5] object-cover rounded-lg"
                />

                {/* Availability */}
                <div className="absolute -bottom-2 -right-2 glass rounded-md px-2 py-1 animate-float">
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[9px] font-medium">Available</span>
                  </div>
                </div>

                {/* Experience */}
                <div className="absolute -top-2 -left-2 glass rounded-md px-2 py-1 animate-float animation-delay-500">
                  <div className="text-base font-bold text-primary">CS</div>
                  <div className="text-[8px] text-white text-muted-foreground">Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-10 animate-fade-in animation-delay-600">
          <p className="text-[10px] text-muted-foreground mb-2 text-center">
            Technologies I have worked with
          </p>

          <div className="overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-4 py-1.5">
                  <span className="text-xs font-medium text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 z-20">
        <button
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-[8px] uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
