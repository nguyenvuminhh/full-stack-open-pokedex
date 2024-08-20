const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/api/health', (_req, res) => {
  // eslint-disable-next-line no-constant-condition
  // if (true) res.status(400)
  //hi
  res.send('ok')
})

app.get('/api/version', (_req, res) => {
  res.send('1')
})


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
  //console.log('Base url:' + (req.get('host')))
})
