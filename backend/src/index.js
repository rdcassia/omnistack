const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://cassia:jm280313@my-mongodb-qf2e2.mongodb.net/test?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
 })


app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)