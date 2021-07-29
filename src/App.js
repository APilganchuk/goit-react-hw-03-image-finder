import "./App.css";
import "modern-normalize/modern-normalize.css";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Component } from "react";
import Searchbar from "./components/Searchbar";

class App extends Component {
  state = { query: "" };
  handleFormSubmit = (query) => {
    this.setState({ query });
  };
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default App;
