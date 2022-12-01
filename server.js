require('dotenv').config();  
const express = require("express");
const app = express();
const Port = 3000;
const reactViews = require("express-react-views");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Log = require("./models/logs")
const methodOverride = require('method-override');
const logsController = require("./controllers/logController")
const seedData = require("./seedData");


/*  ===========================================================================
//  MONGOOSE
//  =======================================================================  */
//  Global Configuration
const mongoURI = process.env.MONGO_URI;
const database = mongoose.connection;

//  Connect to database
mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//  Connection Error/Success
//  Define callback functions for various events
database.on("error", (error) => console.log(error.message + " MongoDB is not running."));
database.on("open",       () => console.log("MongoDB Connected"));
database.on("close",      () => console.log("MongoDB Disconnected"));




/*  ===========================================================================
//  VIEW ENGINE
//  =======================================================================  */
app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());




/*  ===========================================================================
//  MIDDLEWARE
//  =======================================================================  */
app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"));
app.use(express.static('public')); // Tells express to try to match requests with files in the directory called 'public'
app.use("/logs", logsController);





/*  ===========================================================================
//  ROUTES
//  =======================================================================  */
async function seedDatabase() {
    try {
        const seededData = await Log.insertMany(seedData.previousLogs);
        console.log(seededData);
    } catch(error) {
        console.log(error);
    } finally {
        database.close();
    }
}
// seedDatabase();



// ============= Index Route =============

/*  ===========================================================================
//  ROUTES
//  =======================================================================  */
//  Index
// app.get("/", (req, res) => {
//     Log.find({}, (error, allLogs) => {
//         if(!error) {
//             res.status(200).render("Index", {
//                 logs: allLogs
//             });
//         } else {
//             res.status(400).send(error);
//         }
//     })
// });


// //  New
// app.get("/new", (req, res) => {
//     res.render("New");
// });


// //  Delete
// app.delete("/:id", (req, res) => {
//     Log.findByIdAndDelete(req.params.id, (error, data) => {
//         res.redirect("/logs");
//     })
// });


// //  Update
// app.put("/:id", (req, res) => {
//     req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false;
//     Log.findByIdAndUpdate(req.params.id, req.body, (error, updatedLog) => {
//         if(!error) {
//             res.status(200).redirect(`/logs/${req.params.id}`); // Redirect to Index Page
//         } else {
//             res.status(400).send(error);
//         }
//     })
// });


// //  Create
// app.post("/", (req, res) => {
//     req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false;

//     Log.create(req.body, (error, createdLog) => {
//         if(!error) {
//             res.status(200).redirect(`/logs/${createdLog._id.valueOf()}`);  // Redirect to Show route
//         } else {
//             res.status(400).send(error);
//         }
//     })
// });


// //  Edit
// app.get("/:id/edit", (req, res) => {
//     Log.findById(req.params.id, (error, foundLog) => {
//         if(!error) {
//             res.status(200).render("Edit", {log: foundLog});
//         } else {
//             res.status(400).send({ msg: error.message });
//         }
//     });
// });


// //  Show
// app.get("/:id", (req, res) => {
//     Log.findById(req.params.id, (error, foundLog) => {
//         if(!error) {
//             res.status(200).render("Show", {
//                 log: foundLog
//             });
//         } else {
//             res.status(400).send(error);
//         }
//     });
// });

// ============= Listening PORT =============
app.listen(Port, () => {
    console.log("Listening in port: 3000")
})