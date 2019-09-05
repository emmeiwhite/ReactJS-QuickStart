import { facts } from "./../data/AnimalFacts";

class HttpService {
  get(url) {
    const promiseAction = resolve => {
      setTimeout(() => {
        resolve(facts); // Promise is resolved! after 2s of delay
      }, 2000);
    };
    return new Promise(promiseAction);
  }
}

const instance = new HttpService();
export default instance;
