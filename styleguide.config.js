const babelConfig = require("./babel.config");

module.exports = {
  components: "src/components/Button/index.tsx",
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
