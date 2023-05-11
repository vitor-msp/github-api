import { User } from "../entities/User";

export interface IApiService {
  getUsers(): Promise<User[]>;
}
