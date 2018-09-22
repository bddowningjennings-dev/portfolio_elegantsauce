const
  PORT = 5000,
  express = require('express'),
  app = express()

const path = require('path')
// const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'build')))

app.get('/gg', (req, res) => res.send('butts'))
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')))

app.listen(PORT, ()=>console.log(`(server): listening on port ${PORT}...`))
