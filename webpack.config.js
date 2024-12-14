module.exports = {
    // Ваша текущая конфигурация Webpack
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            throwIfNamespace: false, // Добавьте эту строку
                        },
                    },
                ],
            },
            // Другие правила
        ],
    },
};