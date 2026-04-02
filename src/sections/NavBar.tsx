import Container from "../components/Container";

const Navbar = () => {
  return (
    <nav className="py-6">
      <Container>
        <div className="flex items-center justify-between">

          <h1 className="font-gerbil text-2xl font-medium tracking-tight">
            Elementum
          </h1>

          <div className="hidden md:flex gap-10 text-sm text-gray-700">
            <a className="hover:text-black transition cursor-pointer">Home</a>
            <a className="hover:text-black transition cursor-pointer">Studio</a>
            <a className="hover:text-black transition cursor-pointer">Services</a>
            <a className="hover:text-black transition cursor-pointer">Contact</a>
            <a className="hover:text-black transition cursor-pointer">FAQs</a>
          </div>

          <div className="cursor-pointer">
            <div className="w-6 h-[2px] bg-black mb-1"></div>
            <div className="w-6 h-[2px] bg-black"></div>
          </div>

        </div>
      </Container>
    </nav>
  );
};

export default Navbar;