const dbConnect = require('./mongodb');

// const update = () => {
//   dbConnect()
//     .then((data) => {
//       return data.updateOne(
//         {name:'Mobile'},{
//         $set:{name:"Glass"}
//     }
//       );
// })
//     .then((result) => {
//       if (result) {
//         console.warn("data is updated");
//       }
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };

// update();

/// using asinc await

const update =async ()=>{
    let data = await dbConnect();
    let result= await data.updateOne(
        {name:"Glass"},{
            $set:{name:"Mobile"}
        }
    )
    console.log(result)
}
update();