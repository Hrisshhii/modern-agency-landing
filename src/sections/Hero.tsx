import Container from "../components/Container";
import squiggleBlack from "../assets/squiggle-black.svg";
import squiggleRed from "../assets/squiggle-red.svg";
import halfCircle from "../assets/half-circle.svg";
import image from "../assets/image.png";
import underline from "../assets/underline.svg";

const Hero = () => {
  return (
    <section className="py-8 md:py-16 bg-[#f7f7f7] relative overflow-hidden">
      <img src={halfCircle} className="absolute right-16 md:right-38 top-28 md:top-40 w-8 sm:w-16 md:w-20 opacity-80"/>
      <img src={squiggleRed} className="absolute left-0 top-[52%] md:top-[35%] w-4 md:w-13"/>
      <img src={squiggleBlack} className="absolute left-4 md:left-10 top-[52%] md:top-[35%] w-4 md:w-15"/>
      <Container>
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="font-gerbil text-4xl sm:text-5xl md:text-7xl leading-[1.1] md:leading-[1.05] tracking-tight">
            The{" "}
            <span className="relative inline-block">
              thinkers
              <img src={underline} className="absolute left-0 -bottom-2 md:-bottom-4 w-[90%] md:w-full pointer-events-none"/>
            </span>{" "}and <br />doers were{" "}ch
            <span className="bg-pink-300/50 px-2 py-1 rounded-full">anging</span> <br />the{" "}
            <span className="bg-green-300/50 px-3 py-1 rounded-full">status</span> Quo with
          </h1>

          <p className="text-[0.75rem] mt-6 text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            We are a team of strategists, designers, communicators, researchers.
            Together, we believe that progress only happens when you refuse to
            play things safe.
          </p>
        </div>
      </Container>
      <div className="relative mt-16 h-50 md:h-65">
        <img src={image} className="absolute left-1/2 -translate-x-1/2 w-95 sm:w-1625 md:w-325 max-w-none" />
      </div>
    </section>
  );
};

export default Hero;