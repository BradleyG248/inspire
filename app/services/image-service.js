import store from "../store.js"

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  constructor() {

  }
  getImg() {
    imgApi.get("")
      .then(res => {
        store.commit("img", res.data.url)
      })
      .catch(error => {
        console.error(error)
      })
  }
}

const imageService = new ImageService();
export default imageService;
