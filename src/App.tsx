import About from "./sections/About";
import Footer from "./sections/Footer";
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
      <Footer />
    </div>
  );
}

export default App;