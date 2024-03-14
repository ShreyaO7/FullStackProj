const express=require("express");
const app=express();//called express func and stored its value in app var

const path = require('path')
app.use(express.static('public'));// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static(path.join(__dirname, 'public')))

// setup ejs
app.set('view engine', 'ejs'); 


app.get("/",(req,res)=>{ //here we aqre using get()method for sending response
    res.send("you contacted root path");
});
app.get("/apple",(req,res)=>{
    let name="shreya" 
    res.render("home.ejs",{name});
});

app.get("/banana",(req,res)=>{ 
    res.render('contact.ejs');
});

app.post("/login",(req,res)=>{
    res.send(req.body);
})

// app.use((req,res)=>{ //sending response
    // console.log(" request received");
    // res.send({ //we can send response in any format
        // name:'mango', //object k form me req send kar rahe h
        // color:'yellow',
    // });
// });

app.listen("3000",()=>{ //ek web server create kar rha joh request accept kar ske
    console.log('app is listening...');
});