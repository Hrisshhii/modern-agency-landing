import Container from "../components/Container";
import underline from "../assets/underline.svg";
import arrow from "../assets/arrow.png";
import curve from "../assets/bg-line.png";

const Services = () => {
  return (
    <section className="py-20 bg-[#f7f7f7] relative overflow-hidden">
      <Container>
        <div className="relative">
          <div className="grid grid-cols-2 gap-10 items-start mb-16">
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

            <div className="relative">
              <img src={curve} className="absolute w-full opacity-80"/>
            </div>
          </div>

          <div className="divide-y divide-gray-300">

            <div className="py-6 flex items-center justify-between group">
              <p className="text-xs text-gray-500 w-1/4">
                Office of multiple interest content
              </p>
              <h3 className="font-gerbil text-lg md:text-3xl w-2/4">
                Colaborative & partnership
              </h3>
              <div className="w-1/4 flex justify-end">
                <img src={arrow} className="w-16 transition group-hover:translate-x-2"/>
              </div>
            </div>

            <div className="py-6 flex items-center justify-between group">
              <p className="text-xs text-gray-500 w-1/4">
                The hanger US Air force digital experimental
              </p>
              <h3 className="font-gerbil text-lg md:text-3xl w-2/4">
                We talk about our weight
              </h3>
              <div className="w-1/4 flex justify-end">
                <img src={arrow} className="w-16 transition group-hover:translate-x-2"/>
              </div>
            </div>

            <div className="py-6 flex items-center justify-between group">
              <p className="text-xs text-gray-500 w-1/4">
                Delta faucet content, social, digital
              </p>
              <h3 className="font-gerbil text-lg md:text-3xl w-2/4">
                Piloting digital confidence
              </h3>
              <div className="w-1/4 flex justify-end">
                <img src={arrow} className="w-16 transition group-hover:translate-x-2 transition duration-300"/>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Services;