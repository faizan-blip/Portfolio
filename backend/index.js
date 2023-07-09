const express = require('express')
const app = express()
const cors = require('cors');
const dbConnect = require('./config/database')
require('dotenv').config()

const PORT = process.env.PORT || 5000
app.use(cors({
    origin: 'https://faizanak-portfolio.netlify.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'phone'],
  }));
  
app.use(express.json())

const routes = require('./routes/files')
app.use('/api/contact' , routes)
dbConnect();
app.listen(PORT , ()=>{
    console.log("Port is running successfully");
})

app.get('/' , (req,res)=>{
    res.send("Running contact")
})