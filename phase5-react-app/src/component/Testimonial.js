import React, { useState } from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
import "./Testimonial.css"; // Import the CSS file

const Testimonial = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starRating) => {
    setRating(starRating);
  };
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">Transforming Farming with AgriBix: A Game-Changer!</h1>
        <p className="primary-text">
          AgriBix has truly revolutionized the way I approach farming. The comprehensive range of innovative solutions they offer has completely transformed the productivity and efficiency of my agricultural operations. From their top-notch products to their expert advice, AgriBix has become an indispensable partner in my journey towards sustainable and profitable farming. What I appreciate the most is their commitment to empowering farmers with knowledge and resources that make a real difference. With AgriBix by my side, I'm confidently stepping into a brighter future for my farm. Kudos to the AgriBix team for their exceptional services!
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <AiFillStar
              key={starIndex}
              className={`star ${starIndex <= rating ? "active" : ""}`}
              onClick={() => handleStarClick(starIndex)}
            />
          ))}
        </div>
        <h2>Hudson May</h2>
      </div>
    </div>
  );
};

export default Testimonial;
