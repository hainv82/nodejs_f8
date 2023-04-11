// import express from "express";
const express=require('express');
const morgan =require('morgan');
// import { hdb } from "express-handlebars";
const hdb =require('express-handlebars');
const path=require('path');

const app = express();
app.engine('hbs',hdb.engine({extname:'.hbs'}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));

const port = 3000;

// app.use(express.static(path.join(__dirname,"src/public")));
// app.use(express.static(path.join(__dirname, "src/public")));
// app.use(express.static('public'));
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname + '/public')));

//http logger 
app.use(morgan('combined'));
app.get("/", (req, res) => {
  // return res.send("Hello World! sss--");
  res.render('home');
});
app.get('/news', (req, res)=>{
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
