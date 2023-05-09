import { UserError } from "../../errors/UserError";
import { IUser, UserProps } from "./IUser";

export class User implements IUser {
  readonly id: number;
  readonly login: string;
  readonly url: string;
  readonly avatarUrl: string;
  private readonly urlRegexPattern =
    "/^https?://(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/";

  constructor(userProps: UserProps) {
    this.validateId(userProps);
    this.validateLogin(userProps);
    this.validateUrl(userProps);
    this.validateAvatarUrl(userProps);
    this.id = userProps.id;
    this.login = userProps.login;
    this.url = userProps.url;
    this.avatarUrl = userProps.avatarUrl;
  }

  private validateId(userProps: UserProps): void {
    const inputIsNotEmpty = !!userProps.id ?? false;
    if (!inputIsNotEmpty) throw new UserError(`id is blank`);
    if (isNaN(userProps.id)) throw new UserError(`id not is a number`);
  }

  private validateLogin(userProps: UserProps): void {
    const inputIsNotEmpty = !!userProps.login ?? false;
    if (!inputIsNotEmpty) throw new UserError(`login is blank`);
  }

  private validateUrl(userProps: UserProps): void {
    const inputIsNotEmpty = !!userProps.url ?? false;
    if (!inputIsNotEmpty) throw new UserError(`url is blank`);
    const urlIsValid = new RegExp(this.urlRegexPattern).test(userProps.url);
    if (!urlIsValid) throw new UserError(`url is not valid`);
  }

  private validateAvatarUrl(userProps: UserProps): void {
    const inputIsNotEmpty = !!userProps.avatarUrl ?? false;
    if (!inputIsNotEmpty) throw new UserError(`avatarUrl is blank`);
    const urlIsValid = new RegExp(this.urlRegexPattern).test(
      userProps.avatarUrl
    );
    if (!urlIsValid) throw new UserError(`avatarUrl is not valid`);
  }
}
