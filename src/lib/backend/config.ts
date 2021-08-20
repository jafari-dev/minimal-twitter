import Axios, { AxiosRequestConfig } from "axios";

const configuration: AxiosRequestConfig = {
    baseURL: "http://localhost:4000",
    headers: { "Content-Type": "application/json" }
} 

const axiosInstance = Axios.create(configuration);

export default axiosInstance;
