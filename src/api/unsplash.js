import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID tAqabDE_Q6g1pTJHLq_GGOZNsg13sYhP5huYo71bqTo",
  },
});
