import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import routes from '../route/index.js'

const app = express()

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

app.use('/api', routes)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({message: err.message})
})

app.use((req, res, next) => {
  res.status(404).json({
    message: 'API Not found.'
  })
})

export default app
