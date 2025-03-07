const express = require('express') //goi thu vien da duoc tai trong node_module
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))