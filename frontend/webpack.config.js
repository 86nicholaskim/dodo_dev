const path = require('path') //절대경로를 참조하기 위해 path를 불러오기
const dotenv = require('dotenv-webpack') // 환경변수접근용
const HtmlWebpackPlugin = require('html-webpack-plugin') //웹팩에서 HTML을 다루기위한 플로그인을 불러오기
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //webpack 빌드폴더 정리
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    // const ###_PATH = env.production ? "" : "";

    return {
        mode: 'development',

        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                components: path.join(__dirname, './src/components'),
                routes: path.join(__dirname, './src/routes'),
            },
        },

        // 번들 파일로 만들기 위한 시작 파일(entry)을 설정
        entry: {
            index: './src/index.tsx',
        },

        //생성된 번들 파일(bundle)은 ./dist/ 폴더에 생성
        //publicPath를 지정함으로써 HTML등 다른 파일에서 생성된 번들을 참조할 때, /을 기준으로 참조
        output: {
            clean: true,
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            filename: '[name].[contenthash].js',
        },

        //React(리액트) 파일인 jsx와 js는 babel(바벨)을 이용하여 빌드
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: ['babel-loader'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.ts|tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/i,
                    use: [
                        /* 
              style-loader: Creates `style` nodes from JS strings - development
              MiniCssExtractPlugin: Chunk에서 style코드 추출파일 - production  
            */
                        env.production
                            ? MiniCssExtractPlugin.loader
                            : 'style-loader',

                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|jpe?g|gif|jp2|webp)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    },
                },
            ],
        },

        //./src/index.html 파일을 dist 경로에 index.html로 파일을 생성
        //파일을 생성할 때, Webpack(웹팩)이 만든 번들 파일(/js/app.js)를 HTML에 추가하여 생성
        plugins: [
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                favicon: 'favicon.ico',
                filename: 'index.html',
            }),
            new CleanWebpackPlugin({
                cleanAfterEveryBuildPatterns: ['dist'],
            }),
            new dotenv({
                path: '.env',
            }),
        ],

        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
                publicPath: '/dist/',
            },
            port: 3000,
            historyApiFallback: true,
        },
    }
}
