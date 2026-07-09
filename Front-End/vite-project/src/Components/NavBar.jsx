import { useState } from 'react';
import studentsCap from '../assets/students-cap.png';
import { Link } from 'react-router-dom';

const NavBar = () => {

  // Maintain state for mobile menu......
  const [isOpen, setIsOpen] = useState(false);

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
          <Link to="/" className="hover:text-blue-500"><i class="fa-solid fa-house"></i></Link>
          <Link to="/features" className="hover:text-blue-500">Features</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/login" className="hover:text-blue-500">Login</Link>
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
          {isOpen ? '✖' : '☰'}
          {/* Here, onclick we switch the state - open for - X or close for - '☰' */}
        </button>
      </div>

      {/* Mobile Menu */}

      {/*Condition check - if both value is true, which means This will only render when isOpen is true means menu is open */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 pb-4">
          <Link to="/features" onClick={() => setIsOpen(false)}>
            Features
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            Login
          </Link>
          <Link to="/LoginForm" onClick={() => setIsOpen(false)}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
              Get Started
            </button>
          </Link>
        </div>
      )}

    </nav>
  );
};

export default NavBar;