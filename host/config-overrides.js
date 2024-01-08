const { ModuleFederationPlugin } = require('webpack').container
const deps = require("./package.json").dependencies
module.exports = function override(config, env) {
    config.plugins.push(
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                app: "app@http://localhost:3001/remoteEntry.js",
            },
            shared: {
                ...deps,
                react: { singleton: true, eager: true },
                "react-dom": { singleton: true, eager: true }
            },
        })
    )
    return config
}