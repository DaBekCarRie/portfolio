import About from "./components/About";
import Activities from "./components/Activities";
import Contract from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="App bg-[#0a192f]">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Activities/>
      <Contract/>
    </div>
  );
}

export default App;
