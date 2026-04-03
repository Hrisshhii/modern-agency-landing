import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/NavBar";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonial";


function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Hero />
      <About />
      <Services/>
      <Testimonials />
    </div>
  );
}

export default App;