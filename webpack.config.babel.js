import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import copy from 'copy-webpack-plugin';

const isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v');
const TARGET = process.env.NODE_ENV;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'dist')
};

process.env.BABEL_ENV = TARGET;


const common = {
    context: __dirname,
    // The entry point for the bundle
    entry: [
        'babel-polyfill',
        /* Material Design Lite (https://getmdl.io) */
        '!!style!css!dialog-polyfill/dialog-polyfill.css',
        '!!style!css!react-mdl/extra/material.min.css',
        'react-mdl/extra/material.min.js',
        /* The main entry point of your JavaScript application */
        './app/main.js',
    ],

    // Options affecting the output of the compilation
    output: {
        path: path.resolve(PATHS.build, './assets'),
        publicPath: '/assets/',
        sourcePrefix: '  ',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },


    // What information should be printed to the console
    stats: {
        colors: true,
        hash: isVerbose,
        version: isVerbose,
        timings: true,
        chunks: isVerbose,
        chunkModules: isVerbose,
        cached: isVerbose,
        cachedAssets: isVerbose,
    },

    // The list of plugins for Webpack compiler
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new copy([
            {
                from: path.resolve(PATHS.app, './public'),
                to: PATHS.build
            }
        ])

    ],
    // Options affecting the normal modules
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(PATHS.app)
                ],
                loader: 'babel-loader',
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader?limit=10000',
            },
            {
                test: /\.(eot|ttf|wav|mp3)$/,
                loader: 'file-loader',
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
        ]
    },
};

const development = {
    output: {
        filename: '[name].js',
        chunkFilename: '[id].js',
    },
    debug: true,
    devtool: 'source-map',
    stats: {
        reasons: true,
    },
    devServer: {
        contentBase: PATHS.build,

        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,

        // display only errors to reduce the amount of output
        stats: 'errors-only',

        // parse host and port from env so this is easy
        // to customize
        host: process.env.HOST,
        port: process.env.PORT
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            __DEV__: true,
            'process.env.BABEL_ENV': '"production"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.css/,
                loaders: [
                    'style-loader',
                    `css-loader?${JSON.stringify({
                        sourceMap: true,
                        // CSS Modules https://github.com/css-modules/css-modules
                        modules: true,
                        localIdentName: '[name]_[local]_[hash:base64:3]',
                        minimize: false,
                    })}`,
                    // 'postcss-loader',
                ],
            },
        ]
    }
};

const production = {
    output: {
        filename: '[name].js',
        chunkFilename: '[id].js',
    },

    debug: false,
    devtool: false,
    stats: {
        reasons: false,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
            __DEV__: false,
            'process.env.BABEL_ENV': '"production"'
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            },
            output: {
                comments: false
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.css/,
                loaders: [
                    'style-loader',
                    `css-loader?${JSON.stringify({
                        sourceMap: false,
                        // CSS Modules https://github.com/css-modules/css-modules
                        modules: true,
                        localIdentName: '[hash:base64:4]',
                        // CSS Nano http://cssnano.co/options/
                        minimize: true,
                    })}`,
                    // 'postcss-loader',
                ],
            },
        ]
    }
};

let config;
if (TARGET === 'production') {
    config = merge(common, production);
} else {
    config = merge(common, development);
}

export default config;