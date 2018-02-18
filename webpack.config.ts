import * as webpack from "webpack";

const clientConfig: webpack.Configuration = {
  entry: "./src/client/index.tsx",
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: "css-loader",
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
};

const serverConfig: webpack.Configuration = {
  entry: "./src/server/index.tsx",
  target: "node",
  output: {
    path: __dirname,
    filename: "server.js",
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader/locals",
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
};

export default [clientConfig, serverConfig];
