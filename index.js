const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const dbCon = 'mongodb+srv://weatherapp:weatherapp@cluster0.tsr7j.mongodb.net/weather?retryWrites=true&w=majority'


const app = express()

app.use(cors())

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api/history', require('./api/route'))

const PORT = process.env.PORT || 4444

app.listen(PORT,() =>{

    console.log('APP is Running on PORT ' + PORT)

    mongoose.connect(dbCon,{useNewUrlParser: true,useUnifiedTopology: true ,useCreateIndex: true,useFindAndModify:false
    })
    .then(() =>{
        console.log('connect to database')
    }).catch((err) => console.log('no connetion'))
})






