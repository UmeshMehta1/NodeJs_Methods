const dbConnect = require('./mongodb');

const delete1= async ()=>{
    let data = await dbConnect();
    let result= await data.deleteOne(
       {name:"max 6"}
    )
    console.log(result)
    if(result.deletedCount==0){
        console.log("some thing wrong")
    }else{
        console.log("data is deleted")
    }
}
delete1();