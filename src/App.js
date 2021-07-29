import "./App.css";
import "modern-normalize/modern-normalize.css";
import { Component } from "react";
import Searchbar from "./components/Searchbar/SearchBar";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Searchbar />
      </div>
    );
  }
}

export default App;
