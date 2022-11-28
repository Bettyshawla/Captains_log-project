const express = require("express");
const app = express();
const PORT = 3000;
const reactView = require("express-react-views");
const bodyParser = require("body-parser")


app.set("view engine", "jsx")
app.engine("jsx", reactView.createEngine())


// body-parser
// these two middle ware will help us get the data from the input field
app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.urlencoded({
//     extended: true
//   }));

// parse app/json
app.use(bodyParser.json())


app.use((req, res, next) => {
    console.log("Im running for all routes")
    console.log("1. middleware")
    next()
})

app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Captains Log App!</h1>")
})

app.get('/logs/new', (req, res) => {
    console.log("2. controller")
    res.render('New')
})

app.post("/logs/", (req, res) => {

    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }

    res.send(req.body)


});

app.listen(PORT, () => {
    console.log("Listening in port 3000")
})