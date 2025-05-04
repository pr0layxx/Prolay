import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // ✅ Import HashLink
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-6 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Brand */}
        <div>
          <h2 className="text-2xl font-bold">Prolay Das</h2>
          <p className="text-sm text-gray-400 mt-2">Full Stack Developer</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <HashLink to="/#home" className="hover:text-indigo-400">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about" className="hover:text-indigo-400">
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#projects"
                className="hover:text-indigo-400"
              >
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact" className="hover:text-indigo-400">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-indigo-400" />
            </a>
            <a
              href="https://github.com/pr0layxx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl hover:text-indigo-400" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-indigo-400" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl hover:text-indigo-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-10 text-sm">
        &copy; {new Date().getFullYear()} Prolay Das. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
