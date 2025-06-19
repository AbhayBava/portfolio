import Header from "../app/components/Header";
import Hero from "../app/components/Hero";
import About from "../app/components/About";
import Contact from "../app/components/Contact";
import Projects from "../app/components/Projects";
import WorkExperience from "../app/components/WorkExperience";
import Footer from "../app/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Header />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}