import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Row from "../components/Row";
import Col from "../components/Col";
import Title from "../components/Title";
import InventoryCard from "../components/InventoryCard";
import AddStock from "../components/AddStock";
import RemoveStock from "../components/RemoveStock";
import CreateProduct from "../components/CreateProduct";
import UpdateProduct from "../components/UpdateProduct";
import DeleteProduct from "../components/DeleteProduct";
import SearchResults from "../components/SearchResults";

class StockManagement extends Component {
  state = {
    search: "",
    itemID: "",
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
    productUpdates: [],
    stockLevels: [],
    productID: [],
    searchResults: [],
    products: [],
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

  handleStockChange = event => {
    this.setState({ stockChangeAmount: event.target.value });
  }

  handleConfirm = event => {
    this.setState({ confirm: event.target.value });
  }

  handleProductName = event => {
    this.setState({ productName: event.target.value });
  }

  handleProductType = event => {
    this.setState({ productType: event.target.value });
  }

  handleProductImage = event => {
    this.setState({ productImage: event.target.value });
  }

  handleDepartmentName = event => {
    this.setState({ departmentName: event.target.value });
  }

  handleRowID = event => {
    this.setState({ rowID: event.target.value });
  }

  handleColumnID = event => {
    this.setState({ columnID: event.target.value });
  }

  handleShelfID = event => {
    this.setState({ shelfID: event.target.value });
  }

  handlePrice = event => {
    this.setState({ price: event.target.value });
  }

  handleSalePrice = event => {
    this.setState({ salePrice: event.target.value });
  }

  handleProductQuantity = event => {
    this.setState({ productQuantity: event.target.value });
  }

  handleSaleStatus = event => {
    this.setState({ onSale: event.target.value });
  }

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

  handleProductUpdateGrab = event => {
    event.preventDefault();
    API.getByName("products", this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ productUpdates: res.data.products, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleStockLevelGrab = event => {
    event.preventDefault();
    API.getByName("products", this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ stockLevels: res.data.products, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleProductIDGrab = event => {
    event.preventDefault();
    API.getByName("products", this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ productID: res.data.products, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleDeleteProduct = event => {
    event.preventDefault();
    if(this.state.confirm === "yes") {
      API.delete("products", this.state.productID[0].item_id)
        .then(res => {
          console.log({ results: res.data });
          //console.log(this.state.productID.products[0].product_name + " has been deleted from the database.");
        })
        .catch(err => this.setState({ error: err.message }));
    } else {
      console.log("Mission aborted");
      //console.log("Mission aborted. " + this.state.productID.products[0].product_name + " is still in the database.");
    }
  };

  handleCreateProduct = event => {
    event.preventDefault();
    let onSale;
    let promise = new Promise((resolve, reject) => {
      if(this.state.onSale === "yes") {
        this.setState({ onSale: "1" });
        onSale = "1";
      } else {
        this.setState({ onSale: "0"});
        onSale = "0";
      }
      console.log(this.state.onSale);
      resolve(true);
    })
    .then(
      API.create("products", {"product_name": this.state.productName, "product_type": this.state.productType, "product_image": this.state.productImage, "department_name": this.state.departmentName, "row_id": this.state.rowID, "column_id": this.state.columnID, "shelf_id": this.state.shelfID, "price": this.state.price, "sale_price": this.state.salePrice, "stock_quantity": this.state.productQuantity, "on_sale": onSale, "clicks_without_sale": 0})
        .then(res => {
          console.log({ results: res.data });
          console.log(this.state.onSale);
        })
        .catch(err => this.setState({ error: err.message })));
  };

  handleUpdateProduct = event => {
    event.preventDefault();
    let onSale;
    let promise = new Promise((resolve, reject) => {
      if(this.state.onSale === "yes") {
        this.setState({ onSale: "1" });
        onSale = "1";
      } else {
        this.setState({ onSale: "0"});
        onSale = "0";
      }
      console.log(this.state.onSale);
      resolve(true);
    })
    .then(
      API.update("products", this.state.productUpdates[0].item_id, {"product_name": this.state.productName, "product_type": this.state.productType, "product_image": this.state.productImage, "department_name": this.state.departmentName, "row_id": this.state.rowID, "column_id": this.state.columnID, "shelf_id": this.state.shelfID, "price": this.state.price, "sale_price": this.state.salePrice, "stock_quantity": this.state.productQuantity, "on_sale": onSale, "clicks_without_sale": 0})
        .then(res => {
          console.log({ results: res.data });
        })
        .catch(err => this.setState({ error: err.message })));
  };

  handleAddedStock = event => {
    event.preventDefault();
    let stockQuantity = parseInt(this.state.stockLevels[0].stock_quantity);
    let stockChange = parseInt(this.state.stockChangeAmount);
    let newStockValue = stockQuantity + stockChange;
    API.update("products", this.state.stockLevels[0].item_id, {"stock_quantity": newStockValue})
      .then(res => {
        console.log({ results: res.data });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleRemovedStock = event => {
    event.preventDefault();
    let stockQuantity = parseInt(this.state.stockLevels[0].stock_quantity);
    let stockChange = parseInt(this.state.stockChangeAmount);
    let newStockValue = stockQuantity - stockChange;
    API.update("products", this.state.stockLevels[0].item_id, {"stock_quantity": newStockValue})
      .then(res => {
        console.log({ results: res.data });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    console.log(this.state)
    return (
    <div>
      <Hero backgroundImage="http://www.bostonscientific.com/en-US/executive-perspective/quick-study/_jcr_content/maincontent-par/image_0.img.ExectivePerspective_InventMgmt_01_1880x800-desktop.jpg">
        <h1>Manage Your Stock</h1>
        <h2>Update the information about what you have in store</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <br/>
            <h1>Received a new order?</h1>
            <h1>Sold out of a product?</h1>
            <h1>Reorganizing your store layout?</h1>
            <br/>
            <h3>Add to stock numbers, remove products from your website, move items to a new location. All the tools you need are right here!</h3>
            <br/>
            <hr/>
            <br/>
          </Col>
        </Row>
        <Row>
          <Col size="md-5">
            <Title>Add New Product</Title>
              <CreateProduct
                handleProductName={this.handleProductName}
                handleProductType={this.handleProductType}
                handleProductImage={this.handleProductImage}
                handleDepartmentName={this.handleDepartmentName}
                handleRowID={this.handleRowID}
                handleColumnID={this.handleColumnID}
                handleShelfID={this.handleShelfID}
                handlePrice={this.handlePrice}
                handleSalePrice={this.handleSalePrice}
                handleProductQuantity={this.handleProductQuantity}
                handleSaleStatus={this.handleSaleStatus}
                handleCreateProduct={this.handleCreateProduct}
              />
              <SearchResults results={this.state.results} />
          </Col>
          <Col size="md-2"></Col>
          <Col size="md-5">
            <Title>Delete Product</Title>
              <DeleteProduct
                handleProductIDGrab={this.handleProductIDGrab}
                handleDeleteProduct={this.handleDeleteProduct}
                handleInputChange={this.handleInputChange}
                handleConfirm={this.handleConfirm}
                products={this.state.products}
                confirm={this.state.confirm}
              />
              <Wrapper>
                {this.state.productID.map(product => (
                  <InventoryCard
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
        <Row>
          <Col size="md-5">
            <Title>Add Stock</Title>
              <AddStock
                handleStockLevelGrab={this.handleStockLevelGrab}
                handleAddedStock={this.handleAddedStock}
                handleInputChange={this.handleInputChange}
                handleStockChange={this.handleStockChange}
                products={this.state.products}
                stockChangeAmount={this.state.stockChangeAmount}
              />
              <Wrapper>
                {this.state.stockLevels.map(product => (
                  <InventoryCard
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
          <Col size="md-2"></Col>
          <Col size="md-5">
            <Title>Remove Stock</Title>
              <RemoveStock
                handleStockLevelGrab={this.handleStockLevelGrab}
                handleRemovedStock={this.handleRemovedStock}
                handleInputChange={this.handleInputChange}
                handleStockChange={this.handleStockChange}
                products={this.state.products}
                stockChangeAmount={this.state.stockChangeAmount}
              />
              <Wrapper>
                {this.state.stockLevels.map(product => (
                  <InventoryCard
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
        <Row>
          <Col size="md-5">
            <Title>Update Product Information</Title>
              <UpdateProduct
                handleProductUpdateGrab={this.handleProductUpdateGrab}
                handleInputChange={this.handleInputChange}
                handleProductName={this.handleProductName}
                handleProductType={this.handleProductType}
                handleProductImage={this.handleProductImage}
                handleDepartmentName={this.handleDepartmentName}
                handleRowID={this.handleRowID}
                handleColumnID={this.handleColumnID}
                handleShelfID={this.handleShelfID}
                handlePrice={this.handlePrice}
                handleSalePrice={this.handleSalePrice}
                handleProductQuantity={this.handleProductQuantity}
                handleSaleStatus={this.handleSaleStatus}
                handleUpdateProduct={this.handleUpdateProduct}
              />
              <Wrapper>
                {this.state.productUpdates.map(product => (
                  <InventoryCard
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
          <Col size="md-2"></Col>
          <Col size="md-5">
          </Col>
        </Row>
      </Container>
    </div>
  );
  }
}

export default StockManagement;