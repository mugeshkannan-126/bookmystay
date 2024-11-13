// index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Optional: Styling for the entire project
import Slider from './components/Slider'
import UseEffect from './components/UseEffect'
import App from './App'


// import CitiesSlider from './components/CitiesSlider.jsx'; // Ensure this path is correct
// const slides = [
//   {
//     city: 'Paris',
//     country: 'France',
//     img:  ''// Paris
//   },
//   {
//     city: 'Singapore',
//     country: 'Singapore',
//     img: 'https://cdn.pixabay.com/photo/2016/06/17/10/27/singapore-1465366_1280.jpg', // Singapore
//   },
//   {
//     city: 'Prague',
//     country: 'Czech Republic',
//     img: 'https://cdn.pixabay.com/photo/2015/08/21/18/54/prague-955883_1280.jpg', // Prague
//   },
//   {
//     city: 'Amsterdam',
//     country: 'Netherlands',
//     img: 'https://cdn.pixabay.com/photo/2016/09/26/18/05/amsterdam-1691863_1280.jpg', // Amsterdam
//   },
//   {
//     city: 'Moscow',
//     country: 'Russia',
//     img: 'https://cdn.pixabay.com/photo/2015/03/26/09/41/moscow-677325_1280.jpg', // Moscow
//   },
// ];


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CitiesSlider slides={slides} /> */}
    <App/>
    {/* <UseEffect/> */}
  </StrictMode>
);
