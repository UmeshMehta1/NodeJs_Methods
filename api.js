const express =require('express');
const dbConnect = require('./mongodb');
const app =express()
app.use(express.json());

app.get('/', async(req,resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    // console.log(data)
    resp.send(data)
})

// app.post('/',(req,resp)=>{
//     console.log(req.body)
//     // resp.send(req.body)
//     // resp.send({name:"umesh"})
// })

app.post('/', async(req,resp)=>{
    try {
        let data = await dbConnect();
        let result = await data.insertMany([req.body]);
        console.log(`${result.insertedCount} documents were inserted`);

        resp.send(result);
      } catch (error) {
        console.error("Error:", error);
        resp.status(500).send("Internal Server Error");
      }
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})