import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutImg from "../assets/5.jpg";
// import Footer from "./Footer";
const About = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
      />
    </div>
  );
};

export default About;
