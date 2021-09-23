import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MenuBar from "./components/MenuBar/MenuBar";
import Welcome from "./components/second-section/Welcome";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Slider />
      <MenuBar />
      <Welcome />
    </div>
  );
}

export default App;
