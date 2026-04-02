import Container from "../components/Container";
import underline from "../assets/underline.svg";
import arrow from "../assets/arrow.png";
import curve from "../assets/bg-line.png";
import img from "../assets/img.png";
const Services = () => {
  return (
    <section className="py-20 bg-[#f7f7f7] relative overflow-hidden">
      <img src={curve} className="absolute right-[-28%] top-15 md:top-[-25%] w-[65%] opacity-80 pointer-events-none z-0"/>
      <Container>
        <div className="relative">
          <div className="mb-16 max-w-xl">
            <div>
              <h2 className="font-gerbil text-3xl md:text-5xl leading-[1.3]">
                What we{" "}
                <span className="bg-green-200 px-2 py-1 rounded-full">
                  can
                </span>{" "} <br />
                <span className="relative inline-block">
                  offer
                  <img src={underline} className="absolute left-0 -bottom-1 w-full"/>
                </span>{" "} you!
              </h2>
            </div>
          </div>

          <div className="border-y border-gray-300 divide-y divide-gray-300">

            <div className="py-6 flex items-center justify-between group">
              <p className="text-[0.75rem] md:text-[1.15rem] text-gray-500 w-[25%] md:w-[20%] mr-2 md:mr-0">
                Office of multiple interest content
              </p>
              <h3 className="font-gerbil text-lg md:text-3xl w-[50%] px-2">
                Collaborative & partnership
              </h3>
              <div className="w-[25%] flex justify-end">
                <img src={arrow} className="w-16 transition group-hover:translate-x-2 duration-500"/>
              </div>
            </div>

            <div className="py-6 flex items-center justify-between group">
              <p className="text-[0.75rem] md:text-[1.15rem] text-gray-500 w-[25%] md:w-[20%] mr-2 md:mr-0">
                The hanger US Air force digital experimental
              </p>
              <h3 className="font-gerbil text-lg md:text-3xl w-[50%] px-2">
                We talk about our weight
              </h3>
              <div className="w-[25%] flex justify-end">
                <img src={arrow} className="w-16 transition group-hover:translate-x-2 duration-500"/>
              </div>
            </div>

            <div className="py-6 flex items-center justify-between group">
              <p className="text-[0.75rem] md:text-[1.15rem] text-gray-500 w-[25%] md:w-[20%] mr-2 md:mr-0">
                Delta faucet content, social, digital
              </p>
              <h3 className="relative font-gerbil text-lg md:text-3xl w-[50%] px-2">
                Piloting digital{" "}
                <span className="relative inline-block">
                  <img src={img} className="absolute left-1/2 -translate-x-1/2 top-[50%] -translate-y-1/2 w-8 md:w-20 opacity-70 pointer-events-none"/>
                  <span className="relative z-10">
                    confidence
                  </span>
                </span>
              </h3>
              <div className="w-[25%] flex justify-end">
                <img src={arrow} className="w-16 group-hover:translate-x-2 transition duration-500"/>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Services;