import React from "react";
import Image5 from "../assets/images/image5.jpg";

const FoodQuality = () => {
  return (
    <section className="food-quality">

      <div className="quality-content">
        <h2>Our Food Quality</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>

      <div className="quality-image">
        <img src={Image5} alt="food" />
      </div>

    </section>
  );
};

export default FoodQuality;