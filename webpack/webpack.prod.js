import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import url from "url";
import Dotenv from "dotenv-webpack";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  context: path.resolve(__dirname, "./src"),
  resolve: {
     extensions: [".js",".ts", ".tsx"],
  },
  entry: {
      app: './index.tsx',
      vendorStyles: ['../node_modules/bootstrap/dist/css/bootstrap.css'],
  },
  output: {
      filename: '[name].[chunkhash].js',
      clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: (module) => {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )?.[1];
            return packageName
              ? `vendor/${packageName.replace("@", "")}`
              : null;
          },
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
       {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
              'style-loader',           
              {
                loader: "css-loader",
                options: {
                  modules: {
                      exportLocalsConvention: "camelCase",
                      localIdentName: '[path][name]__[local]--[hash:base64:5]',
                  },
                },
              }, 
              "sass-loader"
            ],
      },
      {
        test: /\.css$/,
        use: [
            'style-loader', 
            "css-loader"
        ]
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "src"),
    },
    devMiddleware: {
      stats: "errors-only",
    },
  },    
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
      new HtmlWebpackPlugin({
        filename: "index.html", //Name of file in ./dist/
        template: "./index.html", //Name of template in ./src
        scriptLoading: "blocking", // Just use the blocking approach (no modern defer or module)
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new Dotenv({
        path: './prod.env',
        prefix: 'process.env.'
      }),
  ],
};