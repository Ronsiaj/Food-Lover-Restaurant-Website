import React from "react";
import Image6 from "../assets/images/image6.png"; 

const EnjoyFood = () => {
  return (
    <section
      className="enjoy-food"
      style={{ backgroundImage: `url(${Image6})` }}
    >
      <div className="food-box">
        <h2>Enjoy Our Food</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          maecenas accumsan lacus vel facilisis.
        </p>
      </div>
    </section>
  );

};

export default EnjoyFood;