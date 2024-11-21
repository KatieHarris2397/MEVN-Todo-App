const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
require('dotenv').config();

const TodoListRoutes = require('./routes/api/Todolist')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const PORT = 3000

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))

app.use('/api/todoList', TodoListRoutes)

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`)
})