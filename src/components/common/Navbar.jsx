import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "../../assets/images/hack-logo.png";

const Navbar = () => {
  // Tracks which section is active
  const [activeSection, setActiveSection] = useState("home");

  // Controls mobile menu open / close
  const [isOpen, setIsOpen] = useState(false);

  // Navbar items
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "EventDetails", label: "Timeline" },
    { id: "register", label: "Register" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphism background */}
      <div className="relative backdrop-blur-lg bg-white/5 border-b border-white/10 shadow-2xl">
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10" />

        {/* Navbar content */}
        <div className="relative flex items-center justify-between px-6 md:px-12 lg:px-20 py-3">

          {/* Logo + Text */}
          <div className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="Hackathon Logo"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <h1 className="text-white font-bold tracking-wide text-lg md:text-xl">
              TEAM SRM <span className="text-pink-400">HACKATHON</span>

            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300
                  ${
                    activeSection === item.id
                      ? "text-white shadow-lg shadow-purple-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-lg bg-black/70 border-t border-white/10">
          <div className="flex flex-col px-6 py-4 gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-lg text-base transition
                  ${
                    activeSection === item.id
                      ? "text-white bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
