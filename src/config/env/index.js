import prodConfig from './production'
import devConfig from './development'
import testConfig from './test'

const env = process.env.NODE_ENV || 'development'

let config = devConfig
if (env === 'production') config = prodConfig
if (env === 'test') config = testConfig

export default config
