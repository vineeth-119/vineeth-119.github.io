import './App.css';

import Home from "./components/Home"
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from './components/Experience';
import Education from "./components/Education";

function App() {
    return(
        <main className="text-gray-400 bg-gray-900 body-font">
        <Home />
        <About />
        <Education/>
        <Experience/>  
        <Projects />
        <Skills />
        <Contact />
        
      </main>
    );
}

export default App;
