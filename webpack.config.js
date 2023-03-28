const path = require('path');
// importuję bibliotekę [path] z [node.js] 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: ['whatwg-fetch','./src/script.js'],
        form: ['whatwg-fetch','./src/form.js']
    },
    // definiuję plik wejściowy 
    output: {
        path: path.resolve(__dirname, 'build'),
        // definiuje ścieżką wyjściową
        filename: '[name].min.js',
        // definiuję nazwę pliku wyjściowego
    },
    target: "web", 
    module: {
        rules: [
           
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // wskazuje plik źródłowy
            filename: 'index.html',
            // określan nazwę dla pliku
            chunks: ['index'],
            // wskazuje plik do podpięcia
        }),
        new HtmlWebpackPlugin({
            template: './src/form.html',
            // wskazuje plik źródłowy
            filename: 'form.html',
            // określan nazwę dla pliku
            chunks: ['form'],
            // wskazuje plik do podpięcia
        })
    ]
   
}
// eksportuję ustawienia dla webpacka