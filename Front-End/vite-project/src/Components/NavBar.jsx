import { useState, useEffect } from "react";
import studentsCap from "../assets/students-cap.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  // Maintain state for mobile menu......
  const [isOpen, setIsOpen] = useState(false);

  // Maintain state for active section......
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img className="w-[45px] h-[45px]" src={studentsCap} alt="logo" />
          <Link to="/" className="text-xl font-bold text-gray-800">
            Smart Student Manager
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="#home"
            className={`hover:text-blue-500 ${
              activeSection === "home"
                ? "text-blue-500 border-b-2 border-blue-500"
                : ""
            }`}
          >
            <i className="fa-solid fa-house"></i>
          </a>
          <a
            href="#features"
            className={`hover:text-blue-500 ${
              activeSection === "features"
                ? "text-blue-500 border-b-2 border-blue-500"
                : ""
            }`}
          >
            Features
          </a>
          <a
            href="#howitworks"
            className={`hover:text-blue-500 ${
              activeSection === "howitworks"
                ? "text-blue-500 border-b-2 border-blue-500"
                : ""
            }`}
          >
            How It Works
          </a>
          <a
            href="#about"
            className={`hover:text-blue-500 ${
              activeSection === "about"
                ? "text-blue-500 border-b-2 border-blue-500"
                : ""
            }`}
          >
            About
          </a>
          <Link to="/LoginForm" className="hover:text-blue-500">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Get Started
            </button>
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          // set value of isOpen opposite to current value - If present is true then false and if present is false then true.
        >
          {isOpen ? "✖" : "☰"}
          {/* Here, onclick we switch the state - open for - X or close for - '☰' */}
        </button>
      </div>

      {/* Mobile Menu */}

      {/*Condition check - if both value is true, which means This will only render when isOpen is true means menu is open */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 pb-4">

          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className={
              activeSection === "home" ? "text-blue-500 font-semibold" : ""
            }
          >
            Home
          </a>

          <a
            href="#features"
            onClick={() => setIsOpen(false)}
            className={
              activeSection === "features" ? "text-blue-500 font-semibold" : ""
            }
          >
            Features
          </a>

          <a
            href="#howitworks"
            onClick={() => setIsOpen(false)}
            className={
              activeSection === "howitworks"
                ? "text-blue-500 font-semibold"
                : ""
            }
          >
            How It Works
          </a>

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className={
              activeSection === "about" ? "text-blue-500 font-semibold" : ""
            }
          >
            About
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
