import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HireMe from './components/HireMe';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Services from './components/Services';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <About />
        <Skills />
        <Services />
        <Projects />
        <HireMe />
        <Contact />
        <Footer />
      </main>
      {/* <Router>
        <Routes>
          <Route exact path='/' element={<About />} />
          <Route exact path='#skills-section' element={<Skills />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
