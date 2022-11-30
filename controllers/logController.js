// const express = require("express")
// const router = express.Router()
// const Logs = require("../models/logs")


// // // ============= Index Route =============


// app.get('/', (req, res) => {
//     Logs.find({}, (err, allLogs) => {
//         if(!err) {
//             res.status(200).render('Index', {
//                 logs: allLogs
//             })
//         } else {
//             res.status(400).send(err)
//         }
//     })
// })



// // ============= New Route =============
// app.get('/logs/new', (req, res) => {
//     console.log("2. controller")
//     res.render('New')
// })


// //  CREATE
// app.post("/logs", (req, res) => {
//     if (req.body.shipIsBroken === "on") {
//         req.body.shipIsBroken = true;
//     } else {
//         req.body.shipIsBroken = false;
//     }
//     // res.send(req.body)

//     Logs.create(req.body, (error, createdLogs) => {
//     if (!error) {
//       // redirects after creating fruit, to the Index page
//       res.status(200).redirect("/logs")
//     } else {
//       res.status(400).send(error)
//     }
//   })

//     // res.redirect("/logs/show") //Come back to it after Show is created

// });




// router.get("/:id", (req, res) => {

//     Logs.findById(req.params.id, (error, foundLog) => {
//     if (!error) {
//       res
//         .status(200)
//         .render("logs/Show", {
//           logs: foundLog
//         })
//     } else {
//       res
//         .status(400)
//         .send(error)
//     }
//   })
// })


// module.exports = router