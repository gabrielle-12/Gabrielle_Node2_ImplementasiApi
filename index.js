const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    return res.json({
        status: true,
        message: 'Hello World',
        data: null
    })
})

app.post('/', (req, res)=> {
    if (req.body.message === undefined){
        return res.json({
            status: false,
            message: 'Field message is required',
            data: null
        })
    }

    return res.json({
        status: true,
        message: req.body.message,
        data: null
    })
})

app.listen(3000, ()=> {
    console.log('App running on port 3000')
})