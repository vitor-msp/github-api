import express from "express";
import { App } from "../../src/main/App";
import supertest from "supertest";
import { GET_USER_REPOS_OUTPUT_MOCK } from "../mocks/ApiConsumerMock";

describe("Get User Repos Tests", () => {
  let app: express.Application;

  beforeAll(async () => {
    app = new App().express;
  });

  it("should receive ok with user repos - pageNumber is valid", async () => {
    const username = "username";
    const res: supertest.Response = await supertest(app)
      .get(`/api/users/${username}/repos?pagenumber=0`)
      .send();
    expect(res.statusCode).toBe(200);
    expect(res.body.username).toBe(username);
    expect(res.body.repos[0].id).toBe(GET_USER_REPOS_OUTPUT_MOCK[0].id);
    expect(res.body.repos[0].name).toBe(GET_USER_REPOS_OUTPUT_MOCK[0].name);
    expect(res.body.repos[0].url).toBe(GET_USER_REPOS_OUTPUT_MOCK[0].url);
    expect(res.body.repos[1].id).toBe(GET_USER_REPOS_OUTPUT_MOCK[1].id);
    expect(res.body.repos[1].name).toBe(GET_USER_REPOS_OUTPUT_MOCK[1].name);
    expect(res.body.repos[1].url).toBe(GET_USER_REPOS_OUTPUT_MOCK[1].url);
  });

  it("should receive ok with user repos - pageNumber not informed", async () => {
    const username = "username";
    const res: supertest.Response = await supertest(app)
      .get(`/api/users/${username}/repos`)
      .send();
    expect(res.statusCode).toBe(200);
    expect(res.body.username).toBe(username);
    expect(res.body.repos[0].id).toBe(GET_USER_REPOS_OUTPUT_MOCK[0].id);
    expect(res.body.repos[0].name).toBe(GET_USER_REPOS_OUTPUT_MOCK[0].name);
    expect(res.body.repos[0].url).toBe(GET_USER_REPOS_OUTPUT_MOCK[0].url);
    expect(res.body.repos[1].id).toBe(GET_USER_REPOS_OUTPUT_MOCK[1].id);
    expect(res.body.repos[1].name).toBe(GET_USER_REPOS_OUTPUT_MOCK[1].name);
    expect(res.body.repos[1].url).toBe(GET_USER_REPOS_OUTPUT_MOCK[1].url);
  });

  it("should receive ok with user repos - pageNumber is invalid", async () => {
    const username = "username";
    const res: supertest.Response = await supertest(app)
      .get(`/api/users/${username}/repos?pagenumber=invalid`)
      .send();
    expect(res.statusCode).toBe(200);
    expect(res.body.username).toBe(username);
    expect(res.body.repos[0].id).toBe(GET_USER_REPOS_OUTPUT_MOCK[0].id);
    expect(res.body.repos[0].name).toBe(GET_USER_REPOS_OUTPUT_MOCK[0].name);
    expect(res.body.repos[0].url).toBe(GET_USER_REPOS_OUTPUT_MOCK[0].url);
    expect(res.body.repos[1].id).toBe(GET_USER_REPOS_OUTPUT_MOCK[1].id);
    expect(res.body.repos[1].name).toBe(GET_USER_REPOS_OUTPUT_MOCK[1].name);
    expect(res.body.repos[1].url).toBe(GET_USER_REPOS_OUTPUT_MOCK[1].url);
  });
});
