import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://losvareladb.pythonanywhere.com/api/",
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

  async getOne(id: number) {
    const res = await axiosInstance.get<T>(`${this.endpoint}/${id}`);
    return res.data;
  }
}

export default ApiClient;
