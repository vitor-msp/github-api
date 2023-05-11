import axios, { AxiosInstance } from "axios";
import {
  GetUserDetailsResponse,
  GetUsersResponse,
  IApiService,
} from "./IApiService";
import { UserDetails } from "../entities/UserDetails";

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

  async getUsers(url?: string): Promise<GetUsersResponse | null> {
    if (!url) url = "/users";
    let error = true;
    const res: GetUsersResponse = await this.api
      .get(url)
      .then((res) => {
        error = false;
        return res.data;
      })
      .catch((error) => error.response?.data ?? error.message);
    if (error) return null;
    return res;
  }

  async getUserDetails(
    username: string
  ): Promise<UserDetails | null> {
    let error = true;
    const res: GetUserDetailsResponse = await this.api
      .get(`/users/${username}/details`)
      .then((res) => {
        error = false;
        return res.data;
      })
      .catch((error) => error.response?.data ?? error.message);
    if (error) return null;
    return res.user;
  }
}

export const apiService = new ApiService();
