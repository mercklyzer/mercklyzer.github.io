import { useEffect } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';

function App() {
  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    appHeight()

    return () => window.removeEventListener('resize', appHeight)
  }, [])

  

  return (
    <div className="bg-light relative select-none overflow-x-none">
      <Intro />
      <Navbar />
      <Sidebar />
      <Hero className=""/>
      <About className=""/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
