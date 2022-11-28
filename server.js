const express = require("express");
const app = express();
const PORT = 3000;
const reactView = require("express-react-views")


app.set("view engine", "jsx")
app.engine("jsx", reactView.createEngine())


app.use((req, res, next) => {
    console.log("Im running for all routes")
    console.log("1. middleware")
    next()
  })

app.get('/', (req, res)=>{
    res.send("<h1>Welcome to the Captains Log App!</h1>, <h2> second </h2>")
})

app.get('/new', (req, res) => {
    console.log("2. controller")
    res.render('New')
})

app.listen(PORT, () => {
    console.log("Listening in port 3000")
})