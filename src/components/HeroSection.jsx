import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 text-gray-800 py-32 text-center font-['Roboto'] ">
      <h1 className="text-3xl sm:text-5xl font-semibold text-gray-800 mb-4 font-['Poppins']">
        Hello, I'm{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent shining-text">
          Prolay Das
        </span>
      </h1>
      <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
        A passionate{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">
          Software Developer{" "}
        </span>
        with experience in building dynamic, scalable applications and web
        solutions. I specialize in both{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">
          Web Development
        </span>{" "}
        and{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">
          Software Development
        </span>
        .
      </p>

      <div className="flex flex-col sm:flex-row sm:justify-center gap-8 mb-8">
        <div className="flex flex-col items-center">
          <span className="text-indigo-600 text-4xl sm:text-5xl">💻</span>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mt-2 font-['Poppins']">
            Web Development
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Building responsive websites and applications.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-indigo-600 text-4xl sm:text-5xl">🖥️</span>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mt-2 font-['Poppins']">
            Software Development
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Creating custom software solutions for your business needs.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-indigo-600 text-4xl sm:text-5xl">📱</span>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mt-2 font-['Poppins']">
            Mobile App Development
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Developing cross-platform mobile apps to reach your audience
            anywhere.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-12 mt-6">
        <Link to="/project">
          <div className="inline-flex items-center justify-center bg-indigo-500 text-white px-8 py-4 rounded-lg text-xl font-medium hover:bg-indigo-600 transition duration-300 shadow-lg shadow-indigo-500/50">
            Explore My Work
          </div>
        </Link>

        <a
          href="https://your-resume-link.com/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-indigo-500 text-white px-8 py-4 rounded-lg text-xl font-medium hover:bg-indigo-600 transition duration-300 shadow-lg shadow-indigo-500/50"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
