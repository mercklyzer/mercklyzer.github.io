import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-light relative select-none overflow-x-hidden">
      {/* <Intro /> */}
      <Navbar />
      <Sidebar />
      <Hero className="" />
      <About className="" />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
