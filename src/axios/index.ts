import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

const axiosConfig: AxiosRequestConfig = {
	baseURL: "https://restcountries.com/v2",
	timeout: 5000,
	headers: { "Content-type": "application/json" },
};

const axiosInstance: AxiosInstance = axios.create(axiosConfig);

export default axiosInstance;
