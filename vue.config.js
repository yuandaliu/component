module.exports = {
    // 部署生产环境下的URL：可对当前环境进行区分，baseUrl 从Vue Cli 3.3 起已经弃用，要使用publicPath
    // baseUrl: process,env.NODE.ENV === 'production' ? './' : '/'
    publicPath: process.env.NODE_ENV === 'production' ? '/public' : './',
    devServer: {
        port: 1437
    },
    /* lintOnSave: false  // 取消eslint 验证 */
}