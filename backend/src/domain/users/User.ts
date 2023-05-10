import { UserError } from "../../errors/UserError";
import { IUser, UserProps } from "./IUser";

export class User implements IUser {
  readonly id: number;
  readonly login: string;
  readonly url?: string;
  readonly avatarUrl?: string;
  readonly createdAt?: string;

  constructor(userProps: UserProps) {
    this.id = this.validateId(userProps);
    this.login = this.validateLogin(userProps);
    this.login = userProps.login.trim();
    const url = this.validateUrl(userProps);
    if (url != null) this.url = url;
    const avatarUrl = this.validateAvatarUrl(userProps);
    if (avatarUrl != null) this.avatarUrl = avatarUrl;
    const createdAt = this.validateCreatedAt(userProps);
    if (createdAt != null) this.createdAt = createdAt;
  }

  private validateId(userProps: UserProps): number {
    const inputIsNotEmpty = !!userProps.id ?? false;
    if (!inputIsNotEmpty) throw new UserError(`id is blank`);
    if (isNaN(userProps.id)) throw new UserError(`id not is a number`);
    return userProps.id;
  }

  private validateLogin(userProps: UserProps): string {
    const inputIsNotEmpty = userProps.login ? !!userProps.login.trim() : false;
    if (!inputIsNotEmpty) throw new UserError(`login is blank`);
    return userProps.login;
  }

  private validateUrl(userProps: UserProps): null | string {
    if (!userProps.url) return null;
    const url = userProps.url.toString().trim();
    if (!url) return null;
    try {
      new URL(userProps.url);
      return url;
    } catch (error) {
      throw new UserError(`url is not valid`);
    }
  }

  private validateAvatarUrl(userProps: UserProps): null | string {
    if (!userProps.avatarUrl) return null;
    const url = userProps.avatarUrl.toString().trim();
    if (!url) return null;
    try {
      new URL(userProps.avatarUrl);
      return url;
    } catch (error) {
      throw new UserError(`avatarUrl is not valid`);
    }
  }

  private validateCreatedAt(userProps: UserProps): null | string {
    if (!userProps.createdAt) return null;
    const createdAt = userProps.createdAt.toString().trim();
    if (!createdAt) return null;
    const timeInMiliSeconds = new Date(createdAt).getTime();
    if (isNaN(timeInMiliSeconds)) throw new UserError(`createdAt is not valid`);
    return createdAt;
  }
}
