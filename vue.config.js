module.exports = {
    indexPath: 'index.html',
    publicPath: '/',
    pages: {
        // index,当输入 http://ip:port/ 进入
        index: {
          // page 的入口
          entry: 'src/platform/index/main.js',
          // 模板来源
          template: 'public/index.html',
          // 在 dist/index.html 的输出
          filename: 'index.html',
          // 在这个页面中包含的块，默认情况下会包含
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        admin: {
            // page 的入口
            entry: 'src/platform/admin/main.js',
            // 模板来源
            template: 'public/index-template.html',
            // 在 dist/index.html 的输出
            filename: 'admin/index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Admin',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'admin']
        },
        participant: {
            // page 的入口
            entry: 'src/platform/participant/main.js',
            // 模板来源
            template: 'public/index-template.html',
            // 在 dist/index.html 的输出
            filename: 'participant/index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Participant',
            chunks: ['chunk-vendors', 'chunk-common', 'participant']
        }
    }
}