const express = require('express')
const { ENGINE_METHOD_ALL } = require('node:constants')
const app = express()

app.set('view egine', 'pug')


app.get('/', (req, res) =>{
    res.send('<h1>I love coding</h1>')
})

app.listen(3001, () => console.log('server started at 3001'))