import Navbar from "./Navbar";
import Hero from "./Hero";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://cdn.pixabay.com/photo/2020/03/14/20/02/castle-4931672_1280.jpg"
        title="Contact"
        btnClass="hide"
      />
    </div>
  );
};

export default Contact;
