import { Repository } from "../../src/domain/repositories/Repository";
import { RepositoryError } from "../../src/errors/RepositoryError";

describe("Repository Tests", () => {
  it("should create repository", () => {
    const repository = new Repository({
      id: 1,
      name: "name",
      url: "https://www.github.com",
    });
    expect(repository.id).toBe(1);
    expect(repository.name).toBe("name");
    expect(repository.url).toBe("https://www.github.com");
  });

  it("should not create repository without id or with invalid id", () => {
    expect(() => {
      //@ts-ignore
      new Repository({
        name: "name",
        url: "https://www.github.com",
      });
    }).toThrow(RepositoryError);
    expect(() => {
      new Repository({
        //@ts-ignore
        id: "",
        name: "name",
        url: "https://www.github.com",
      });
    }).toThrowError(RepositoryError);
    expect(() => {
      new Repository({
        //@ts-ignore
        id: "     ",
        name: "name",
        url: "https://www.github.com",
      });
    }).toThrowError(RepositoryError);
    expect(() => {
      new Repository({
        //@ts-ignore
        id: "invalid",
        name: "name",
        url: "https://www.github.com",
      });
    }).toThrowError(RepositoryError);
  });

  it("should not create repository without name or with invalid name", () => {
    expect(() => {
      //@ts-ignore
      new Repository({
        id: 1,
        url: "https://www.github.com",
      });
    }).toThrow(RepositoryError);
    expect(() => {
      new Repository({
        id: 1,
        name: "",
        url: "https://www.github.com",
      });
    }).toThrowError(RepositoryError);
    expect(() => {
      new Repository({
        id: 1,
        name: "    ",
        url: "https://www.github.com",
      });
    }).toThrowError(RepositoryError);
  });

  it("should not create repository without url or with invalid url", () => {
    expect(() => {
      //@ts-ignore
      new Repository({
        id: 1,
        name: "name",
      });
    }).toThrow(RepositoryError);
    expect(() => {
      new Repository({
        id: 1,
        name: "name",
        url: "",
      });
    }).toThrowError(RepositoryError);
    expect(() => {
      new Repository({
        id: 1,
        name: "name",
        url: "    ",
      });
    }).toThrowError(RepositoryError);
    expect(() => {
      new Repository({
        id: 1,
        name: "name",
        url: "www.github.com",
      });
    }).toThrowError(RepositoryError);
  });
});
