import ImageService from "../services/image-service.js";
import store from "../store.js"

function _drawBack() {
  document.getElementById("bg-image").style.backgroundImage = `url(${store.State.img})`
}
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    ImageService.getImg();
    store.subscribe("img", _drawBack);
  }

}
