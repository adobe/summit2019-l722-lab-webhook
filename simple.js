const express = require('express')

const app = express()

require('dotenv').config()

app.get('/webhook', (req, res) => {
  if (req.query['challenge']) {
    res.send(req.query['challenge'])
  } else {
    console.log('No challenge')
    res.status(400)
  }
})

app.post('/webhook', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/text' })
  res.end('pong\n')

  console.log('webhook received')
})

const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
