import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/NavBar";
import Services from "./sections/Services";


function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Hero />
      <About />
      <Services/>
    </div>
  );
}

export default App;