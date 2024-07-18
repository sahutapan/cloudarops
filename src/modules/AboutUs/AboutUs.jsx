import Banner from "../../components/Banner";
import Hero from "./components/Hero";
import Team from "./components/Team";
const AboutUs = () => {
  return (
    <div>
      <Banner
        mainText="Our Story"
        secondText="We make building companies easier"
      />
      <Hero />
      <Team />
    </div>
  );
};

export default AboutUs;
