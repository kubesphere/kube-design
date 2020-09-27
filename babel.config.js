module.exports = (params) => {
  if (params.env("test")) {
    return {
      presets: ["@babel/env", "@babel/react"],
      plugins: ["@babel/proposal-class-properties"],
    };
  }

  if (params.env() === "cjs") {
    return {
      presets: ["@babel/env", "@babel/react"],
      plugins: [
        "@babel/proposal-class-properties",
        "@babel/transform-runtime",
      ],
    };
  }

  return {
    presets: [["@babel/env", { modules: false }], "@babel/react"],
    plugins: [
      "@babel/proposal-class-properties",
      ["@babel/transform-runtime", { useESModules: true }],
    ],
  };
};
