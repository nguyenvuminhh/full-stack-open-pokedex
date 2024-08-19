const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.get('/api/health', (_req, res) => {
  res.send('ok')
})

app.get('/api/version', (_req, res) => {
  res.send(1)
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
  //console.log('Base url:' + (req.get('host')))
})
