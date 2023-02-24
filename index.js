const express = require("express")
const path = require("path");

const bodyParser = require("body-parser");
// const router = require("./userroutes");
port = 7000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
// app.use(router);
//  get ek method hai jaise CRUD operation ka read samjh lo
// app.get("/api/v1/login",(req,res)=>{
//        res.sendFile(path.join(__dirname+"/index.html"));
// });

app.get("/",(req,res)=>{
           res.sendFile(path.join(__dirname+"/index.html"));
    });

// app.get("api/v1/userdata",(req,res)=>{
//     res.json({
//         name: "Badal",
//         email: "divy8529@gmail.com",
//         password: "1234567789"
//     });
// });
app.post("/",(req,res)=>{
    const username = req.body.name;
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    res.json({
        success: true,
        name: username,
        email: userEmail,
        password: userPassword
    });
});


// post ek through ek data jaise ki login
//  creddential dala toh vo apne ki API me bhej dega aur uska Database create ho jayega..
// app.post("/api/v1/login",(req,res)=>{
//     res.send(`<h1>Done</h1> <h2>Mr. ${req.body.name}</h2>`)
//     console.log(req.body);
// })


app.listen(port,()=>{
   console.log(`Server is working on port: ${port}`);
});


// GET,POST,PUT,DELETE =>CRUD operation...
// // RESt(representational state transfer) is an API that defines a set
// of function that programmers can use to send requests ans receives responses 
// using the HTTP protocol methods such GET and POST

 
