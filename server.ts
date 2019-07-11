import '@babel/polyfill'
import chalk from 'chalk'
import * as dotenv from 'dotenv'
import * as express from 'express'
import * as path from 'path'
import { createLogger, format, transports } from 'winston'

const logger = createLogger({
  format: format.simple(),
  level: 'debug',
  transports: [new transports.Console()],
})

dotenv.config()
const app = express()
const publicPath = path.join(__dirname, 'build')
const port: any = process.env.PORT || 8080

app.use(express.static(publicPath))

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, function serverListner() {
  logger.debug(`Server running on port ${chalk.blue(port)}`)
})
