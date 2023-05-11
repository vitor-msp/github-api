import axios, { AxiosInstance } from "axios";
import {
  GetUserDetailsResponse,
  GetUserResposResponse,
  GetUsersResponse,
  IApiService,
} from "./IApiService";
import { UserDetails } from "../entities/UserDetails";
import { Repository } from "../entities/Repository";
import { SinceFromUrl } from "../utils/SinceFromUrl";

class ApiService implements IApiService {
  private readonly api: AxiosInstance;

  constructor() {
    const baseURL = process.env.REACT_APP_BACKEND_URL;
    if (!baseURL) throw new Error(`missing backend url`);
    this.api = axios.create({
      baseURL,
    });
  }

  async getUsers(url?: string): Promise<GetUsersResponse | null> {
    const since = SinceFromUrl.extract(url);
    let error = true;
    const res: GetUsersResponse = await this.api
      .get(`/users?since=${since}`)
      .then((res) => {
        error = false;
        return res.data;
      })
      .catch((error) => error.response?.data ?? error.message);
    if (error) return null;
    return res;
  }

  async getUserDetails(username: string): Promise<UserDetails | null> {
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

  async getUserRepos(username: string): Promise<Repository[] | null> {
    let error = true;
    const res: GetUserResposResponse = await this.api
      .get(`/users/${username}/repos`)
      .then((res) => {
        error = false;
        return res.data;
      })
      .catch((error) => error.response?.data ?? error.message);
    if (error) return null;
    return res.repos;
  }
}

export const apiService = new ApiService();
