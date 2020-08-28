module.exports = {
  bail: true,
  transformIgnorePatterns: [
    // Change MODULE_NAME_HERE to your module that isn't being compiled
    "/node_modules/.+\\.js$",
  ],
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "<rootDir>/jest/styleMock.js",
  },
  testPathIgnorePatterns: ["node_modules"],
  setupFiles: ["<rootDir>/jest/setupTests.js"],
  setupFilesAfterEnv: ["<rootDir>/node_modules/jest-enzyme/lib/index.js"],
};
