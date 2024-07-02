const path = require('path')
const express = require("express");
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 3003;

let ip_addr = '96.255.200.180'
app.get("/", (req, res) => {
    axios({
        method: 'get',
        url: `http://api.api-ninjas.com/v1/iplookup?address=${ip_addr}`,
        headers: { 'X-Api-Key': process.env.React_APP_API_KEY }
    })
        .then((apiRes) => {
            console.log(apiRes.data)
            res.json(apiRes.data)
        })
        .catch((err) => {
            res.send(err)
        })
});


app.post('/api', (req, res) => {
    console.log(req.body)
});



app.listen(PORT, () => {
    console.log(`listening on:${PORT}`)
}) 