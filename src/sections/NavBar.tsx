import Container from "../components/Container";


const Navbar = () => {
  return (
    <nav className="py-4">
      <Container>
        <div className="flex items-center justify-between">

          <h1 className="text-xl font-semibold">Elementum</h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#">Home</a>
            <a href="#">Studio</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <a href="#">FAQs</a>
          </div>

          <div className="md:hidden">
            <div className="w-6 h-[2px] bg-black mb-1"></div>
            <div className="w-6 h-[2px] bg-black"></div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;