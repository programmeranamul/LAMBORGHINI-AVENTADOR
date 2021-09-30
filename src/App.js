import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/commonComponent/BactToTop/BackToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import NewsPage from './pages/NewsPage/NewsPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/products" >
            <ProductPage />
          </Route>
          <Route path="/news" >
            <NewsPage />
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
