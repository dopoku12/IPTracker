const express = require("express");
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();
app.use(cors({
    origin: ["https://ip-map.vercel.app/"],
    methods: ["Post", "Get"],
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 3003;

//client IPAddress  
const clientIp = (req, res, next) => {
    console.log("req:", req.input)
    axios({
        method: 'GET',
        url: 'http://api.ipify.org',
    }).then((response) => {
        req.userIp = response.data
        next()
    }).catch((err) => {
        console.log(err)
        next(err)
    })
};

app.post("/api", clientIp, (req, res) => {
    const inputIp = req.query.usrInput ? req.query.usrInput : req.userIp;
    axios({
        method: 'GET',
        url: `http://api.api-ninjas.com/v1/iplookup?address=${inputIp}`,
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

module.exports = app