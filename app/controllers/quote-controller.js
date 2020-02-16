import QuoteService from "../services/quote-service.js";
import store from "../store.js";


function _drawQuote() {
  document.getElementById("quote").innerHTML = `<h5>${store.State.quote.quote}</h5><p>${store.State.quote.author}</p>`
}

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
  constructor() {
    store.subscribe("quote", _drawQuote)
    QuoteService.getQuote();
  }

}
