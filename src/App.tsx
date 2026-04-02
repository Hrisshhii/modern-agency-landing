import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/NavBar";


function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;