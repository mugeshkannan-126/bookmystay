import "./hotelCard.css";
import AboutImg from "../assets/1.jpg"

const HotelCard = () => {
  return (
    <div className="hotel-card">
      <div className="hotel-image">
        <img
          src={AboutImg}
          alt="Hotel"
        />
      </div>
      <div className="hotel-details">
        <h2>ITC Grand Chola</h2>
        <p>Chennai</p>
        <p>
          Rating: <span style={{ color: "gold" }}>★★★★★</span>
        </p>
        <p>Price: $100/night</p>
        <button className="book-now-button">Book Now</button>
      </div>
      <div className="hotel-image">
        <img
          src="https://images.pexels.com/photos/12460246/pexels-photo-12460246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Hotel"
        />
      </div>
      <div className="hotel-details">
        <h2>Taj Mahal Palace</h2>
        <p>Mumbai</p>
        <p>
          Rating: <span style={{ color: "gold" }}>★★★★★</span>
        </p>
        <p>Price: $100/night</p>
        <button className="book-now-button">Book Now</button>
      </div>
      <div className="hotel-image">
        <img
          src="https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-udaivilas-udaipur/gallery/featured/udaivilas-gallery-featured-1-aerial-view-724x407.jpg?extension=webp"
          alt="Hotel"
        />
      </div>

      <div className="hotel-details">
        <h2>The Oberoi Udaivilas</h2>
        <p>Udaipure</p>
        <p>
          Rating: <span style={{ color: "gold" }}>★★★★★</span>
        </p>
        <p>Price: $100/night</p>
        <button className="book-now-button">Book Now</button>
      </div>
      <div className="hotel-image">
        <img
          src="https://c7.alamy.com/comp/KH5E70/leela-palace-from-lake-pichola-udaipur-rajasthan-india-KH5E70.jpg"
          alt="Hotel"
        />
      </div>
      <div className="hotel-details">
        <h2>The Leela Palace</h2>
        <p>New Delhi</p>
        <p>
          Rating: <span style={{ color: "gold" }}>★★★★</span>☆
        </p>
        <p>Price: $100/night</p>
        <button className="book-now-button">Book Now</button>
      </div>
      <div className="hotel-image">
        <img
          src="https://cdn.sanity.io/images/ocl5w36p/production/bd3ae57af238b2c597b02abc2d0bba82ed8d5d46-5616x3744.jpg?w=1600&auto=format&dpr=2"
          alt="Hotel"
        />
      </div>
      <div className="hotel-details">
        <h2>The Taj Falaknuma Palace</h2>
        <p> Hyderabad</p>
        <p>
          Rating: <span style={{ color: "gold" }}>★★★★</span>☆
        </p>
        <p>Price: $100/night</p>
        <button className="book-now-button">Book Now</button>
      </div>
      <div className="hotel-image">
        <img
          src="https://cache.marriott.com/content/dam/marriott-renditions/BOMXR/bomxr-great-hall-1524-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*"
          alt="Hotel"
        />
      </div>
      <div className="hotel-details">
        <h2>The St. Regis</h2>
        <p>Mumbai</p>
        <p>
          Rating: <span style={{ color: "gold" }}>★★★★</span>☆
        </p>
        <p>Price: $100/night</p>
        <button className="book-now-button">Book Now</button>
      </div>
    </div>
  );
};

export default HotelCard;
