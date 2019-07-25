import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Wrapper from "../components/Wrapper";
import TeamCard from "../components/TeamCard";
import team from "./team.json"

class About extends Component {

  state = {
    team
  };

  render() {
    return (
      <div>
        <Hero backgroundImage="https://media4.s-nbcnews.com/i/newscms/2017_26/2053956/170627-better-grocery-store-main-se-539p_80a9ba9c8d466788799ca27568ee0d43.jpg">
          <h1>Products R Us</h1>
          <h2>What are you looking for?</h2>
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Welcome To Our Storefront!</h1>
              <br/>
              <h5>Products R Us is a full-stack React application delployed over Heroku that utilizes HTML5, CSS3, Javascript, Node.js, Express.js, Bootstrap 4, Axios, MySQL and React.</h5>
              <br/>
              <h5>This project is a practical demonstration of our ability to navigate the interplay between an online customer-facing store and the needs of a store manager to control and monitor stock. A customer and a store manager can be interacting with our MySQL database and the results of their choices will be reflected in the information shown to one another in real time.</h5>
              <br/>
              <hr/>
              <br/>
              <h2>Meet The Team</h2>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
            <Wrapper>
              {this.state.team.map(team => (
                <TeamCard
                  id={team.id}
                  key={team.id}
                  name={team.name}
                  image={team.image}
                  github={team.github}
                  portfolio={team.portfolio}
                  role={team.role}
                />
              ))}
            </Wrapper>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
