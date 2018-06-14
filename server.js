import express from 'express'
import serveStatic from 'serve-static'
import history from 'connect-history-api-fallback'
import enforce from 'express-sslify'

const app = express()
const port = process.env.PORT || 5000

app.use(enforce.HTTPS({ trustProtoHeader: true }))
app.use(history())
app.use(serveStatic(`${__dirname}/dist/pwa-mat`))
app.listen(port)
