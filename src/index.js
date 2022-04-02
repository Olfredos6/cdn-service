const express = require('express')
const path = require('path')

const app = express()
const port = process.env.CDN_PORT

app.use('/', express.static('../data'))

app.listen(port, ()=>{
    console.log(`CDN Server Service running on ${port}! `)
})