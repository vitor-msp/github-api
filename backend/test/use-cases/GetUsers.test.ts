import express from "express";
import { App } from "../../src/main/App";
import supertest from "supertest";
import { GET_USERS_OUTPUT_MOCK } from "../mocks/ApiConsumerMock";

describe("Get Users Tests", () => {
  let app: express.Application;

  beforeAll(async () => {
    app = new App().express;
  });

  it("should receive ok with users - since is valid", async () => {
    const res: supertest.Response = await supertest(app)
      .get(`/api/users?since=1`)
      .send();
    expect(res.statusCode).toBe(200);
    expect(res.body.lastPage).toBe("http://127.0.0.1:3001/api/users?since=1");
    expect(res.body.nextPage).toBe("http://127.0.0.1:3001/api/users?since=3");
    expect(res.body.users[0].id).toBe(GET_USERS_OUTPUT_MOCK[0].id);
    expect(res.body.users[0].login).toBe(GET_USERS_OUTPUT_MOCK[0].login);
    expect(res.body.users[0].url).toBe(GET_USERS_OUTPUT_MOCK[0].url);
    expect(res.body.users[1].id).toBe(GET_USERS_OUTPUT_MOCK[1].id);
    expect(res.body.users[1].login).toBe(GET_USERS_OUTPUT_MOCK[1].login);
    expect(res.body.users[1].url).toBe(GET_USERS_OUTPUT_MOCK[1].url);
  });

  it("should receive ok with users - since not informed", async () => {
    const res: supertest.Response = await supertest(app)
      .get(`/api/users`)
      .send();
    expect(res.statusCode).toBe(200);
    expect(res.body.lastPage).toBe("http://127.0.0.1:3001/api/users?since=1");
    expect(res.body.nextPage).toBe("http://127.0.0.1:3001/api/users?since=3");
    expect(res.body.users[0].id).toBe(GET_USERS_OUTPUT_MOCK[0].id);
    expect(res.body.users[0].login).toBe(GET_USERS_OUTPUT_MOCK[0].login);
    expect(res.body.users[0].url).toBe(GET_USERS_OUTPUT_MOCK[0].url);
    expect(res.body.users[1].id).toBe(GET_USERS_OUTPUT_MOCK[1].id);
    expect(res.body.users[1].login).toBe(GET_USERS_OUTPUT_MOCK[1].login);
    expect(res.body.users[1].url).toBe(GET_USERS_OUTPUT_MOCK[1].url);
  });

  it("should receive ok with users - since is invalid", async () => {
    const res: supertest.Response = await supertest(app)
      .get(`/api/users?since=invalid`)
      .send();
    expect(res.statusCode).toBe(200);
    expect(res.body.lastPage).toBe("http://127.0.0.1:3001/api/users?since=1");
    expect(res.body.nextPage).toBe("http://127.0.0.1:3001/api/users?since=3");
    expect(res.body.users[0].id).toBe(GET_USERS_OUTPUT_MOCK[0].id);
    expect(res.body.users[0].login).toBe(GET_USERS_OUTPUT_MOCK[0].login);
    expect(res.body.users[0].url).toBe(GET_USERS_OUTPUT_MOCK[0].url);
    expect(res.body.users[1].id).toBe(GET_USERS_OUTPUT_MOCK[1].id);
    expect(res.body.users[1].login).toBe(GET_USERS_OUTPUT_MOCK[1].login);
    expect(res.body.users[1].url).toBe(GET_USERS_OUTPUT_MOCK[1].url);
  });
});
