import React, { Component } from "react";
import ProductCard from "../components/ProductCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import LoginModal from "../components/LoginModal";
import API from "../utils/API";

class Storefront extends Component {
  state = {
    products: [],
    selected: []
  };

  goToCart() {
    this.props.history.push("/cart");
  }

  componentDidMount() {
    API.getAll("products")
      .then(res => this.setState({ products: res.data.products }))
      .catch(err => console.log(err));
  }

  handleSelect = id => {
    let selected = this.state.selected;

    this.state.selected.push(id);
    localStorage.setItem("selected", this.state.selected);

    API.getOne("products", id)
      .then(res => {
        let click = res.data.products[0].clicks_without_sale;
        click++;
        console.log(click);
        API.update("products", id, { clicks_without_sale: click })
          .then(result => console.log(result))
          .catch(error => console.log(error));
      })
      .catch(err => console.log(err));

    // update state
    this.setState({
      selected: selected
    });
  };

  
  // Map over this.state.actors and render a ActorCard component for each actor object
  render() {
    return (
      <Wrapper>
        <LoginModal goToCart={this.goToCart.bind(this)} />
        <Title>Products On Sale</Title>

        {this.state.products.map(product => (
          <ProductCard
            handleSelect={this.handleSelect}
            id={product.item_id}
            key={product.item_id}
            name={product.product_name}
            image={product.product_image}
            price={product.price}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Storefront;
