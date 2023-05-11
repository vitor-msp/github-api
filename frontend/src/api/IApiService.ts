import { User } from "../entities/User";
import { UserDetails } from "../entities/UserDetails";

export type GetUsersResponse = {
  lastPage: string;
  nextPage: string;
  users: User[];
};

export type GetUserDetailsResponse = {
  user: UserDetails;
};

export interface IApiService {
  getUsers(url?: string): Promise<GetUsersResponse | null>;
  getUserDetails(username: string): Promise<UserDetails | null>;
}
