const { ModuleFederationPlugin } = require('webpack').container
module.exports = function override(config, env) {
    config.plugins.push(
        new ModuleFederationPlugin({
            name: 'app',
            filename: 'remoteEntry.js',
            exposes: {
                './Test': './src/Test.js'
            }
        })
    )
    config.output = {
        publicPath: 'auto'
    }
    return config
}