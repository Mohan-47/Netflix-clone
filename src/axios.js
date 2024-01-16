import axios from "axios";

//url to make requests to tmdb
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// instance.get('/foo-bar');
// https://api.themoviedb.org/3/foo-bar

export default instance;
