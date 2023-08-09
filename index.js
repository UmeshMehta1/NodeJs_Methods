const {MongoClient} = require('mongodb');
const url= 'mongodb://127.0.0.1:27017';
const databaseName='E-Commerce'
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    db= result.db(databaseName);
    collection = db.collection('product');
    let data = await collection.find({}).toArray();
    console.log(data)


}

getData();