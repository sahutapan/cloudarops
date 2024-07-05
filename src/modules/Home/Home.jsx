import HeroSection from "./components/HeroSection";
import PassionateDevops from "./components/PassionateDevops";
import TechCard from "./components/TechCard";

import TechImg1 from "../../assets/images/technologies-1-1024x435.png";
import TechImg2 from "../../assets/images/technologies-2-1024x435.png";
import TechImg3 from "../../assets/images/technologies-3-1024x435.png";
import TechImg4 from "../../assets/images/technologies-4-1024x435.png";
import Technologies from "./components/Technologies";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PassionateDevops />
      <Technologies />
    </>
  );
};
export default Home;
