// webpack.config.js
const path = require('path')

module.exports = {
    entry: {
        main: './src/scripts/home.js',
        account: './src/scripts/cuenta.js',
    }, // Punto de entrada de tu aplicación
    output: {
        filename: '[name].bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // O el loader que prefieras
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}
