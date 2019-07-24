import React from "react";
import "./style.css";
import API from "../../utils/API";

class InputEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    localStorage.clear();
    API.getCustomerByEmail(this.state.value)
      .then(res =>
        localStorage.setItem("customerId", res.data.customers[0].customer_id)
      )
      .catch(err => console.log(err));

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Email:
        <input
          type="email"
          value={this.state.value}
          onChange={this.handleChange}
          required={true}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InputEmail;
