module.exports = {
    configureWebpack: {
        resolve: {
            // 为项目配置别名
            alias: {
                // 在脚手架3中，‘@’别名已经默认在其他文件中配置过了，指的是src
                'assets': '@/assets',
                'common': '@/common',
                'network': '@/network',
                'components': '@/components',
                'views': '@/views',
            }
        }
    }
}