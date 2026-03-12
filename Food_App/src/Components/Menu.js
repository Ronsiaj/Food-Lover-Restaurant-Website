import React from "react";
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image7 from "../assets/images/image7.png";
import Image8 from "../assets/images/image8.jpg";
import Image9 from "../assets/images/image9.jpg";

const MenuSection = () => {
  return (
    <div className="menu-section">
      <Container>

        {/* Title */}
        <h2 className="menu-title">Our Menu</h2>

        <Row className="menu-row">

          {/* Item 1 */}
          <Col md="4" className="menu-item">
            <img src={Image7} alt="Pizza" />
            <h4>Cheese Pizza</h4>
            <p>Fresh baked pizza with mozzarella cheese.</p>
            <span className="price">Price: ₹250</span>
          </Col>

          {/* Item 2 */}
          <Col md="4" className="menu-item">
            <img src={Image8} alt="Burger" />
            <h4>Chicken Burger</h4>
            <p>Juicy grilled chicken burger with vegetables.</p>
            <span className="price">Price: ₹180</span>
          </Col>

          {/* Item 3 */}
          <Col md="4" className="menu-item">
            <img src={Image9} alt="Pasta" />
            <h4>Italian Pasta</h4>
            <p>Creamy pasta cooked with herbs and cheese.</p>
            <span className="price">Price: ₹220</span>
          </Col>

        </Row>

      </Container>
    </div>
  );
};

export default MenuSection;