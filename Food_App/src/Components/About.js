import React from "react";
import aboutImg from "../assets/images/image3.png"; 

const About = () => {
  return (
    <section className="about-section">

      <div className="about-container">

        <div className="about-image">
          <img src={aboutImg} alt="About Food" />
        </div>

        <div className="about-content">
          <h2>About Us</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Quis ipsum suspendisse ultrices gravida.
            Risus commodo viverra maecenas accumsan lacus vel
            facilisis.
          </p>
        </div>

      </div>

    </section>
  );
};

export default About;