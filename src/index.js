const express = require('express')
var morgan = require('morgan')

const app = express()
const port = 8000

app.use(morgan('tiny'))

app.use('/', express.static('../data'))

app.listen(port, ()=>{
    console.log(`CDN Server Service runing on ${port}! `)
})