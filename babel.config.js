module.exports = {
  sourceType: "unambiguous",
  presets: [
    [
      "@babel/env",
      {
        targets: {
          browsers: ["last 2 versions", "ie 11", "safari >= 7"],
        },
      },
    ],
    "@babel/typescript",
    [
      "@babel/react",
      {
        runtime: "automatic",
      },
    ],
  ],
  plugins: ["@babel/transform-runtime"],
};
