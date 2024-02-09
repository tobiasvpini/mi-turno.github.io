import axios from "axios";
import config from "../config/config";

const instance = axios.create({
  baseURL: config.baseUrl,
  timeout: config.timeout,
});

// TOKEN INTERCEPTOR

instance.interceptors.request.use(
  function (config) {

    config.headers = {
      'Content-Type': 'application/json',
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
