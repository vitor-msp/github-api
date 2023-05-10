import { UserError } from "../../errors/UserError";
import { IUser, UserProps } from "./IUser";

export class User implements IUser {
  readonly id: number;
  readonly login: string;
  readonly url?: string;
  readonly avatarUrl?: string;
  readonly createdAt?: string;

  constructor(userProps: UserProps) {
    this.validateId(userProps);
    this.validateLogin(userProps);
    this.validateUrl(userProps);
    this.validateAvatarUrl(userProps);
    this.validateCreatedAt(userProps);
    this.id = userProps.id;
    this.login = userProps.login.trim();
    this.url = userProps.url!.trim();
    this.avatarUrl = userProps.avatarUrl!.trim();
    this.createdAt = userProps.createdAt;
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
    const inputIsNotEmpty = userProps.url ? !!userProps.url.trim() : false;
    if (!inputIsNotEmpty) throw new UserError(`url is blank`);
    try {
      new URL(userProps.url!);
    } catch (error) {
      throw new UserError(`url is not valid`);
    }
  }

  private validateAvatarUrl(userProps: UserProps): void {
    const inputIsNotEmpty = userProps.avatarUrl
      ? !!userProps.avatarUrl.trim()
      : false;
    if (!inputIsNotEmpty) throw new UserError(`avatarUrl is blank`);
    try {
      new URL(userProps.avatarUrl!);
    } catch (error) {
      throw new UserError(`avatarUrl is not valid`);
    }
  }

  private validateCreatedAt(userProps: UserProps): void {
    const inputIsNotEmpty = !!userProps.createdAt ?? false;
    if (!inputIsNotEmpty) throw new UserError(`createdAt is blank`);
    const timeInMiliSeconds = new Date(userProps.createdAt!).getTime();
    if (isNaN(timeInMiliSeconds)) throw new UserError(`createdAt is not valid`);
  }
}
