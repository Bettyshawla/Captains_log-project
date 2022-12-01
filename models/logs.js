const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const logsSchema = new Schema({
    title: { type: String, required: true },
    entry:  { type: String, required: true },
    shipIsBroken: { type: Boolean }
},
{
    timestamps: true
})


const Log = model("Logs", logsSchema);


module.exports = Log; 