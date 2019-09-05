// import { facts } from "./../data/AnimalFacts";
// We are planning to use axios api now. We gonna host our jsonlist on myjson.com

import axios from "axios";

class HttpService {
  get(url) {
    return axios.get(url).then(response => {
      return response.data;
    });
  }
}

const instance = new HttpService();
export default instance;
