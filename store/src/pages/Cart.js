import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";
import Modal from "react-awesome-modal";

class Cart extends Component {
  state = {
    list: [],
    total: 0,
    visible: false
  };

  componentDidMount() {
    API.getShoppingList().then(res => {
      this.setState({ list: res.data });
      this.getTotal();
      localStorage.removeItem("shoppingList");
    });
  }

  handleListItemDelete = id => {
    API.deleteShoppingList(id).then(res =>
      API.getShoppingList().then(res => {
        this.setState({ list: res.data });
        this.getTotal();
      })
    );
  };

  updateStock() {
    // API.update("products", 2, {product_name:"Lego Helicopter"})
    this.openModal();
    this.state.list.map(item => {
      API.update("products", item.product_id, {
        // clicks_without_sale: 0,
        stock_quantity: item.stock_quantity - 1,
        clicks_without_sale: 0
      })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    });
  }

  getTotal = () => {
    let sum = 0;
    let prices = this.state.list.map(item => item.price);
    if (prices.length > 0) {
      sum = prices.reduce((t, price) => {
        return t + price;
      });
    }

    this.setState({ total: sum.toFixed(2) });
  };

  openModal() {
    this.setState({
      visible: true,
      value: ""
    });
  }
  closeModal() {
    this.setState({
      visible: false,
      value: ""
    });
  }

  render() {
    return (
      <div>
        <Hero backgroundImage="https://www.feedstuffs.com/sites/feedstuffs.com/files/styles/article_featured_standard/public/grocery%20cart%20in%20aisle_hxdyl_iStock_470622523.jpg?itok=hL25CLIk">
          <h1>Your Shopping Cart</h1>
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
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product ID</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Delete Item</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.list.map((item, i) => (
                    <tr key={i}>
                      <th scope="row">{item.product_id}</th>
                      <td>{item.product_name} </td>
                      <td>${item.price}</td>
                      <td>
                        <button
                          onClick={() =>
                            this.handleListItemDelete(item.list_id)
                          }
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <th scope="row" />
                    <td>Total</td>

                    <td>${this.state.total}</td>
                    <td />
                  </tr>
                </tbody>
              </table>
              <button onClick={() => this.updateStock()}>
                Purchase My Order
              </button>

              <Modal
                visible={this.state.visible}
                width="400"
                height="200"
                effect="fadeInUp"
                onClickAway={() => this.closeModal()}
              >
                <div>
                  <h1>Thank You For Your Purchase!</h1>
                  <p>Your items are on the way!</p>

                  {/* <input
                    type="email"
                    value={this.state.value}
                    onChange={this.handleChange}
                    required={true}
                  /> */}
                  <a
                    href="javascript:void(0);"
                    onClick={() => this.closeModal()}
                  >
                    Close
                  </a>
                </div>
              </Modal>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Cart;

// Create route on server that accepts shopping_list.id, then deletes it from the database
// Create method in API.js that takes shopping_list.id and sends it to express route
// Use API.js method in this file to delete shopping_list item when button is clicked and  handleListItemDelete is called
