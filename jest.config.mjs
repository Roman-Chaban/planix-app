import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  clearMocks: true,

  testMatch: ["**/__tests__/**/*.(ts|tsx)", "**/?(*.)+(test|spec).(ts|tsx)"],
};

module.exports = createJestConfig(customJestConfig);
