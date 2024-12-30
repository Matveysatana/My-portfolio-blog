const path = require('path');

module.exports = {
    entry: './src/index.js', // Точка входа вашего приложения
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/i, // Регулярное выражение для всех форматов изображений
                type: 'asset/resource', // Используем asset/resource для обработки изображений
                generator: {
                    filename: 'images/[name][ext]', // Файлы будут сохраняться в build/images
                },
            },
            {
                test: /\.jsx?$/, // Обработка JS и JSX файлов
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Используем Babel для транспиляции
                },
            },
            {
                test: /\.css$/, // Обработка CSS файлов
                use: ['style-loader', 'css-loader'],
            },
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
        extensions: ['.js', '.jsx'], // Автоматическое разрешение расширений файлов
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build'), // Папка для сервера разработки
        },
        compress: true,
        port: 9000,
        hot: true, // Включение горячей перезагрузки
        historyApiFallback: true, // Для корректной работы React Router
    },
};