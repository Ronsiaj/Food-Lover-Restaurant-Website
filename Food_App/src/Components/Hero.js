import React from "react";
import Image2 from "../assets/images/image2.png";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-image">
        <img
          src={Image2}
          alt="breakfast"
        />
      </div>

      <div className="hero-content">
        <h1>
          Contact Us For <br />
          <span>Best Breakfast</span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>

        <button>Contact Us</button>
      </div>

    </section>
  );
};

export default Hero;