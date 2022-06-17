const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotEnv = require('dotenv-webpack');

const HtmlPlugin = new HtmlWebpackPlugin({
  // esto para copiar el archivo html a producción
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/, // para todo archivo js use babel-loader para convertir
        exclude: /node_modules/, // para que no sea analizado al momento de convertir los archivos
        use: ['babel-loader']
      },
      {
        test: /\.css$/, // para todo archivo css use css-loader y despues style-loader para convertir
        use: ['style-loader', 'css-loader'] // para todo archivo css use css-loader y despues style-loader para convertir, en este arreglo el convertidor empieza de derecha a izquierda, en este caso comienza primero por css-loader y termina con style-loader
      },
    ]
  },
  plugins: [HtmlPlugin, new DotEnv()], // Asi le indicamos como convertir el HTML y usar variables de entorno
};
