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
});
