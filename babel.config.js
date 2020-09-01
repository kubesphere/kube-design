module.exports = (params) =>
  params.env("test")
    ? {
        presets: [["@babel/env", { modules: "commonjs" }], "@babel/react"],
        plugins: ["@babel/proposal-class-properties"],
      }
    : {
        presets: [["@babel/env", { modules: false }], "@babel/react"],
        plugins: [
          "@babel/proposal-class-properties",
          ["@babel/transform-runtime", { useESModules: true }],
        ],
      };
