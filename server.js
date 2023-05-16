const path = require('path')
const os = require('os')
const express = require("express");
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 3003;
const ad = Object.values(os.networkInterfaces())

//user input IP
app.post("/", (req, res) => {
    console.log(req.body.data)
    // next()
});

//client IPAddress  
const clientIp = (req, res, next) => {
    axios({
        method: 'get',
        url: 'http://api.ipify.org',
    })
        .then((response) => {
            req.Ip = response.data;
            console.log(req.Ip)
            next()
        }).catch((err) => {
            console.log(err)
            next(err)
        })
};

app.get("/api", clientIp, (req, res) => {

    axios({
        method: 'get',
        url: `http://api.api-ninjas.com/v1/iplookup?address=${req.Ip}`,
        headers: { 'X-Api-Key': process.env.React_APP_API_KEY }
    })
        .then((apiRes) => {
            res.json(apiRes.data)
        })
        .catch((err) => {
            res.send(err)
        })
});

app.listen(PORT, () => {
    console.log(`listening on:${PORT}`)
}) 