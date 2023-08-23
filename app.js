const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello world ajah andi saja!')
})
app.get('/myproject', (req, res) => {
  res.send('Hello project!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})