// var setPromise = new Promise ((resolve,reject) =>{
//   setTimeout(()=>{
//     resolve('Hey its resolved!!!');
//     resolve(`ohoho resolved `);
//     reject(`Its rejected`)
//   },2500)
// });
//
// setPromise.then((message)=>{
//   console.log(`Message : ${message}`);
// },(errorMessage)=>{
//   console.log(`Error : ${errorMessage}`);
// })


var asynADD = (a,b) => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(typeof a ==='number' && typeof b === 'number'){
          resolve(a+b);
      }else {
        reject('a and b , both must be number');
      }
    },1500)
  });
}


asynADD(2,5).then((res)=>{
  return asynADD(2,res);
}).then((result)=>{
  console.log(result);
}).catch((message)=>{
  console.log(`Error : ${message}`);
})
