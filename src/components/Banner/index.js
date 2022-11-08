import axios from "../axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../Request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "contain",
        backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner_tittle">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(movie.overview, 150)}</h1>
      </div>
      <div className="banner--efBottom" />
    </header>
  );
}

export default Banner;
