import axios from "axios";

const instance = axios.create({
    baseURL: 'https://5f1d003539d95a0016953aaa.mockapi.io',
    "Content-Type": "application/json"
  });

  export default instance; 