import * as path from "path";
import * as webpack from "webpack";

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



const plugins: webpack.Plugin[] = [];
if (isDevelopment) {
}

const config: webpack.Configuration = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
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
