const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'pug')
app.set('views', './views')



app.get('/', (req, res) =>{
    res.render('view')
})

app.listen(3001, () => console.log('server started at 3001'))