module.exports = {
  transform: {
    '^.+\\.tsx?$': '<rootDir>/configs/jest/transform.js',
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
