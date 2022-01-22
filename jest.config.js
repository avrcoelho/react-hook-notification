module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "<rootDir>/src/index.ts",
    "<rootDir>/src/presentation/assets",
  ],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  testMatch: ["<rootDir>/src/**/__tests__/**/*.spec.{ts,tsx}"],
  testEnvironment: "jsdom",
};
