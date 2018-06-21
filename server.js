const
  express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  // bodyParser = require('body-parser'),
  // nodemailer = require('nodemailer'),
  port = process.env.PORT || 5000

const app = express()

// Add headers
// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'https://pedidos-unigran.herokuapp.com')
//   res.setHeader('Access-Control-Allow-Methods', 'POST')
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
//   res.setHeader('Access-Control-Allow-Credentials', true)
//   next()
// })

app.use(history())
app.use(serveStatic(`${__dirname}/dist/pwa-mat`))
app.listen(port)

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// app.get('/', (req, res) => {
//   res.send('Hello')
// })

// app.post('/send', (req, res) => {
//   console.log(req.body.data)
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: 'unigransender@gmail.com', // generated ethereal user
//       pass: 'unigrannet' // generated ethereal password
//     },
//     tls: {
//       rejectUnauthorized: false
//     }
//   })

//   // 'tragefo.ead@unigran.br, florida.mkt@unigran.br, emprensa.ead@unigran.br'
//   let mailOptions = {
//     from: '"Sistema de solicitação de arte" <unigransender@gmail.com>', // sender address
//     to: 'unigransender@gmail.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     html: req.body.data // html body
//   }

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return console.log(error)
//     }
//     res.end('{"success" : "Updated Successfully", "status" : 200}')
//   })
// })
