import axios from "axios";

class ApiHandler {
  constructor() {
    this.service = axios.create({
      baseURL: "https://api.punkapi.com/v2/",
      timeout: 5000,
    });
    this.per_page = 20;
  }

  getPerPage(){
    return this.per_page;
  }

  setPerPage(perPage){
    this.per_page = perPage;
  }

  getBeers(page = 1, strQuery = "") {
    let url = `beers?page=${page}&per_page=${this.per_page}`;

    if (strQuery) {
      url += `&${strQuery}`;
    }

    return this.service
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(`Error while fetching beers! status: ${error}`);
      });
  }

  getBeerById(id) {
    return this.service
      .get(`beers/${id}`)
      .then((response) => response.data[0])
      .catch((error) => {
        throw new Error(`Error while fetching beer! status: ${error}`);
      });
  }

  getRandomBeer() {
    return this.service
      .get("beers/random")
      .then((response) => response.data[0])
      .catch((error) => {
        throw new Error(`Error while fetching random beer! status: ${error}`);
      });
  }

  saveBeer(id, name) {
    // Attempt to POST data to a non-existent endpoint
    return this.service
      .post("save_beer", { id, name })
      .then((response) => response.data)
      .catch((error) => {
        console.error(
          `Attempted to save beer ${id}, ${name} but the API endpoint does not exist.`
        );
        throw new Error(`API not found: ${error}`);
      });
  }
}

export default ApiHandler;