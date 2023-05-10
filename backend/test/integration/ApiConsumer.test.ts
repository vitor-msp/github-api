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

  it("should get user repos", async () => {
    const username = "vitor-msp";
    const pageNumber = 0;
    const perPage = 100;
    const repos = await api.getUserRepos({ username, pageNumber, perPage });
    expect(repos.length > 0).toBeTruthy();
    expect(!!repos[0].id).toBeTruthy();
    expect(!!repos[0].name).toBeTruthy();
    expect(!!repos[0].url).toBeTruthy();
    expect(typeof repos[0].id).toBe("number");
    expect(typeof repos[0].name).toBe("string");
    expect(typeof repos[0].url).toBe("string");
  });
});
