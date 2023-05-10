import { User } from "../../src/domain/users/User";
import { UserError } from "../../src/errors/UserError";

describe("User Tests", () => {
  it("should create user", () => {
    const user = new User({
      id: 1,
      login: "login",
      url: "https://www.github.com",
      avatarUrl: "https://www.github.com",
    });
    expect(user.id).toBe(1);
    expect(user.login).toBe("login");
    expect(user.url).toBe("https://www.github.com");
    expect(user.avatarUrl).toBe("https://www.github.com");
  });

  //   it("should not create user without id or with invalid id", () => {
  //     expect(() => {
  //       //@ts-ignore
  //       new User({
  //         login: "login",
  //         url: "https://www.github.com",
  //         avatarUrl: "https://www.github.com",
  //       });
  //     }).toThrow(UserError);
  //     expect(() => {
  //       new User({
  //         //@ts-ignore
  //         id: "",
  //         login: "login",
  //         url: "https://www.github.com",
  //         avatarUrl: "https://www.github.com",
  //       });
  //     }).toThrowError(UserError);
  //     expect(() => {
  //       new User({
  //         //@ts-ignore
  //         id: "invalid",
  //         login: "login",
  //         url: "https://www.github.com",
  //         avatarUrl: "https://www.github.com",
  //       });
  //     }).toThrowError(UserError);
  //   });

  //   it("should not create user without login or with invalid login", () => {
  //     expect(() => {
  //       //@ts-ignore
  //       new User({
  //         id: 1,
  //         url: "https://www.github.com",
  //         avatarUrl: "https://www.github.com",
  //       });
  //     }).toThrow(UserError);
  //     expect(() => {
  //       new User({
  //         id: 1,
  //         login: "    ",
  //         url: "https://www.github.com",
  //         avatarUrl: "https://www.github.com",
  //       });
  //     }).toThrowError(UserError);
  //   });

  //   it("should not create user without url or with invalid url", () => {
  //     expect(() => {
  //       //@ts-ignore
  //       new User({
  //         id: 1,
  //         login: "login",
  //         avatarUrl: "https://www.github.com",
  //       });
  //     }).toThrow(UserError);
  //     expect(() => {
  //       new User({
  //         id: 1,
  //         login: "login",
  //         url: " ",
  //         avatarUrl: "https://www.github.com",
  //       });
  //     }).toThrowError(UserError);
  //     expect(() => {
  //       new User({
  //         id: 1,
  //         login: "login",
  //         url: "xpto://www.github.com",
  //         avatarUrl: "https://www.github.com",
  //       });
  //     }).toThrowError(UserError);
  //   });

  //   it("should not create user without avatarUrl or with invalid avatarUrl", () => {
  //     expect(() => {
  //       //@ts-ignore
  //       new User({
  //         id: 1,
  //         login: "login",
  //         url: "https://www.github.com",
  //       });
  //     }).toThrow(UserError);
  //     expect(() => {
  //       new User({
  //         id: 1,
  //         login: "login",
  //         url: "https://www.github.com",
  //         avatarUrl: "",
  //       });
  //     }).toThrowError(UserError);
  //     expect(() => {
  //       new User({
  //         id: 1,
  //         login: "login",
  //         url: "https://www.github.com",
  //         avatarUrl: "https://www.github.com",
  //       });
  //     }).toThrowError(UserError);
  //   });
});
