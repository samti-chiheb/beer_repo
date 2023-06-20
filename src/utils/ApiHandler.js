import axios from "axios";

class ApiHandler {
  // initi API request
  constructor() {
    this.service = axios.create({
      baseURL: "https://api.punkapi.com/v2/",
    });
    this.items_per_page = 20;
  }

  // return nombre of responses per page
  getItemsPerPage() {
    return this.items_per_page;
  }

  // set nombre of responses per page
  setItemsPerPage(perPage) {
    this.items_per_page = perPage;
  }

  //get reponses foreach page and each query
  getBeers(page = 1, strQuery = "") {
    let url = `beers?page=${page}&per_page=${this.items_per_page}`;

    //add query string to url
    if (strQuery) {
      url += strQuery;
    }

    // execute API call
    return this.service
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(`Error while fetching beers! status: ${error}`);
      });
  }

  // get one response by id
  getBeerById(id) {
    return this.service
      .get(`beers/${id}`)
      .then((response) => response.data[0])
      .catch((error) => {
        throw new Error(`Error while fetching beer! status: ${error}`);
      });
  }

  // get one random response
  getRandomBeer() {
    return this.service
      .get("beers/random")
      .then((response) => response.data[0])
      .catch((error) => {
        throw new Error(`Error while fetching random beer! status: ${error}`);
      });
  }

  // save response do database endpoint using POST method
  saveBeer(id, name) {
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