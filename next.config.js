const path = require("path");
const glob = require("glob");
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  cssModules: true
});

module.exports = {
  webpack: (config, { dev }) => {
    // Fixes npm packages that depend on `fs` module
    config.module.rules.push(
      {
        test: /\.(css|styl)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]"
        }
      },
      {
        test: /\.scss/,
        loader: "sass-loader",
        options: {
          includePaths: ["styles", "node_Modules"]
        }
      },
      {
        test: /\.css$/,
        use: ["babel-loader", "raw-loader", "postcss-loader"]
      },
      {
        test: /\.styl$/,
        use: [
          "babel-loader",
          "raw-loader",
          "postcss-loader",
          {
            loader: "stylus-loader",
            options: {
              includePaths: ["styles", "node_modules"]
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    );

    return config;
  }
};
