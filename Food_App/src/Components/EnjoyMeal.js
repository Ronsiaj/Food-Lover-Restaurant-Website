import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image10 from "../assets/images/image10.png"; // your image

const EnjoyMeal = () => {
  return (
    <div className="enjoy-meal-section">
      <Container>
        <Row className="align-items-center">

          {/* LEFT SIDE IMAGE */}
          <Col md="6">
            <div className="meal-image">
              <img src={Image10} alt="Meal" />
            </div>
          </Col>

          {/* RIGHT SIDE TEXT */}
          <Col md="6">
            <div className="meal-content">
              <h2>Enjoy Your Meal</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default EnjoyMeal;