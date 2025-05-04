import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for full-page navigation
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Hamburger and close icons
import { HashLink } from "react-router-hash-link"; // For smooth scroll navigation (hash links)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define the navigation items
  const navItems = [
    { name: "Home", path: "/#home" }, // Full-page route for Home
    { name: "About", path: "/#about" }, // HashLink for smooth scroll to About section
    { name: "Skills", path: "/#skills" }, // HashLink for smooth scroll to Skills section
    { name: "Projects", path: "/#projects" }, // Full-page route for Projects
    { name: "Contact", path: "/#contact" }, // HashLink for smooth scroll to Contact section
  ];

  return (
    <nav className="bg-white shadow-2xl py-4 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo or brand name */}
          <div className="text-xl font-semibold text-gray-900">
            <Link to="/" className="text-gray-900 hover:text-sky-500">
              My Portfolio
            </Link>
          </div>

          {/* Navbar links (for desktop view) */}
          <div className="hidden md:flex space-x-20">
            {navItems.map((item) =>
              // Use HashLink for internal section links and Link for full-page routes
              item.path.includes("#") ? (
                <HashLink
                  key={item.name}
                  smooth
                  to={item.path}
                  className="text-gray-900 hover:text-sky-500 font-medium"
                >
                  {item.name}
                </HashLink>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-900 hover:text-sky-500 font-medium"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (shown when hamburger is clicked) */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center justify-center space-y-4 mt-4">
            {navItems.map((item) =>
              // Use HashLink for internal section links and Link for full-page routes
              item.path.includes("#") ? (
                <HashLink
                  key={item.name}
                  smooth
                  to={item.path}
                  className="block text-gray-900 hover:text-sky-500 py-2"
                >
                  {item.name}
                </HashLink>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-gray-900 hover:text-sky-500 py-2"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
