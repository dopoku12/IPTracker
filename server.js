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
console.log(ad, '  ;')
let ip = '64.26.97.60'
const ipArr = ad[1].map(i => {

    console.log('ad:', i)
    return app.get("/", (req, res) => {
        axios({
            method: 'get',
            url: `http://api.api-ninjas.com/v1/iplookup?address=${i.address}`,
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

})

app.post("/api", (req, res) => {
    res.send(req.body)
    console.log(req.body)
});



app.listen(PORT, () => {
    console.log(`listening on:${PORT}`)
}) 