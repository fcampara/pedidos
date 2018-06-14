import express from 'express'
import serveStatic from 'serve-static'
import history from 'connect-history-api-fallback'

const app = express()
const port = process.env.PORT || 5000

app.use(history())
app.use(serveStatic(`${__dirname}/dist/pwa-mat`))
app.listen(port)
