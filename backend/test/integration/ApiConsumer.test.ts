import { IApiConsumer } from "../../src/infra/api/IApiConsumer";
import { ApiConsumer } from "../../src/infra/api/ApiConsumer";

describe("Get User Details Tests", () => {
  let api: IApiConsumer;

  beforeAll(async () => {
    api = new ApiConsumer();
  });

  it("should get users", async () => {
    const since = 0;
    const users = await api.getUsers(since);
    expect(users.length > 0).toBeTruthy();
    expect(!!users[0].id).toBeTruthy();
    expect(!!users[0].login).toBeTruthy();
    expect(typeof users[0].id).toBe("number");
    expect(typeof users[0].login).toBe("string");
  });

  it("should get user details", async () => {
    const username = "vitor-msp";
    const user = await api.getUserDetails(username);
    expect(!!user.id).toBeTruthy();
    expect(!!user.login).toBeTruthy();
    expect(!!user.url).toBeTruthy();
    expect(!!user.avatarUrl).toBeTruthy();
    expect(!!user.createdAt).toBeTruthy();
    expect(typeof user.id).toBe("number");
    expect(typeof user.login).toBe("string");
    expect(typeof user.url).toBe("string");
    expect(typeof user.avatarUrl).toBe("string");
    expect(typeof user.createdAt).toBe("string");
  });
});
