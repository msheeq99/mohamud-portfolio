import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Learn />
      {/* <Home/>
      <About />
      <Services/>s
      <Education/>
      <Work/>
      <Contact/> */}
      <Routes>
        <Route exact="true" path="/myportfolio" element={<Home />}></Route>
        <Route path="/myportfolio" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/projects" element={<Jsprojects />}></Route>
        <Route path="/portfolio" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
