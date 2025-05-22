import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/db/",
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getAll() {
    const res = await axiosInstance.get<T[]>(this.endpoint);
    return res.data;
  }
}

export default ApiClient;
