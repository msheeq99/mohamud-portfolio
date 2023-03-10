import "./App.css";

import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from './components/project'



export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}