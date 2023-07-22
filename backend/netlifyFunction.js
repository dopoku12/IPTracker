const express = require("express");
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const serverless = require('serverless-http');


const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//client IPAddress  
const clientIp = (req, res, next) => {
    axios({
        method: 'GET',
        url: 'http://api.ipify.org',
    })
        .then((response) => {
            req.userIp = response.data;
            next()
        }).catch((err) => {
            console.log(err)
            next(err)
        })
};


app.post("/api", clientIp, (req, res) => {
    const inputIp = req.query.usrInput ? req.query.usrInput : req.userIp
    axios({
        method: 'GET',
        url: `http://api.api-ninjas.com/v1/iplookup?address=${inputIp}`,
        headers: { 'X-Api-Key': process.env.React_APP_API_KEY }
    })
        .then((apiRes) => {
            res.json(apiRes.data)
        })
        .catch((err) => {
            res.send(err)
        })
});


module.exports.handler = serverless(app);
