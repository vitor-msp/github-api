import { User } from "../entities/User";

export type GetUsersResponse = {
  lastPage: string;
  nextPage: string;
  users: User[];
};

export interface IApiService {
  getUsers(): Promise<GetUsersResponse | null>;
}
