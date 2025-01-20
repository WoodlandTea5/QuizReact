const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Ponto de entrada
output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
},
module: {
    rules: [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
        loader: "babel-loader",
        },
    },
    {
        test: /\.css$/, // Para estilos CSS
        use: ["style-loader", "css-loader"],
    },
    ],
},
resolve: {
    extensions: [".js", ".jsx"], // Suporte a extensões JS e JSX
},
plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Template HTML
    }),
],
devServer: {
    static: "./dist",
    port: 3002, // Porta para o servidor de desenvolvimento
},
mode: "development",
};
