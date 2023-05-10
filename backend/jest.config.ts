export default {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.ts",
    "!**/I*.ts",
    "!**/*.test.ts",
    "!**/jest.config.ts",
    "!**/server.ts",
    "!**/others/**",
  ],
  coverageDirectory: "test/coverage",
  coverageProvider: "v8",
  preset: "ts-jest",
  testMatch: ["**/ApiConsumer.test.ts?(x)"],
};
