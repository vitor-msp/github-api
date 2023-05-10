import { UserError } from "../../errors/UserError";
import { IUser, UserProps } from "./IUser";

export class User implements IUser {
  readonly id: number;
  readonly login: string;
  readonly url: string;
  readonly avatarUrl: string;

  constructor(userProps: UserProps) {
    this.validateId(userProps);
    this.validateLogin(userProps);
    this.validateUrl(userProps);
    this.validateAvatarUrl(userProps);
    this.id = userProps.id;
    this.login = userProps.login.trim();
    this.url = userProps.url.trim();
    this.avatarUrl = userProps.avatarUrl.trim();
  }

  private validateId(userProps: UserProps): void {
    const inputIsNotEmpty = !!userProps.id ?? false;
    if (!inputIsNotEmpty) throw new UserError(`id is blank`);
    if (isNaN(userProps.id)) throw new UserError(`id not is a number`);
  }

  private validateLogin(userProps: UserProps): void {
    const inputIsNotEmpty = userProps.login ? !!userProps.login.trim() : false;
    if (!inputIsNotEmpty) throw new UserError(`login is blank`);
  }

  private validateUrl(userProps: UserProps): void {
    const inputIsNotEmpty = !!userProps.url ?? false;
    if (!inputIsNotEmpty) throw new UserError(`url is blank`);
    try {
      new URL(userProps.url);
    } catch (error) {
      throw new UserError(`url is not valid`);
    }
  }

  private validateAvatarUrl(userProps: UserProps): void {
    const inputIsNotEmpty = !!userProps.avatarUrl ?? false;
    if (!inputIsNotEmpty) throw new UserError(`avatarUrl is blank`);
    try {
      new URL(userProps.url);
    } catch (error) {
      throw new UserError(`avatarUrl is not valid`);
    }
  }
}
