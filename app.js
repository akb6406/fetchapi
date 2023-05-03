const express= require('express');
require("./src/db/connection");
const app= express();

const MenRanking = require("./src/models/mens");
const router = require('./src/routers/men');

const port = process.env.PORT || 3000;

app.use(express.json());

// all the calls get,post,patch,delete
app.use(router);

app.listen(port, ()=>{
    console.log(`connection is live at port no. ${port}`);
})