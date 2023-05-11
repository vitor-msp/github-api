import axios, { AxiosInstance } from "axios";
import { GetUsersResponse, IApiService } from "./IApiService";

class ApiService implements IApiService {
  private readonly api: AxiosInstance;

  constructor() {
    const baseURL = process.env.REACT_APP_BACKEND_URL;
    console.log(baseURL);
    if (!baseURL) throw new Error(`missing backend url`);
    this.api = axios.create({
      baseURL,
    });
  }

  async getUsers(): Promise<GetUsersResponse | null> {
    let error = true;
    const res: GetUsersResponse = await this.api
      .get("/users")
      .then((res) => {
        error = false;
        return res.data;
      })
      .catch((error) => error.response?.data ?? error.message);
    if (error) return null;
    return res;
  }
}

export const apiService = new ApiService();
