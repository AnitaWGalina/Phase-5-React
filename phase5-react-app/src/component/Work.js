import React from "react";
// import "./Work.css";
// import PickMeals from "../Assets/pick-meals-image.png";
// import ChooseMeals from "../Assets/choose-image.png";

// import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Fertilizers",
      text: "Unlock the true potential of your crops and nurture a harvest of abundance with our cutting-edge fertilizers.",
    },
    {
      image: ChooseMeals,
      title: "Land Ownership",
      text: "Invest in your agricultural future with TerraFirm's exceptional land buying opportunities.",
    },
    {
      image: DeliveryMeals,
      title: "Expert Training",
      text: "Unlock the full potential of your agricultural ventures with CultivatePro's comprehensive farmer training program",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">How AgriBix works</p>
        <h1 className="primary-heading">Elevate Your Agriculture Game with AgriBix</h1>
        <p className="primary-text">
          Sign up to get our product and services
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-info-container" key={data.title}>
            <div className="work-section-info">
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
