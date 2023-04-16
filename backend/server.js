const express = require("express");
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5174;

app.get("/api", (req, res) => {
    res.send('this is the api: https://api.api-ninjas.com/v1/iplookup?address=')
    console.log('worked')
})
app.listen((PORT, () => {
    console.log(`listening on:${PORT}`)
}
)
) 