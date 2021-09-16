import React, { useEffect, useState } from "react";
import Newsitems from "./Newsitems";
import "./Newsdisplay.css";
import PropTypes from "prop-types";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";
const Newsdisplay = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    console.log(url);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `NewsFunki - ${capitalizeFirstLetter(props.category)}`;
    updateNews();
    //eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div>
      <h1 className="text-primary text-center" style={{ paddingTop: "90px" }}>
        NewsFunki- {capitalizeFirstLetter(props.category)}
      </h1>
      {loading && <Loader />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loader />}
      >
        <div className="container">
          <div className="row">
            {articles.map((e) => {
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
    </div>
  );
};
Newsdisplay.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
Newsdisplay.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apikey: PropTypes.string,
};
export default Newsdisplay;
