import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"; // Social media icons

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-900 py-16 px-8 font-inter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section (Image + Text) */}
        <div className="flex flex-col justify-center items-start space-y-6">
          <img src="your-image-url.jpg" alt="Contact" className="w-full h-auto rounded-xl shadow-lg" />
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold text-white">Get in Touch</h2>
            <p className="text-lg text-gray-300">
              I would love to hear from you! Whether you have a project idea, a question, or just want to connect, feel free to reach out.
            </p>
          </div>
        </div>

        {/* Right Section (Form + Social Links) */}
        <div className="bg-[#9dd7ec] p-6 rounded-4xl shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full max-w-md mx-auto">
          <h3 className="text-3xl font-semibold text-[#145268] mb-6">Contact Form</h3>
          <form>
            <div className="space-y-4 rounded-4xl">
              <div>
                <label htmlFor="name" className="block text-lg text-black">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-1.5 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#145268] text-white"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg text-gray-900">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-1.5 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#145268] text-white"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg text-gray-900">Your Message</label>
                <textarea
                  id="message"
                  className="w-full px-4 py-1.5 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#145268] text-white"
                  placeholder="Write your message here"
                  rows="3"  // Reduced height of the textarea
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Social Media Links using Link from react-router-dom */}
          <div className="flex space-x-6 mt-6">
            <Link to="https://facebook.com" className="text-gray-400 hover:text-[#003ffd]">
              <FaFacebook className="h-6 w-6 transition duration-300 transform hover:scale-125 hover:text-[#003ffd]" />
            </Link>
            <Link to="https://instagram.com" className="text-gray-400 hover:text-blue-600">
              <FaInstagram className="h-6 w-6 transition duration-300 transform hover:scale-125 hover:text-[#003ffd]" />
            </Link>
            <Link to="https://linkedin.com" className="text-gray-400 hover:text-blue-600">
              <FaLinkedin className="h-6 w-6 transition duration-300 transform hover:scale-125 hover:text-[#003ffd]" />
            </Link>
            <Link to="https://twitter.com" className="text-gray-400 hover:text-blue-600">
              <FaTwitter className="h-6 w-6 transition duration-300 transform hover:scale-125 hover:text-[#003ffd]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
