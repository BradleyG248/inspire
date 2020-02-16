import store from "../store.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  constructor() {

  }
  getQuote() {
    _quoteApi.get("")
      .then(res => {
        console.log(res)
        let quote = { quote: res.data.quote.body, author: res.data.quote.author };
        store.commit("quote", quote)
      })
  }
}

const quoteService = new QuoteService();
export default quoteService;
