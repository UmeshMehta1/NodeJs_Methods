const dbConnect = require('./mongodb');

const insert=async ()=>{
   let data = await dbConnect();
  let result = await data.insertMany(
      [
          {name:'max 5',brand:'micromax',price:420,category:'mobile'},
          {name:'max 6',brand:'micromax',price:520,category:'mobile'},
          {name:'max 7',brand:'micromax',price:620,category:'mobile'},
          {name:'max 55',brand:'micromax',price:333,category:'mobile'},
      ]
  );
  if(result.acknowledged)
  {
      console.warn("data is inserted")
  }else{
    console.log("data is not inserted")
  }
}

insert();