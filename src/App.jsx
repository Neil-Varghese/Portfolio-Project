import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Education } from "@/sections/Education";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";
import CircularMusicPlayer from "@/components/Music.jsx"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="fixed bottom-6 right-8 z-50">
          <CircularMusicPlayer />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        {/*<Testimonials />*/}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App