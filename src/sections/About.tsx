import Container from "../components/Container";
import topImage from "../assets/about-top.png";
import bottomImage from "../assets/about-bottom.png";
import underline from "../assets/underline.svg";
import arrow from "../assets/arrow.png";
import triangle from "../assets/triangle.png";
import bgLine from "../assets/bg-line.png";

const About = () => {
  return (
    <section className="py-5 md:py-20 bg-[#f7f7f7] relative overflow-hidden">
      <img src={bgLine} className="absolute md:right-0 top-[43%] md:top-[28%] w-full md:w-[82%] opacity-80 pointer-events-none z-0 "/>
      <Container>
        <div className="relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h2 className="font-gerbil text-2xl md:text-4xl leading-[1.5]">
              <span className="relative inline-block">
                Tomorrow 
                <img src={underline} className="absolute left-0 -bottom-2 w-[90%] md:w-full pointer-events-none"/>
              </span> {" "}should be better than{" "}
              <span className="bg-green-200/60 px-2 py-1 rounded-full">
                today
              </span>
            </h2>

            <p className="mt-4 text-gray-600 max-w-md">
              We are a team of strategists, designers communicators, researchers.
              Together, we believe that progress only happens when you refuse
              to play things safe.
            </p>

            <div className="group mt-6 flex items-center gap-2 text-sm cursor-pointer">
              <span className="group-hover:scale-110 transition duration-300">Read more</span>
              <img src={arrow} className="w-24 pt-2 group-hover:scale-110 transition duration-300"/>
            </div>
          </div>

          <div className="relative flex justify-center">
            <img src={topImage} className="w-[260px] z-1 sm:w-[320px] md:w-[380px] rounded-full object-cover" />
            <div className="absolute right-2 top-[18%] z-0 w-20 md:w-30 h-20 md:h-30 bg-red-400 rotate-15 opacity-80"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative flex justify-center md:order-1 order-2">
            <img src={triangle} className="absolute z-10 w-18 h-15 md:w-28 md:h-25 top-5 left-14"/>
            <img src={bottomImage} className=" w-[260px] sm:w-[320px] md:w-[380px] rounded-full object-cover z-20"/>
            <img src={triangle} className="absolute w-18 h-15 md:w-28 md:h-25 bottom-3 right-14 z-30"/>
          </div>

          <div className="md:order-2 order-1">
            <h2 className="font-gerbil text-2xl md:text-4xl leading-[1.5] z-20">
              <span className="bg-green-200 px-2 py-1 rounded-full">
                See
              </span>{" "}how we can <br />
              help you{" "}
              <span className="relative inline-block">
                progress
                <img src={underline} className="absolute left-0 -bottom-2 w-[90%] md:w-full pointer-events-none z-10"/>
              </span>
            </h2>

            <p className="mt-4 text-gray-600 max-w-md">
              We add a layer of fearless insights and action that allows
              change makers to accelerate their progress in areas such as
              brand, design digital, comms and social research.
            </p>

            <div className="group mt-6 flex items-center gap-2 text-sm cursor-pointer">
              <span className="group-hover:scale-105 transition duration-300">Read more</span>
              <img src={arrow} className="w-24 pt-2 group-hover:scale-105 transition duration-300"/>
            </div>
          </div>

        </div>
        </div>
      </Container>
    </section>
  );
};

export default About;