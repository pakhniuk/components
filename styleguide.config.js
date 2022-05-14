const babelConfig = require("./babel.config");
const { template, styles } = require("./styleguide.styles");

module.exports = {
  template,
  styles,
  components: "src/components/**/index.tsx",
  sections: [
    {
      name: "Components",
      components: "./src/components/**/index.tsx",
      ignore: ["./src/components/Modal/*/index.tsx", "./src/components/Toasters/Toaster/index.tsx"],
    },
    {
      name: "Modal",
      components: "./src/components/Modal/index.ts",
    },
  ],
  webpackConfig: {
    entry: "build/script.js",
    module: {
      rules: [
        {
          exclude: [/node_modules(?!([/\\][^/\\]+)+[/\\]src[/\\])/, /[/\\]locales[/\\]en/],
          test: /\.(js|ts|tsx)$/,
          loader: "babel-loader",

          options: {
            babelrc: false,
            ...babelConfig,
          },
        },
        {
          test: /.svg$/,
          loader: "svg-react-loader",
          options: {
            symbolId: "[name].[hash]",
          },
        },
        {
          test: /\.(png|jpg|gif)$/i,
          loader: "file-loader",
        },
      ],
    },
  },
};
