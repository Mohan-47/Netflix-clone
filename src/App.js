import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Foot";

function App() {
  return (
    <div className="app">
      {/* <h1>Let's build !! Netflix Clone</h1> */}
      {/* Navbar */}
      {/* Banner */}
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        islargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchTopActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchTopComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchTopHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchTopRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchTopDocumentaries} />
      {/* <Row title="Trending Now"/> */}
      <Footer />
    </div>
  );
}

export default App;
