import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";
import ProductCard from "../components/ProductCard";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import SearchWithinBudget from "../components/SearchWithinBudget";
import SearchSaleItems from "../components/SearchSaleItems";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    products: [],
    results: [],
    userResults: [],
    userBudget: "",
    withinBudget: [],
    saleItems: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getAll("products")
    .then(res => console.log({ results: res.data }))
    .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleBudgetChange = event => {
    this.setState({ userBudget: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getByName("products", this.state.search)
      .then(res => {
        this.setState({ userResults: res.data.products, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleUserBudgetLimit = event => {
    event.preventDefault();
    API.getAll("products")
      .then(res => {
            this.setState({ withinBudget: res.data.products.filter(product => product.price < parseInt(this.state.userBudget)), error: ""});
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleSaleFormSubmit = event => {
    event.preventDefault();
    API.getAll("products")
      .then(res => {
            this.setState({ saleItems: res.data.products.filter(product => product.on_sale > 0), error: ""});
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    console.log(this.state)
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <Row>
            <Col size="md-4">
            <Title>Search products</Title>
              <Alert
                type="danger"
                style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
              >
                {this.state.error}
              </Alert>
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                products={this.state.products}
              />
              <Wrapper>
                {this.state.userResults.map(product => (
                  <ProductCard
                    id={product.item_id}
                    key={product.item_id}
                    name={product.product_name}
                    image={product.product_image}
                    price={product.price}
                  />
                ))}
              </Wrapper>
              <SearchResults results={this.state.results} />
            </Col>
            <Col size="md-4">
              <Title>Do you have a budget?</Title>
                <SearchWithinBudget
                  handleUserBudgetLimit={this.handleUserBudgetLimit}
                  handleBudgetChange={this.handleBudgetChange}
                  products={this.state.products}
                />
                <Wrapper>
                {this.state.withinBudget.map(product => (
                  <ProductCard
                    id={product.item_id}
                    key={product.item_id}
                    name={product.product_name}
                    image={product.product_image}
                    price={product.price}
                  />
                ))}
              </Wrapper>
              <SearchResults results={this.state.results} />
            </Col>
            <Col size="md-4">
              <Title>View Sale Items</Title>
                <SearchSaleItems
                  handleSaleFormSubmit={this.handleSaleFormSubmit}
                  products={this.state.products}
                />
                <Wrapper>
                {this.state.saleItems.map(product => (
                  <ProductCard
                    id={product.item_id}
                    key={product.item_id}
                    name={product.product_name}
                    image={product.product_image}
                    price={product.price}
                  />
                ))}
              </Wrapper>
              <SearchResults results={this.state.results} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
