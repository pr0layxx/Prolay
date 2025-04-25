const About = () => {
  console.log("About is rendering.");

  return (
    <section id="about" className="bg-[#1a1a2e] text-sky-200 py-16 px-8  mb-12">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 items-center ">
        {/* About Me Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4 font-['Poppins']">
            Who I Am
          </h2>
          <p className="text-lg sm:text-xl text-sky-200 mb-6 font-['Roboto']">
            A Full Stack Web Developer passionate about building visually
            appealing and highly functional websites.
          </p>
          <p className="text-lg sm:text-xl mb-6 font-['Roboto']">
            I'm a Full Stack Web Developer with over two years of experience in
            the field. I specialize in designing and developing websites that
            deliver great user experiences.
          </p>
          <p className="text-lg sm:text-xl  mb-6 font-['Roboto']">
            I have led the development of dynamic platforms, including a
            restaurant discovery platform for the Israeli market, an LMS portal,
            and web applications with dual interfaces.
          </p>
          <p className="text-lg sm:text-xl  mb-6 font-['Roboto']">
            Technologies used in these projects include{" "}
            <span className="text-indigo-600">
              Next.js, ReactJS, Node.js, Firebase, AWS,
            </span>{" "}
            and <span className="text-indigo-600">Google Cloud Platform.</span>
          </p>
          <p className="text-lg sm:text-xl  mb-6 font-['Roboto']">
            Currently, I’m exploring{" "}
            <span className="text-indigo-600">Rust</span> to expand my technical
            expertise.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="https://storage.googleapis.com/pictographic/previews/isometric-modern/YXtRfgviVc4Wak9gPAnt.png" // Replace with your actual image link
            alt="   Prolay
               Das"
            className="w-48 h-48 rounded-full object-cover transition duration-300 ease-in-out hover:shadow-[10px_10px_20px_0_rgba(0,_0,_255,_0.8)]"
            style={{
              boxShadow: "0 0 20px rgba(31, 81, 255, 1)", // Custom glow effect
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
