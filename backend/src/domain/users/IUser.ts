export type UserProps = {
  readonly id: number;
  readonly login: string;
  readonly avatarUrl?: string;
  readonly url?: string;
  readonly createdAt?: string;
};

export interface IUser {
  readonly id: number;
  readonly login: string;
  readonly avatarUrl?: string;
  readonly url?: string;
  readonly createdAt?: string;
}
