console.log('Strating app');

setTimeout(()=>{
  console.log('Inside of callBack ');
},2000)

setTimeout(()=>{
  console.log('Inside callBack 2');
},0)


console.log('Finishing app');
