require("dotenv").config();
const express = require('express');
const cors = require('cors');
require("./db/conn");

const  router = require("./routes/messageRoute");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(router);


app.get("/",(req, res)=>{
   res.status(200).json("hello world")
})

const server =  () =>{
   app.listen(PORT , ()=>{
   console.log(`server is listening to port ${PORT}`);
   });
} 

server();