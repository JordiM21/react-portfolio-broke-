import { HashRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Home from './components/Home'
import About from './components/About'
import Sidebar from './components/Sidebar'
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";

function App() {


  return ( 
      <div className="App">
        <HashRouter>
          <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
        </HashRouter>
      </div>

  )           
}

export default App
