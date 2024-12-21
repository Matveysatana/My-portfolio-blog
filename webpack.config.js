const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]', // Файлы будут копироваться в build/images
                },
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, 'build'), // Указание выходной директории
        filename: '[name].bundle.js',
        publicPath: '/', // Указание корневого пути для статических файлов
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'), // Удобство использования абсолютных путей в проекте
        },
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build'), // Папка для сервера разработки
        },
        compress: true,
        port: 9000,
    },
};
