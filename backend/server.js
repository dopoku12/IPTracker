const express = require("express");
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3003;

var ip_addr = '173.252.107.14'

app.get("/api", (req, res) => {

    axios({
        method: 'get',
        url: `https://api.api-ninjas.com/v1/iplookup?address=${ip_addr}`,
        headers: { 'X-Api-Key': process.env.React_APP_API_KEY }
    })
        .then((apiRes) => {
            console.log(apiRes.data)
            res.json(apiRes.data)
        })
        .catch((err) => {
            res.send(err)
        })
})

app.listen(PORT, () => {
    console.log(`listening on:${PORT}`)
}) 