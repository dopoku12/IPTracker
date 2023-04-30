const path = require('path')
const os = require('os')
const express = require("express");
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 3003;
const ad = Object.values(os.networkInterfaces())
console.log()
let ip = '73.9.149.180';

// let oneAd = ad.map(i => console.log(i, 'stop;'));



app.get("/", (req, res, next) => {
    axios({
        method: 'get',
        url: 'http://api.ipify.org',
    })
        .then((response) => {
            res.json(response.data)
        }).catch((err) => {
            res.send(err)
        })


});

app.get("/api", (req, res) => {
    axios({
        method: 'get',
        url: `http://api.api-ninjas.com/v1/iplookup?address=${ip}`,
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

app.listen(PORT, () => {
    console.log(`listening on:${PORT}`)
}) 