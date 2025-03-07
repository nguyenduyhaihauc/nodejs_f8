const path = require('path')
const express = require('express') //goi thu vien da duoc tai trong node_module
const morgan = require('morgan') //thu vien de kiem tra request duoc gui len server
const { engine } = require('express-handlebars');

const app = express()
const port = 3000

// Cau hinh de lay du lieu trong thu muc tinh
app.use(express.static(path.join(__dirname, 'public/')));

// HTTP logger
app.use(morgan('combined'))

// Temlate engine
app.engine('hbs', engine({
    extname: '.hbs' //cau hinh doi lai ten duoi file handlebars cho do dai
})); 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
    res.render('news')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))