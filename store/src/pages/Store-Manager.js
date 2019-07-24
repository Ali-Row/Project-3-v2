import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Row from "../components/Row";
import Col from "../components/Col";
import Title from "../components/Title";
import InventoryCard from "../components/InventoryCard";
import Inventory from "./Inventory";
import Sales from "./Sales";
import StockManagement from "./Stock-Management";
import NavbarManager from "../components/NavbarManager";
import { BrowserRouter as Router, Route } from "react-router-dom";

class StoreManager extends Component {
  state = {
    search: "",
    department: "",
    category: "",
    itemID: "",
    newPrice: "",
    stockChangeAmount: "",
    newStockValue: "",
    confirm: "",
    productName: "",
    productType: "",
    productImage: "",
    departmentName: "",
    rowID: "",
    columnID: "",
    shelfID: "",
    price: "",
    salePrice: "",
    productQuantity: "",
    onSale: "",
    allProducts: [],
    productPrices: [],
    productUpdates: [],
    stockLevels: [],
    productIDs: [],
    searchResults: [],
    products: [],
    inventory: [],
    departments: [],
    categories: [],
    saleItems: [],
    underperforming: [],
    bestselling: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    this.loadPage();
    //this.loadProducts();
  }

  loadPage = () => {
    API.getAll("products")
      .then(res =>
        this.setState({ inventory: res.data.products })
      )
      .catch(err => console.log(err));
  };

  loadProducts = () => {
    API.getAll("products")
      .then(res =>
        this.setState({ allProducts: res.data, error: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state)
    return (
    <div>
      <Hero backgroundImage="https://cdn.shrm.org/image/upload/c_crop%2Ch_1192%2Cw_2120%2Cx_0%2Cy_0/c_fit%2Cf_auto%2Cq_auto%2Cw_767/v1/Legal%20and%20Compliance/iStock-534055580_ld74wz?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjAsIngyIjoyMTIwLCJ5MiI6MTE5MiwidyI6MjEyMCwiaCI6MTE5Mn19">
        <h1>Hi there, store manager!</h1>
        <h2>Here you can control all of your stock</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Router>
          <NavbarManager />
            <Wrapper>
              <Route exact path="/inventory" component={Inventory} />
              <Route exact path="/sales" component={Sales} />
              <Route exact path="/stock-management" component={StockManagement} />
            </Wrapper>
        </Router>
        <Row>
          <Col size="md-12">
            <br/>
            <h1>Welcome to your customizable store manager portal</h1>
            <br/>
            <h3>Below are just some of the ways you can make your life easier...</h3>
            <br/>
            <hr/>
            <br/>
          </Col>
        </Row>
        <Wrapper>
          {this.state.inventory.map(product => (
            <InventoryCard
              id={product.item_id}
              key={product.item_id}
              name={product.product_name}
              image={product.product_image}
              price={product.price}
            />
          ))}
        </Wrapper>
      </Container>
    </div>
  );
  }
}

export default StoreManager;