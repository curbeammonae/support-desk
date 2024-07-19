const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/ErrorHandler')
const PORT = process.env.PORT || 5000
const app = express()
const connectDB = require('./config/DB')

//connect to database

connectDB()


app.use(express.json())//allow us to send raw json
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=> {
    res.send('hello')
})

//routes
app.use('/api/users', require('./routes/userRoutes'))


app.use(errorHandler)
app.listen(PORT, () => console.log(`server started on port ${PORT}`))

