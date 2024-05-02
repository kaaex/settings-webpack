import { Configuration } from "webpack";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";
// import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
  return [
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    // new BundleAnalyzerPlugin()
  ];
}

/* {

  TODO: `plugins` - {
    plugins: [плагины]
  }
  plugins: [
    TODO: `HtmlWebpackPlugin` - {
      HtmlWebpackPlugin - cамый важный плагин, который подставляет скрипты в нашу htmlku, скрипты которые получают
       в режиме сборки.
        Без передачи template webpack авт-ки настраивает index
    }
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"), 
    }),

    TODO: `webpack.ProgressPlugin()` - {
      webpack.ProgressPlugin() - плагин показывает проценты сборки 
       (в продакшн не рекомендуют, поскольку сильно замедляет сборку)
    }
    new webpack.ProgressPlugin(),

    TODO: `MiniCssExtractPlugin()` - {
      MiniCssExtractPlugin() - плагин билдит весь css в отдельный файл
    }
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin(), - плагин который показывает размер бандла визуально
  ],

} */
