const bodyParser = require("body-parser")
const cleverbot = require("cleverbot-free")
const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded());


app.get('/', (req, res) => {
    res.render('index', { message: '' })

})
app.post('/' , (req, res) => {
    cleverbot(req.body.message).then((result) => {
        res.render('index', { message: 'PogBot: ' + result })
    })
})

app.listen(5000)