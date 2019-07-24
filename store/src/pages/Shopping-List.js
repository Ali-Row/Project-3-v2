import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function ShoppingList() {
  return (
    <div>
      <Hero backgroundImage="https://images.agoramedia.com/everydayhealth/gcms/blizzard-prepardeness-shopping-list-722x406.jpg">
        <h1>Your Shopping List</h1>
        <h2>Manage your items here</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Click the X to remove an item</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShoppingList;
