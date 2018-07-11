var getUser = (id,callBack) => {
  var user = {
    id:id,
    name:'deepakcodefreak',
  }
setTimeout(()=>{
  callBack(user);
},3000);


}

getUser(31,(userObject)=>{
  console.log(userObject);
})
