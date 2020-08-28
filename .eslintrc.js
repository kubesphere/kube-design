module.exports = {
  parser: "babel-eslint",
  extends: ["plugin:prettier/recommended"],
  plugins: ["react"],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    es6: true,
    commonjs: true,
    browser: true,
    jest: true,
  },
};
