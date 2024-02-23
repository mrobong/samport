import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Intro from "./components/intro/intro";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills/>
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
