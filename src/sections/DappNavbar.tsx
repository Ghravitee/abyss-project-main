import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import logo from "../assets/abyss-logo.png";

const DappNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleSetActive = (link: string) => {
    setActiveLink(link);
    setIsOpen(false); // Close mobile menu on selection
  };

  return (
    <header
      className={`py-6 px-6 md:px-[79px] ${
        navBg ? "bg-Dark-Purple" : "bg-transparent"
      } fixed w-full top-0 left-0 z-50 shadow-lg transition-all duration-300`}
    >
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="font-bold text-2xl font-raleway z-50">
          <img
            src={logo}
            alt="Abyss Logo"
            width={80}
            height={80}
            className=""
          />
        </a>

        <ConnectButton />

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-Light-Gray text-3xl z-50 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-md transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 lg:hidden`}
        onClick={() => setIsOpen(false)}
      >
        <ul
          className="absolute top-0 right-0 w-64 h-full bg-Dark-Purple text-Light-Gray pt-20 px-6 flex flex-col space-y-10 text-lg font-raleway font-medium shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {[{ label: "Home", href: "#home" }].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`transition ${
                  activeLink === item.href ? "text-Purple" : "text-Light-Gray"
                } hover:text-Purple`}
                onClick={() => handleSetActive(item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
          {/* <Button content="Connect Wallet" /> */}
        </ul>
      </div>
    </header>
  );
};

export default DappNavbar;
