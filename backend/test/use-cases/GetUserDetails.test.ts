import express from "express";
import { App } from "../../src/main/App";
import supertest from "supertest";
import { GET_USER_DETAILS_OUTPUT_MOCK } from "../mocks/ApiConsumerMock";

describe("Get User Details Tests", () => {
  let app: express.Application;

  beforeAll(async () => {
    app = new App().express;
  });

  it("should receive ok with user details", async () => {
    const res: supertest.Response = await supertest(app)
      .get(`/api/users/login1/details`)
      .send();
    expect(res.statusCode).toBe(200);
    expect(res.body.user.id).toBe(GET_USER_DETAILS_OUTPUT_MOCK.id);
    expect(res.body.user.login).toBe(GET_USER_DETAILS_OUTPUT_MOCK.login);
    expect(res.body.user.url).toBe(GET_USER_DETAILS_OUTPUT_MOCK.url);
    expect(res.body.user.avatarUrl).toBe(
      GET_USER_DETAILS_OUTPUT_MOCK.avatarUrl
    );
    expect(res.body.user.createdAt).toBe(
      GET_USER_DETAILS_OUTPUT_MOCK.createdAt
    );
  });
});
