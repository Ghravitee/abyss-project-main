import { motion } from "framer-motion";
import telegram from "../assets/telegram.png";
import twitter from "../assets/twitter.png";
import discord from "../assets/discord.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="border-t border-t-HowTo-Cards-border px-[40px] py-[30px] lg:py-[60px]"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="font-bold text-[40px] font-raleway mb-[40px] text-center lg:text-left">
            <span className="text-Purple">Abyss</span>
            <span className="text-Light-Gray">Pot</span>
          </div>
          {/* Social links */}
          <div className="flex items-center space-x-4 mb-[32px]">
            {[telegram, discord, twitter, linkedin, facebook, youtube].map(
              (icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="flex items-center justify-center size-[34px] rounded-full bg-Purple"
                >
                  <img src={icon} alt="" />
                </motion.a>
              )
            )}
          </div>
          <p className="text-Light-Gray-1 hidden lg:block text-left">
            2025 AbyssPot. All rights reserved
          </p>
        </motion.div>

        {/* Right column */}
        <motion.div
          className="flex flex-col lg:flex-row gap-4 lg:gap-20 xl:gap-[150px] w-full lg:justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {["About Us", "Services", "Learn"].map((section, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }}>
              <h3 className="font-raleway text-Light-Gray font-semibold mb-5 text-center lg:text-left">
                {section}
              </h3>
              <ul className="flex flex-col lg:items-start items-center gap-5 text-Light-Gray-1">
                {idx === 0 &&
                  ["About", "Blog", "Legal & Privacy"].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-Grayish-Violet">
                        {item}
                      </a>
                    </li>
                  ))}
                {idx === 1 &&
                  ["Applications", "Buy Crypto", "Affiliate"].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-Grayish-Violet">
                        {item}
                      </a>
                    </li>
                  ))}
                {idx === 2 &&
                  [
                    "What is Cryptocurrency?",
                    "Tips and Tutorials",
                    "Market and Updates",
                  ].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-Grayish-Violet">
                        {item}
                      </a>
                    </li>
                  ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <p className="text-Light-Gray-1 text-sm block lg:hidden ">
          2025 AbyssPot. All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
