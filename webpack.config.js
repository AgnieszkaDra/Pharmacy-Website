const path = require('path');
// importuję bibliotekę [path] z [node.js] 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
              test: /\.scss$/,
              use: [
               
                {
                  loader: 'css-loader',
                
                }, {
                  loader: 'resolve-url-loader',
                 
                }, 
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true, // <-- !!IMPORTANT!!
                  }
                }
              ]
            },
            {
                test: /\\.css$/,
                use: [
                  "style-loader",
                  {
                    loader: "css-loader",
                    options: {
                      importLoaders: 1,
                      modules: true,
                    },
                  },
                ],
              },
            
          ],
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
        }),
        new CleanWebpackPlugin(),
    ],
    mode: 'production'
   
   
}
// eksportuję ustawienia dla webpacka