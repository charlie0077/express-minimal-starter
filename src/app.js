import config from './config/env'
import app from './config/express'
import bunyan from 'bunyan'

const log = bunyan.createLogger({name: 'app'})
const port = process.env.PORT || config.port

app.listen(port, () => {
  log.info(`Server started on port ${port} (${config.env})`)
})

export default app
