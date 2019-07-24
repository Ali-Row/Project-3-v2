import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Title from "../components/Title";
import { Input, TextArea, FormBtn } from "../components/Form";

class Login extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    address: "",
    number: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.email) {
      console.log({
        username: this.state.username,
        email: this.state.email,
        address: this.state.address,
        number: this.state.number
      })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-5">
            <Title>
              <h1>Log In</h1>
            </Title>
            <form>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
              <FormBtn
                disabled={!(this.state.username && this.state.email)}
                onClick={this.handleFormSubmit}
              >
                Log In
              </FormBtn>
            </form>
          </Col>
          <Col size="md-2">

          </Col>
          <Col size="md-5">
            <Title>
              <h1>Not a user yet? Sign up here!</h1>
            </Title>
            <form>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <Input
                value={this.state.number}
                onChange={this.handleInputChange}
                name="number"
                placeholder="Number (optional)"
              />
              <TextArea
                value={this.state.address}
                onChange={this.handleInputChange}
                name="address"
                placeholder="Address (optional)"
              />
              <FormBtn
                disabled={!(this.state.username && this.state.email)}
                onClick={this.handleFormSubmit}
              >
                Sign Up
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;