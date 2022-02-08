const express=require('express')
const connectDB = require('./config/connectDB')
const contactRoute = require('./routes/contact')
const app = express()
require('dotenv').config()

app.use(express.json());







connectDB()


app.use('/api/contacts',contactRoute )



app.listen(process.env.port,()=> console.log(`port is running on port ${process.env.port}`))


 