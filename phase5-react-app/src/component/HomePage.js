import React from "react";
import "./HomePage.css";
import BannerBackground from "../Assets/home-banner-background.png";
import Navbar from "./NavBar";
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import Work from "./Work";  // Import the Work component
import Testimonial from "./Testimonial";

const HomePage = () => {
  return (
    <div className="home-container">
      {/* <Navbar /> */}
      <div
        className="home-banner-container"
        style={{ backgroundImage: `url(${BannerBackground})` }}
      >
        <div className="home-text-section">
          <h1 className="primary-heading">
            Where Nature Meets Innovation
            Cultivating a Flourishing Tomorrow
          </h1>
          <p className="primary-text">
            Harvest Success with AgriBix: Your Source for Premium Agri-Solutions. Transform Your Farming Today!!
          </p>
          <button className="secondary-button">
            <Link to="/login">Login <FiArrowRight /></Link>
          </button>
        </div>
      </div>

      {/* Display the Work component */}
      <Work />
      <Testimonial />
      
    </div>
  );
};

export default HomePage;
