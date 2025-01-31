const express = require('express')
const cors = require('cors')

require('dotenv').config()
require('./src/config/connectDB')

const PORT = process.env.PORT || 3300

const app = express()
app.use(cors());

app.get('/', (req,res)=>{
    res.status(200).json({
        email: "idokomarcelinauregu@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/IdokoMarcelina/hngbackendtask1.git"
        
    })
})

app.listen(PORT, console.log(

   ` server is up and running at port ${PORT}`
)
)