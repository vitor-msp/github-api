import { RepositoryError } from "../../errors/RepositoryError";
import { IRepository, RepositoryProps } from "./IRepository";

export class Repository implements IRepository {
  readonly id: number;
  readonly name: string;
  readonly url: string;

  constructor(repositoryProps: RepositoryProps) {
    this.id = this.validateId(repositoryProps);
    this.name = this.validateName(repositoryProps);
    this.url = this.validateUrl(repositoryProps);
  }

  private validateId(repositoryProps: RepositoryProps): number {
    const inputIsValid = repositoryProps.id
      ? !!repositoryProps.id.toString().trim()
      : false;
    if (!inputIsValid) throw new RepositoryError(`id is blank`);
    if (isNaN(repositoryProps.id))
      throw new RepositoryError(`id not is a number`);
    return repositoryProps.id;
  }

  private validateName(repositoryProps: RepositoryProps): string {
    const inputIsValid = repositoryProps.name
      ? !!repositoryProps.name.toString().trim()
      : false;
    if (!inputIsValid) throw new RepositoryError(`name is blank`);
    return repositoryProps.name;
  }

  private validateUrl(repositoryProps: RepositoryProps): string {
    const inputIsValid = repositoryProps.url
      ? !!repositoryProps.url.toString().trim()
      : false;
    if (!inputIsValid) throw new RepositoryError(`url is blank`);
    try {
      new URL(repositoryProps.url);
      return repositoryProps.url;
    } catch (error) {
      throw new RepositoryError(`url is not valid`);
    }
  }
}
