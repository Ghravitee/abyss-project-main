import Cta from "@/sections/Cta";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import HowItWorks from "@/sections/HowItWorks";
import HowTowin from "@/sections/HowTowin";
import Navbar from "@/sections/Navbar";
import ReadyToPlay from "@/sections/ReadyToPlay";
import Statistics from "@/sections/Statistics";
import Tokenomics from "@/sections/Tokenomics";
import { pureGameActive } from "@/web3/readContracts";

const Home = () => {
  return (
    <div className="custom-scrollbar">
      <Navbar />
      <Hero />
      <div className="relative">
        <div className="size-[20rem] bg-[#A510D6] rounded-[50%] absolute left-0 top-0 blur-[200px]" />
        <div className="size-[20rem] bg-[#da6efd] rounded-[50%] absolute right-0 bottom-0 blur-[200px]" />
        <HowItWorks />
        {pureGameActive && <Statistics />}
        {/* <Statistics /> */}
        <HowTowin />
        <Tokenomics />
      </div>
      <ReadyToPlay />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
