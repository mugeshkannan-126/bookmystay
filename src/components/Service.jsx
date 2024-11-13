import Navbar from "./Navbar";
import Hero from "./Hero";
// import AboutImg from "../assets/5.jpg";
const Service = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://cdn.pixabay.com/photo/2015/07/14/07/18/greece-844269_1280.jpg"
        title="Service"
        btnClass="hide"
      />
    </div>
  );
};

export default Service;
