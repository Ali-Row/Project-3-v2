import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Row from "../components/Row";
import Col from "../components/Col";
import Title from "../components/Title";
import InventoryCard from "../components/InventoryCard";
import SearchForm from "../components/SearchForm";
import SearchDepartments from "../components/SearchDepartments";
import SearchCategories from "../components/SearchCategories";
import SearchResults from "../components/SearchResults";

class Inventory extends Component {
  state = {
    search: "",
    department: "",
    category: "",
    allProducts: [],
    searchResults: [],
    products: [],
    departments: [],
    categories: [],
    results: [],
    error: ""
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getAll("products")
      .then(res =>
        this.setState({ allProducts: res.data, error: "" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleDepartmentChange = event => {
    this.setState({ department: event.target.value });
  };

  handleCategoryChange = event => {
    this.setState({ category: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getByName("products", this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ searchResults: res.data.products, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleDepartmentSearch = event => {
    event.preventDefault();
    API.getByName("departments", this.state.department)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ departments: res.data.products, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleCategorySearch = event => {
    event.preventDefault();
    API.getByType("products", this.state.category)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ categories: res.data.products, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    console.log(this.state)
    return (
    <div>
      <Hero backgroundImage="https://www.logisticsbureau.com/blog/wp-content/uploads/2012/05/Blog_What-is-Inventory.png">
        <h1>Store Inventory</h1>
        <h2>If it exists, you'll find it here</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <br/>
            <h1>Looking for something?</h1>
            <br/>
            <h3>View all of the stock in store</h3>
            <br/>
            <hr/>
            <br/>
          </Col>
        </Row>
        <Row>
          <Col size="md-5">
            <Title>Search By Product Name</Title>
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                products={this.state.products}
              />
              <Wrapper>
                {this.state.searchResults.map(product => (
                  <InventoryCard
                    id={product.item_id}
                    key={product.item_id}
                    name={product.product_name}
                    image={product.product_image}
                    quantityInStore={product.stock_quantity}
                    price={product.price}
                    salePrice={product.sale_price}
                  />
                ))}
              </Wrapper>
              <SearchResults results={this.state.results} />
          </Col>
          <Col size="md-2"></Col>
          <Col size="md-5">
            <Title>Search By Department</Title>
              <SearchDepartments
                handleDepartmentSearch={this.handleDepartmentSearch}
                handleDepartmentChange={this.handleDepartmentChange}
                departments={this.state.departments}
              />
              <Wrapper>
                {this.state.departments.map(product => (
                  <InventoryCard
                    id={product.item_id}
                    key={product.item_id}
                    name={product.product_name}
                    image={product.product_image}
                    quantityInStore={product.stock_quantity}
                    price={product.price}
                    salePrice={product.sale_price}
                  />
                ))}
              </Wrapper>
              <SearchResults results={this.state.results} />
          </Col>
        </Row>
        <Row>
          <Col size="md-5">
            <Title>Search By Category</Title>
              <SearchCategories
                handleCategorySearch={this.handleCategorySearch}
                handleCategoryChange={this.handleCategoryChange}
                products={this.state.products}
              />
              <Wrapper>
                {this.state.categories.map(product => (
                  <InventoryCard
                    id={product.item_id}
                    key={product.item_id}
                    name={product.product_name}
                    image={product.product_image}
                    quantityInStore={product.stock_quantity}
                    price={product.price}
                    salePrice={product.sale_price}
                  />
                ))}
              </Wrapper>
              <SearchResults results={this.state.results} />
          </Col>
          <Col size="md-2"></Col>
          <Col size="md-5">
          </Col>
        </Row>
      </Container>
    </div>
  );
  }
}

export default Inventory;