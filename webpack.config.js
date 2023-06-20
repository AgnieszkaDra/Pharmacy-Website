const path = require('path');
// importuję bibliotekę [path] z [node.js] 
const HtmlWebpackPlugin = require('html-webpack-plugin');
let htmlPageNames = ['index', 'form']
let multipleHTMLPlugins = htmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
        template: `./src/${name}.html`,
        filename: `${name}.html`,
        chunks: [`${name}`]
    })
})


module.exports = {
    entry: {
        index: ['whatwg-fetch','./src/js/index.js'],
        form: ['whatwg-fetch','./src/js/form.js']
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
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
              },
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
    ],
    mode: 'production'
   
   
}
// eksportuję ustawienia dla webpacka