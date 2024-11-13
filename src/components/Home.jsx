import Hero from "./Hero";
import Navbar from "./Navbar";
import Destination from "./Destination";
import Search from "./Search";
import HotelCard from "./HotelCard";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://cdn.pixabay.com/photo/2020/12/24/19/10/hotel-room-5858068_1280.jpg"
        title="Discover a  Brand Luxurious Hotel"
        text="Luxury Living"
        buttonText="Book Now"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Search />
      <HotelCard />
      <Footer />
    </div>
  );
};

export default Home;
