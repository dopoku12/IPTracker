const express = require("express");
const axios = require('axios');
const cors = require('cors');

require('dotenv').config();
const app = express();
app.use(cors())
const PORT = process.env.PORT || 3003;

// app.get('/', (req, res) => {
//     fetch()
//         .then(apiRes => {
//             res.send(`Hello ${apiRes}`)

//         }
//         )
//         .catch((err) => {
//             res.send(err)
//         })

// })

let ip_addr = '96.255.200.180'
app.get("/", (req, res) => {

    axios({
        method: 'get',
        url: `http://api.api-ninjas.com/v1/iplookup?address=${ip_addr}`,
        headers: { 'X-Api-Key': process.env.React_APP_API_KEY }
    })
        .then((apiRes) => {
            res.json(apiRes.data)
        })
        .catch((err) => {
            res.send(err)
        })
})

app.listen(PORT, () => {
    console.log(`listening on:${PORT}`)
}) 