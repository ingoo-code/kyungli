require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const logger = require('./lib/');
const router = require('./routers');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const {sequelize} = require('./models')

// Setting 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false,}))
app.use(logger.prod);

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
})

//DB Connection Check
sequelize.sync({ force:false, })
.then(()=>{
    console.log('DataBase Connection Success !')
})
.catch(err=>{
    console.log(err)
})

// Router
app.use('/',router);
app.use((req,res) => {
    res.status(404).send('Not found!');
})

app.listen(PORT,()=>{
    console.log(`start server port number : ${PORT}`);
});