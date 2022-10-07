import "./App.css";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      
      <Router>
      <SideBar/>
          <Routes>
            <Route  path="/" element = {  <Home />} />
            <Route exact path="/intro" element = {  <About />} />
            <Route exact path="/services" element = {  <Services />} />
            <Route exact path="/contact" element = {  <Contact />} />
            <Route exact path="/blog" element = {  <Blog />} /> 
          </Routes>
      </Router>
    </>
  );
}

export default App;
