import Container from "../components/Container";

const Hero = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            The thinkers and <br />doers were changing <br />the status quo with
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl mx-auto">
            We are a team of strategists, designers, communicators, researchers.
            Together, we believe that progress only happens when you refuse to
            play things safe.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Hero;