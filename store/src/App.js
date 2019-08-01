import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Storefront from "./pages/Storefront";
import About from "./pages/About";
import Search from "./pages/Search";
import ShoppingList from "./pages/Shopping-List";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import StoreManager from "./pages/Store-Manager";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/storefront" component={Storefront} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/shopping-list" component={ShoppingList} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/store-manager" component={StoreManager} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
