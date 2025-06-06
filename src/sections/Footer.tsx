import { motion } from "framer-motion";
import telegram from "../assets/telegram.png";
import twitter from "../assets/twitter.png";
import gitbook from "../assets/gitbook.png";

const footerItems = [
  {
    icon: twitter,
    link: "https://x.com/AbyssPot",
  },
  {
    icon: telegram,
    link: "https://t.me/Abysspot",
  },
  {
    icon: gitbook,
    link: "https://abyss-5.gitbook.io/abyss-docs",
  },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="border-t border-t-HowTo-Cards-border px-[40px] py-[30px] lg:py-[60px]"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 max-w-[1300px] mx-auto">
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
            {footerItems.map(({ icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center size-[34px] rounded-full bg-Purple"
              >
                <img src={icon} alt="" />
              </motion.a>
            ))}
          </div>
          <p className="text-Light-Gray-1 hidden lg:block text-left">
            2025 AbyssPot. All rights reserved
          </p>
        </motion.div>

        {/* Right column */}
        <motion.div
          className="lg:self-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-Light-Gray-1 text-center">
            Step into AbyssPot—where strategy meets innovation!
          </p>
        </motion.div>
        <p className="text-Light-Gray-1 text-sm block lg:hidden ">
          2025 AbyssPot. All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
