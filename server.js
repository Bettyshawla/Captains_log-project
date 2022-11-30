require('dotenv').config();  
const express = require("express");
const app = express();
const PORT = 3000;
const reactView = require("express-react-views");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Log = require("./models/logs")
const methodOverride = require('method-override');
// const logsController = require("./controllers/logController")




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


// // ===== Routes =====
// app.use("/logs", logsController)



// ============= New Route =============
app.get('/logs/new', (req, res) => {
    // console.log("2. controller")
    res.render('New')
})

// ============= DELETE =============

app.delete('/logs/:id', (req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? true : false;
    Log.findByIdAndDelete(req.params.id, req.body, (err, updatedLog) => {
        if(!err) {
            res.status(200).redirect(`/logs`)
        } else {
            res.status(400). send(err);
        }
    })
})

// ============= Index Route =============


app.get('/', (req, res) => {
    Log.find({}, (err, allLogs) => {
        if(!err) {
            res.status(200).render('Index', {
                logs: allLogs
            })
        } else {
            res.status(400).send(err)
        }
    })
})

// ============= CREATE =============
app.post("/", (req, res) => {
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }

    Log.create(req.body, (error, createdLogs) => {
    if (!error) {
      res.status(200).redirect("/")
    } else {
      res.status(400).send(error)
    }
  })
});


// app.get("/:id", (req, res) => {                                        // 47
//     Log.findById(req.params.id, (error, foundLog) => {
//         if(!error) {
//             res.status(200).render("Show", {                                // 56
//                 log:foundLog
//             })
//         } else {
//             res.status(400).send(error)
//         }
//     })
// })


// ============= Listening PORT =============
app.listen(PORT, () => {
    console.log("Listening in port: 3000")
})