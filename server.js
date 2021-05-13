require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const logger = require('./lib/');
const router = require('./routers');

app.use(logger.prod);
app.use('/',router);
app.use((req,res) => {
    res.status(404).send('Not found!');
})

app.listen(PORT,()=>{
    console.log(`start server port number : ${PORT}`);
});