// webpack配置
const path = require('path');
const { whenProd } = require('@craco/craco');

module.exports = {
    webpack: {
        // 配置路径别名
        alias: {
            '@src': path.resolve(__dirname, './src'),
            '@api': path.resolve(__dirname, './src/api'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@constant': path.resolve(__dirname, './src/constant'),
            '@router': path.resolve(__dirname, './src/router'),
            '@store': path.resolve(__dirname, './src/store'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@views': path.resolve(__dirname, './src/views'),
        },
        // 自定义webpack配置
        configure: (webpackConfig, { paths }) => {
            webpackConfig.module.rules[1].oneOf = [
                ...[
                    {
                        test: /\.svg$/,
                        include: path.resolve(__dirname, './src/assets/svg/icons'),
                        loader: 'svg-sprite-loader',
                        options: {
                            symbolId: 'icon-[name]'
                        }
                    }
                ],
                ...webpackConfig.module.rules[1].oneOf
            ];
            whenProd(() => {
                paths.appBuild = 'dist'
                webpackConfig.output = {
                    ...webpackConfig.output,
                    path: path.resolve(__dirname, 'dist'),
                    publicPath: './'
                }
            });
            return webpackConfig;
        }
    },
    // devServer
    devServer: {
        // proxy: {
        //     '/api': {
        //         target: '',
        //         changeOrigin: true
        //     }
        // }
    }
}