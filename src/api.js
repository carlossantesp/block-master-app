import { API_KEY, MOVIE_URL, VERSION } from "./constants.js";

class API {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
  }

  baseAPI = `${MOVIE_URL}/${VERSION}/`;

  get discoverMovie() {
    return `${this.baseAPI}discover/movie?api_key=${this.API_KEY}`;
  }
  get trendingWeek() {
    return `${this.baseAPI}trending/all/week?api_key=${this.API_KEY}`;
  }
  async moviePage(page = 1) {
    const response = await fetch(`${this.discoverMovie}&page=${page}`);
    const data = await response.json();
    return data;
  }
  async movieDetails(id) {
    const response = await fetch(
      `${this.baseAPI}movie/${id}?api_key=${this.API_KEY}`
    );
    const data = await response.json();
    return data;
  }
  async trendingMovie() {
    const response = await fetch(`${this.trendingWeek}&page=1`);
    const data = await response.json();
    return data;
  }
}

export default new API(API_KEY);
