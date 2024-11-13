import "./index.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import { ToastContainer } from 'react-toastify';
// import GetStarted from "./components/GetStarted";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<GetStarted />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
          <ToastContainer
          position="top-center"
          autoClose={3000} // You can adjust the auto-close time
          hideProgressBar={false} 
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
           toastClassName="toast-error"
          />
      </Router>
    </div>
  );
}
