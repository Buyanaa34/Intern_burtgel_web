import axios from "axios";
const burtgel_axios = axios.create({
  baseURL: "https://intern-burtgel-default-rtdb.firebaseio.com/",
});

export default burtgel_axios;
