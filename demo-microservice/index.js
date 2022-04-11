const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/add', (req, res) => {
    res.send({
        code: 200,
        status: "OK",
        data: req.body.num1 + req.body.num2
    })
})

app.get('/minus', (req, res) => {
    res.send({
        code: 200,
        status: "OK",
        data: req.body.num1 - req.body.num2
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})