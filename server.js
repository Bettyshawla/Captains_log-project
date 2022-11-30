require('dotenv').config();  
const express = require("express");
const app = express();
const PORT = 3000;
const reactView = require("express-react-views");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const Logs = require("./models/logs")
const methodOverride = require('method-override');
const logsController = require("./controllers/logController")




// ============= Mongoose =============
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  mongoose.connection.once("open", () => {
    console.log("connected to mongo")
  })


// =============  Engine =============
// app.set("views", "./views")
app.set("view engine", "jsx")

app.engine("jsx", reactView.createEngine())

// ============= Middle Ware =============
// body-parser
// these two middle ware will help us get the data from the input field


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log("Im running for all routes")
    console.log("1. middleware")
    next()
})

app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"))
app.use(express.static('public'));
console.log('css')

// // ===== Routes =====
app.use("/logs", logsController)



// ============= New Route =============
app.get('/logs/new', (req, res) => {
    console.log("2. controller")
    res.render('New')
})

// ============= Listening PORT =============
app.listen(PORT, () => {
    console.log("Listening in port: 3000")
})