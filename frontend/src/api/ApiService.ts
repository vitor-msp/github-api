import axios, { AxiosInstance } from "axios";
import { GET_USERS_OUTPUT_MOCK } from "./mock";
import { IApiService } from "./IApiService";

class ApiService implements IApiService {
  private readonly api: AxiosInstance;

  constructor() {
    const baseURL = process.env.REACT_APP_BACKEND_URL;
    if (!baseURL) throw new Error(`missing backend url`);
    this.api = axios.create({
      baseURL,
    });
  }

  async getUsers(): Promise<any[]> {
    return GET_USERS_OUTPUT_MOCK;
  }
}

export const apiService = new ApiService();
