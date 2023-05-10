export type RepositoryProps = {
  readonly id: number;
  readonly name: string;
  readonly url: string;
};

export interface IRepository {
  readonly id: number;
  readonly name: string;
  readonly url: string;
}
