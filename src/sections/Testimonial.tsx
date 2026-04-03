import Container from "../components/Container";
import underline from "../assets/underline.svg";
import testimonialImg from "../assets/testimonal-img.png";

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#f7f7f7] relative overflow-hidden">
      <img src={testimonialImg} className="absolute left-1/2 -translate-x-1/2 top-[10%] md:top-[20%] w-[90%] md:w-full max-w-[1200px] pointer-events-none z-0" />

      <Container>
        <div className="relative z-10 text-center">

          <h2 className="font-gerbil text-[0.85rem] md:text-5xl leading-[1.3] mb-16">
            <span className="bg-green-200 px-2 py-1 rounded-full">
              What
            </span>{" "}our customer <br />says{" "}
            <span className="relative inline-block">
              About Us
              <img src={underline} className="absolute left-0 -bottom-2 w-full"/>
            </span>
          </h2>

          <div className="max-w-xl mx-auto bg-[#e8efe9] rounded-3xl px-6 py-8 md:px-10 md:py-10 text-gray-700 relative">

            <p className="relative text-[0.85rem] md:text-base leading-[1.8] text-gray-700">
              <span className="absolute left-[-5%] md:left-0 md:top-[-10%] text-5xl md:text-8xl text-gray-500">“</span>
              Elementum delivered the site within the timeline as they requested.
              In the end, the client found a 50% increase in traffic within days
              since its launch. They also had an impressive ability to use
              technologies that the company hasn&apos;t used, which have also proved
              to be easy to use and reliable
              <span className="absolute right-[5%] md:right-[14%] md:-bottom-15 text-5xl md:text-8xl text-gray-500">”</span>
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Testimonials;