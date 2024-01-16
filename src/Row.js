import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, islargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
  // Runs based on specific condition/variable
  useEffect(() => {
    //if [] blank , run once when the row loads and don't run it again
    // otherwise var , run once when row loads and runs every single time movies changes
    async function fetchData() {
      const request = await axios.get(fetchURL);
      // console.log(request.data.results);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  //   console.table(movies);
  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {/* containers -> posters */}

        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            className={`row_poster ${islargeRow && "row_posterLarge"}`}
            src={`${baseURL}${
              islargeRow ? movie.poster_path : movie.poster_path
            }`}
            alt={movie.name}
            // title={movie.title || movie.name || movie.original_name}
          />
          // <p>{movie.title || movie.name || movie.original_name}</p>
        ))}
      </div>
      {trailerURL && <Youtube videoId={trailerURL} opts={opts} />}
    </div>
  );
}

export default Row;
