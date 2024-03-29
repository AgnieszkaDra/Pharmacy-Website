const path = require('path');
// importuję bibliotekę [path] z [node.js] 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        form: ['whatwg-fetch','./src/js/form2.js']
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
                },
             
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
              {
                test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
          use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ]
      },
      {
        // Rule for handling image files
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        use: [
            {
                // Use file-loader to emit the image as a separate file in the output directory
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/', // Output path for images
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