'use strict'

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-0'],
                        plugins: [ 'transform-runtime' ]
                    }
                }
            },
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: {
                        loader: 'css-loader',
                    }
				})
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [ 
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        }, 
                        'sass-loader'
                    ]
				})
			},
            {
                test: /(.png|jpg|jpeg|webp)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'dist/index.html'
        }),
        new ExtractTextPlugin('style.css')
    ],
    devServer: {
        historyApiFallback: true
    }
} 
