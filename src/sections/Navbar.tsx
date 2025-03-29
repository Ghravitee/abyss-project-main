import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Modal from "@/components/Modal";
import { useAuth } from "@/lib/AuthContext";
import logo from "../assets/abyss-logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const { isModalOpen, setIsModalOpen } = useAuth();
  // const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

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
    <>
      <header
        className={`py-5 px-6 md:px-[79px] ${
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

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-[30px] items-center text-[1rem] font-raleway font-medium">
            {[
              { label: "Home", href: "#home" },
              { label: "How it Works", href: "#howitworks" },
              { label: "Statistics", href: "#statistics" },
              { label: "How to Win", href: "#howtowin" },
              { label: "Ready to Play", href: "#readytoplay" },
            ].map((item) => (
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
          </ul>

          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden text-[1rem] font-semibold rounded-[40px] px-[24px] py-[13px] lg:flex items-center justify-center text-white bg-Purple cursor-pointer"
          >
            Launch App
          </button>

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
            {[
              { label: "Home", href: "#home" },
              { label: "How it Works", href: "#howitworks" },
              { label: "Statistics", href: "#statistics" },
              { label: "How to Win", href: "#howtowin" },
              { label: "Ready to Play", href: "#readytoplay" },
            ].map((item) => (
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
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex text-[1rem] font-semibold rounded-[40px] px-[24px] py-[13px] lg:hidden items-center justify-center text-white bg-Purple cursor-pointer"
            >
              Launch App
            </button>
          </ul>
        </div>
      </header>

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Navbar;
