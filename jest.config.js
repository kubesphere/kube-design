module.exports = {
  transform: {
    // https://github.com/aelbore/esbuild-jest/issues/21
    '^.+\\.tsx?$': '@sucrase/jest-plugin',
  },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: [
    './configs/jest/enzyme.setup.js',
    './configs/jest/jsdom.mocks.js',
  ],
  moduleNameMapper: {
    '@kubed/icons':'<rootDir>/packages/icons/dist',
    '@kubed/(.*)': '<rootDir>/packages/$1/src',
  },
};
