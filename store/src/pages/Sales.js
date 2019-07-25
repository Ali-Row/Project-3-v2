import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Row from "../components/Row";
import Col from "../components/Col";
import Title from "../components/Title";
import InventoryCard from "../components/InventoryCard";
import SearchSaleItems from "../components/SearchSaleItems";
import SearchUnderperforming from "../components/SearchUnderperforming";
import SearchBestselling from "../components/SearchBestselling";
import PlaceItemOnSale from "../components/PlaceItemOnSale";
import SearchResults from "../components/SearchResults";

class Sales extends Component {
  state = {
    search: "",
    itemID: "",
    newPrice: "",
    allProducts: [],
    productPrices: [],
    searchResults: [],
    products: [],
    saleItems: [],
    underperforming: [],
    bestselling: [],
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

  handlePriceChange = event => {
    this.setState({ newPrice: event.target.value });
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

  handleSaleFormSubmit = event => {
    event.preventDefault();
    API.getAll("products")
      .then(res => {
            this.setState({ saleItems: res.data.products.filter(product => product.on_sale > 0), error: ""});
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleLowConversionSubmit = event => {
    event.preventDefault();
    API.getAll("products")
      .then(res => {
            this.setState({ underperforming: res.data.products.filter(product => product.clicks_without_sale > 20), error: ""});
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleBestsellingSubmit = event => {
    event.preventDefault();
    API.getAll("products")
      .then(res => {
        console.log({ results: res.data });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleSalePriceGrab = event => {
    event.preventDefault();
    API.getByName("products", this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ productPrices: res.data.products, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleOnSaleUpdate = event => {
    event.preventDefault();
    if(this.state.newPrice) {
      API.update("products", this.state.productPrices[0].item_id, {"on_sale": "1", "sale_price": this.state.newPrice})
      .then(res => {
        console.log({ results: res.data });
      })
      .catch(err => this.setState({ error: err.message }));
    } else {
    API.update("products", this.state.productPrices[0].item_id, {"on_sale": "1"})
      .then(res => {
        console.log({ results: res.data });
      })
      .catch(err => this.setState({ error: err.message }));
    }
  };

  render() {
    console.log(this.state)
    return (
    <div>
      <Hero backgroundImage="https://42rop22l0te514fbjz3ksxxo-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/SPM-1.jpeg">
        <h1>Sales</h1>
        <h2>How is the market responding to your offers?</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <br/>
            <h1>Track the performance of your stock</h1>
            <br/>
            <h3>Monitor how your stock is selling, adjust prices and place items on sale</h3>
            <br/>
            <hr/>
            <br/>
          </Col>
        </Row>
        <Row>
          <Col size="md-5">
            <Title>View All Sale Items</Title>
              <SearchSaleItems
                handleSaleFormSubmit={this.handleSaleFormSubmit}
                products={this.state.products}
              />
              <Wrapper>
                {this.state.saleItems.map(product => (
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
            <Title>View Bestselling Products</Title>
              <SearchBestselling
                handleBestsellingSubmit={this.handleBestsellingSubmit}
                products={this.state.products}
              />
              <SearchResults results={this.state.results} />
          </Col>
        </Row>
        <Row>
          <Col size="md-5">
            <Title>20+ Clicks, No Sale</Title>
              <SearchUnderperforming
                handleLowConversionSubmit={this.handleLowConversionSubmit}
                products={this.state.products}
              />
              <Wrapper>
                {this.state.underperforming.map(product => (
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
            <Title>Place Item On Sale</Title>
              <PlaceItemOnSale
                handleSalePriceGrab={this.handleSalePriceGrab}
                handleOnSaleUpdate={this.handleOnSaleUpdate}
                handleInputChange={this.handleInputChange}
                handlePriceChange={this.handlePriceChange}
                products={this.state.products}
                newPrice={this.state.newPrice}
              />
              <Wrapper>
                {this.state.productPrices.map(product => (
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
      </Container>
    </div>
  );
  }
}

export default Sales;