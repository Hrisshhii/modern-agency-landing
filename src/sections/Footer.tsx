import { Link } from "react-router-dom";
import Container from "../components/Container";
import shape from "../assets/shape.png";
import upperArrow from "../assets/upperarrow.png";

const linkClass="hover:text-black transition-colors duration-200";

const Footer = () => {
  return (
    <section className="bg-[#c7d8cc] py-20 relative overflow-hidden">

      <img src={shape} className="absolute right-[3%] md:right-[15%] top-30 md:top-[20%] w-8 md:w-28 pointer-events-none" />
      <img src={upperArrow} className="absolute left-[41%] -translate-x-1/2 top-0 w-25 md:w-28 pointer-events-none"/>
      <img src={upperArrow} className="absolute left-[50%] md:left-[45%] -translate-x-1/2 top-0 w-25 md:w-28 pointer-events-none"/>
      <Container>
        <div className="text-center">
          <h2 className="font-gerbil text-3xl md:text-6xl leading-tight mb-4">
            Subscribe to <br /> our newsletter
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-6">
            To make your stay special and even more memorable
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:scale-110 hover:shadow-lg hover:opacity-80 transition duration-300 cursor-pointer">
            Subscribe Now
          </button>

          <div className="border-t border-black/30 mt-16 mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-left">
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                    <Link to="/" className={linkClass}>Home</Link>
                </li>
                <li>
                    <Link to="/" className={linkClass}>Studio</Link>
                </li>
                <li>
                    <Link to="/" className={linkClass}>ervice</Link>
                </li>
                <li>
                    <Link to="/" className={linkClass}>Blog</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Terms & Policies</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                    <Link to="" className={linkClass}>Privacy Policy</Link>
                </li>
                <li>
                    <Link to="" className={linkClass}>Terms & Conditions</Link>
                </li>
                <li>
                    <Link to="" className={linkClass}>Explore</Link>
                </li>
                <li>
                    <Link to="" className={linkClass}>Accessibility</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                    <Link to="" className={linkClass}>Instagram</Link>
                </li>
                <li>
                    <Link to="" className={linkClass}>LinkedIn</Link>
                </li>
                <li>
                    <Link to="" className={linkClass}>Youtube</Link>
                </li>
                <li>
                    <Link to="" className={linkClass}>Twitter</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>1498w Fluton ste, STE 2D Chicago, IL 63867.</li>
                <li>(123) 456789000</li>
                <li>info@elementum.com</li>
              </ul>
            </div>

          </div>

          <p className="text-xs text-gray-600 mt-16">
            ©2023 Elementum. All rights reserved
          </p>

        </div>
      </Container>
    </section>
  );
};

export default Footer;