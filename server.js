const path = require('path')
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./config/db')

connectDB()

const app = express()

// Static Folders
app.use(express.static(path.join(__dirname , 'public')))

// Body parser middleware - Allows us to get te http body
app.use(express.json())
app.use(express.urlencoded({ extended:false }))

// cors middleware
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.get('/' , (req , res) => {
    res.send({message: 'Welcome to the RandomIdeas API' })
})

const ideasRouter = require("./routes/ideas")
app.use('/api/ideas' , ideasRouter)

app.listen(port , () => console.log(`Server Lintening on ${port}`))