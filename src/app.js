import config from './config/env'
import app from './config/express'
import bunyan from 'bunyan'

const log = bunyan.createLogger({name: 'app'})

app.listen(config.port, () => {
  log.info(`Server started on port ${config.port} (${config.env})`)
})

export default app
