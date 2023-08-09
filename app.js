
 const express= require("express");
 //const ejs =require("ejs")

const app= express()
const route= express.Router()
// app.set('view engine', 'ejs')



// app.get('/',(req,res)=>{
//     res.render('home')
// })

// app.get('/about',(req,res)=>{
//     const user={
//         name: "Umesh Mehta",
//         age:"25",
//         email:"umesh@gmail.com",
//         pN: 9810448488,
//         skills:["php","js","python"]
//     }
//     res.render('about', {user})
// })

//++++++++++++++++++++=Middleware++++++++++++++

const reqFilter=(req,res,next)=>{
    if(!req.query.age){
       res.send("please enter your age")
    } 
    else if(req.query.age<=18){
        res.send("You are not elegiable to asscess the page")
    }else{
        res.send("welcome To the page")
    }
    next();
}



app.get('/home',(req,res)=>{
    res.send("<h1>Home page</h1>")
})
route.get('/about',(req,res)=>{
    res.send("<h1>About Page</h1>")
})
app.get('/contact',(req,res)=>{
    res.send("<h1>Contact Page</h1>")
})
route.get('/blog',(req,res)=>{
    res.send("<h1>Blog Page</h1>")
})

app.use('/',reqFilter)

 app.listen(3000,()=>{
    console.log("server is running at 3000 port")
 })