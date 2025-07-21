import axios from "axios";


const instance = axios.create({
  baseURL: 'http://localhost:3020', // Adjust the base URL as needed
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default instance;