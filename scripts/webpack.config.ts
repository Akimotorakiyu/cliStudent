import * as path from "path";
import * as webpack from "webpack";

import * as HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

// 分析参数
const modeIndex = process.argv.findIndex(ele => {
  return ele == "--mode";
});

let isDevelopment = true;
if (modeIndex >= 0) {
  isDevelopment = process.argv[modeIndex + 1] !== "production";
} else {
  throw "未定义--mode， 默认mode";
}

const plugins: webpack.Plugin[] = [
  new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ["dist"]
  }),
  new HtmlWebpackPlugin({
    template:"public/index.html"
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin()
];
if (isDevelopment) {
}

const config: webpack.Configuration = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "dist",
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.md?$/,
        use: "raw-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "index.js",
    path: path.resolve("dist")
  },
  plugins
};

export default config;
