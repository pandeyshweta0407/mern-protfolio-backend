const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
        name :{
            type: String,
            required : true,
            trim: true,
        },
        email :{
            type: String,
            required : true,
            trim: true,
        },
        phone :{
            type: String,
            required : true,
            trim: true,
        },
        subject :{
            type: String,
            required : true,
            trim: true,
        },
        message:{
            type: String,
            required : true,
            trim: true,
        },
     });

// create model
const users = new mongoose.model("messages", messageSchema);

module.exports = users;