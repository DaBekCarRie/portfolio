import gsap from "gsap";
import About from "./components/About";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlobalBackground from "./components/GlobalBackground";
import GooeyHome from "./components/GooeyHome";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className="App relative">
      <GlobalBackground/>
      <Navbar/>
      <GooeyHome/>
      <About/>
      <Skills/>
      <Work/>
      <Activities/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
