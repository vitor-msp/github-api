import { User } from "../../src/domain/users/User";
import { UserError } from "../../src/errors/UserError";

describe("User Tests", () => {
  it("should create user", () => {
    const date = new Date().toISOString();
    const user = new User({
      id: 1,
      login: "login",
      url: "https://www.github.com",
      avatarUrl: "https://www.github.com",
      createdAt: date,
    });
    expect(user.id).toBe(1);
    expect(user.login).toBe("login");
    expect(user.url).toBe("https://www.github.com");
    expect(user.avatarUrl).toBe("https://www.github.com");
    expect(user.createdAt).toBe(date);
  });

  it("should not create user without id or with invalid id", () => {
    expect(() => {
      //@ts-ignore
      new User({
        login: "login",
      });
    }).toThrow(UserError);
    expect(() => {
      new User({
        //@ts-ignore
        id: "",
        login: "login",
      });
    }).toThrowError(UserError);
    expect(() => {
      new User({
        //@ts-ignore
        id: "     ",
        login: "login",
      });
    }).toThrowError(UserError);
    expect(() => {
      new User({
        //@ts-ignore
        id: "invalid",
        login: "login",
      });
    }).toThrowError(UserError);
  });

  // it("should not create user without login or with invalid login", () => {
  //   expect(() => {
  //     //@ts-ignore
  //     new User({
  //       id: 1,
  //     });
  //   }).toThrow(UserError);
  //   expect(() => {
  //     new User({
  //       id: 1,
  //       login: "",
  //     });
  //   }).toThrowError(UserError);
  //   expect(() => {
  //     new User({
  //       id: 1,
  //       login: "    ",
  //     });
  //   }).toThrowError(UserError);
  // });

  // it("should not create user without url or with invalid url", () => {
  //   expect(() => {
  //     //@ts-ignore
  //     new User({
  //       id: 1,
  //       login: "login",
  //       avatarUrl: "https://www.github.com",
  //     });
  //   }).toThrow(UserError);
  //   expect(() => {
  //     new User({
  //       id: 1,
  //       login: "login",
  //       url: " ",
  //       avatarUrl: "https://www.github.com",
  //     });
  //   }).toThrowError(UserError);
  //   expect(() => {
  //     new User({
  //       id: 1,
  //       login: "login",
  //       url: "www.github.com",
  //       avatarUrl: "https://www.github.com",
  //     });
  //   }).toThrowError(UserError);
  // });

  // it("should not create user without avatarUrl or with invalid avatarUrl", () => {
  //   expect(() => {
  //     //@ts-ignore
  //     new User({
  //       id: 1,
  //       login: "login",
  //       url: "https://www.github.com",
  //     });
  //   }).toThrow(UserError);
  //   expect(() => {
  //     new User({
  //       id: 1,
  //       login: "login",
  //       url: "https://www.github.com",
  //       avatarUrl: "",
  //     });
  //   }).toThrowError(UserError);
  //   expect(() => {
  //     new User({
  //       id: 1,
  //       login: "login",
  //       url: "https://www.github.com",
  //       avatarUrl: "www.github.com",
  //     });
  //   }).toThrowError(UserError);
  // });

  it("should not create user with invalid createdAt", () => {
    let user = new User({
      id: 1,
      login: "login",
      createdAt: "",
    });
    expect(user.id).toBe(1);
    expect(user.login).toBe("login");
    expect(user.createdAt).toBe(undefined);
    user = new User({
      id: 1,
      login: "login",
      createdAt: "      ",
    });
    expect(user.id).toBe(1);
    expect(user.login).toBe("login");
    expect(user.createdAt).toBe(undefined);
    expect(() => {
      new User({
        id: 1,
        login: "login",
        createdAt: "invalid",
      });
    }).toThrow(UserError);
  });
});
