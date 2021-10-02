import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/commonComponent/BactToTop/BackToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import NewsPage from './pages/NewsPage/NewsPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import ProductDetailsPage from "./pages/ProductDetails/ProductDetailsPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/products" exact>
            <ProductPage />
          </Route>
          <Route path="/products/:id" >
            <ProductDetailsPage />
          </Route>
          <Route path="/news" >
            <NewsPage />
          </Route>
          <Route path="/check-out" >
            <CheckoutPage/>
          </Route>
          <Footer />
        </Switch>
        <BackToTop />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
