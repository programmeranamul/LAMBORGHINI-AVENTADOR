import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import BackToTop from './components/commonComponent/BactToTop/BackToTop';

function App() {
  return (
    <div className="app">
      <HomePage />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
