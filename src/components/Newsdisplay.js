import React, { Component } from "react";
import Newsitems from "./Newsitems";
import "./Newsdisplay.css";
import PropTypes from "prop-types";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";
export default class Newsdisplay extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apikey: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `NewsFunki - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    console.log(url);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(50);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };
  //   handleNextClick = async () => {
  //     this.setState({
  //       page: this.state.page + 1,
  //     });
  //     this.updateNews();
  //   };
  //   handlePrevClick = async () => {
  //     this.setState({
  //       page: this.state.page - 1,
  //     });
  //     this.updateNews();
  //   };

  render() {
    return (
      <div>
        <h1 className="text-primary text-center" style={{ paddingTop: "90px" }}>
          NewsFunki- {this.capitalizeFirstLetter(this.props.category)}
        </h1>
        {this.state.loading && <Loader />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loader />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((e) => {
                return (
                  <div className="col-md-3" key={e.url}>
                    <Newsitems
                      itemTitle={e.title ? e.title : ""}
                      itemDesc={e.description ? e.description : ""}
                      itemImage={
                        e.urlToImage
                          ? e.urlToImage
                          : "https://via.placeholder.com/286x160.png?text=no%20image"
                      }
                      newsUrl={e.url}
                      publish={e.publishedAt}
                      author={e.author}
                      source={e.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between btns">
            <button
              type="button"
              disabled={this.state.page - 1 < 1}
              className="btn btn-primary prev"
              onClick={this.handlePrevClick}
            >
              {" "}
              &larr; Previous
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              className="btn btn-primary next"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div> */}
      </div>
    );
  }
}
