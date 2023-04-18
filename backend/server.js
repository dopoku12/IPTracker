const express = require("express");
const axios = require('axios');
const cors = require('cors');


require('dotenv').config();
const app = express();
app.use(cors())
const PORT = process.env.PORT || 3003;

let ip_addr = '96.255.200.180'

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