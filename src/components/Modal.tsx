import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { FiX } from "react-icons/fi";
import connectingLogo from "../assets/connecting-logo.png";
import metamask from "../assets/metamask.png";
import check from "../assets/check.png";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [loading, setLoading] = useState(false);

  const handleNavigate = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/dapp"; // Navigate to dApp
    }, 3000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-md z-50">
      {loading ? (
        <div className="relative flex flex-col justify-center bg-Dark-Purple w-[90%] lg:w-[30%] h-[60%] p-6 rounded-lg">
          <div className="flex items-center justify-between mt-10">
            <img src={connectingLogo} alt="connectingLogo" />
            {/* Dotted line */}
            <div className="w-full border-t-2 border-dotted border-white"></div>
            <img src={check} alt="" />
            {/* Dotted line */}
            <div className="w-full border-t-2 border-dotted border-white"></div>
            <img
              src={metamask}
              alt="metamask"
              className="p-3 flex border border-white rounded-full"
            />
          </div>

          <a
            href="/"
            className="mx-auto mt-32 cursor-pointer bg-Purple text-white md:px-10 px-8 py-2 rounded-full flex hover:bg-opacity-90 transition items-center justify-center gap-2"
          >
            Return Home
          </a>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="bg-Dark-Purple p-6 rounded-lg w-[90%] max-w-[760px] relative"
        >
          <div>
            <img src={logo} alt="Logo" className="mb-[24px] mx-auto" />
            <p className="text-Light-Gray text-[18px] md:text-[20px] font-bold mb-6">
              Bid at the perfect moment and you could walk away with a massive
              prize!
            </p>
            <ul className="flex flex-col items-start space-y-4 pl-10 text-left">
              <li className="font-medium text-white text-sm md:text-base list-disc">
                Each bid costs{" "}
                <span className="text-Purple font-bold">100 $ABYSS</span>{" "}
                tokens, no more, no less.
              </li>
              <li className="font-medium text-white text-sm md:text-base list-disc">
                Every bid resets the countdown timer, keeping the game alive.
              </li>
              <li className="font-medium text-white text-sm md:text-base list-disc">
                <span className="text-Purple font-bold">5%</span> of each bid is
                permanently removed from circulation.
              </li>
              <li className="font-medium text-white text-sm md:text-base list-disc">
                The remaining{" "}
                <span className="text-Purple font-medium">95%</span> of each bid
                goes into the prize pot.
              </li>
              <li className="font-medium text-white text-sm md:text-base list-disc">
                If the pot is below{" "}
                <span className="text-Purple font-medium">$15,000</span>, the
                last player to bid wins everything when the timer hits zero.
              </li>
              <li className="font-medium text-white text-sm md:text-base list-disc">
                If the pot reaches{" "}
                <span className="text-Purple font-bold">$15,000</span> and no
                one bids for 24 hours, the prize splits -
                <span className="text-Purple font-bold">30%</span> goes to the
                last bidder & <span className="text-Purple font-bold">70%</span>{" "}
                is shared among nine random players who joined the game.
              </li>
              <li className="font-medium text-white text-sm md:text-base list-disc">
                The key is timing - place bids strategically to secure the pot
                before the timer expires.
              </li>
            </ul>
            {/* Button to Navigate to dApp */}
            <button
              onClick={handleNavigate}
              disabled={loading}
              className="mx-auto cursor-pointer bg-Purple text-white md:px-10 px-8 py-2 rounded-full flex hover:bg-opacity-90 transition mt-4 items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="loader"></span>
                  Loading...
                </>
              ) : (
                "Enter dApp"
              )}
            </button>
            {/* Close Button */}
            <FiX
              onClick={onClose}
              className="absolute top-5 right-8 mt-4 block text-Light-Gray hover:text-Purple transition text-2xl cursor-pointer"
            />
          </div>
        </motion.div>
      )}
      {/* Modal Content */}
    </div>
  );
};

export default Modal;
