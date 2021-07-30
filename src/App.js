import "./App.css";
import "modern-normalize/modern-normalize.css";
import "react-toastify/dist/ReactToastify.css";
import imagesApi from "./components/services/image-api";
import { ToastContainer } from "react-toastify";
import { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn";
import MyLoader from "./components/Loader";

class App extends Component {
  state = {
    query: "",
    img: [],
    currentPage: 1,
    isLoading: false,
  };
  componentDidUpdate(prevProps, PrevState) {
    const { query } = this.state;
    if (PrevState.query !== query) {
      this.handleQuery();
    }
  }

  handleQuery = () => {
    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(this.state.query, this.state.currentPage)
      .then((image) =>
        this.setState((prevState) => ({
          img: [...prevState.img].concat(image.hits),
          currentPage: prevState.currentPage + 1,
        }))
      )
      .finally(this.setState({ isLoading: false }));
  };

  handleFormSubmit = (query) => {
    this.setState({ query });
  };
  onClickLoadMoreBtn = () => {
    this.handleQuery();
  };

  render() {
    console.log(this.state.isLoading);
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.img} />
        <LoadMoreBtn onClick={this.onClickLoadMoreBtn} />
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default App;
