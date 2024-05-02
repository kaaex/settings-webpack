import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3030,
    open: true,
    historyApiFallback: true,
  };
}

/* {
  
  TODO: `devServer` - {
    devServer: помомогает кодить в лайв режиме, то есть не приходится билдить на каждое изменение
  } 
  devServer: {
    port: 5000,
    open: true,
  },

} */
