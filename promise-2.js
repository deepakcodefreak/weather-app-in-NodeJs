const request = require('request');

var googlecodeAddress = (address) => {
  return new Promise((resolve,reject)=>{
    var encodedAddress = encodeURIComponent(address);


      request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}%key=AIzaSyBs6VkyURI6n5RRra8a929r_WH--KWD6qw`,
        json:true,
      },function(error,response,body){

        if(body.status === 'OK'){
            resolve({
              address:body.results[0].formatted_address,
              latitude:body.results[0].geometry.location.lat,
              longitude:body.results[0].geometry.location.lng,
          });
        }

      else if (error) {
            reject('Unable to connect to google server');
          }

        else if(body.status === 'ZERO_RESULTS'){
            reject('Unable to find the address');
        }


        })
  });
}


googlecodeAddress('Delhi').then((result)=>{
console.log(JSON.stringify(result,undefined,2));
},(message) => {
  console.log(`Error : ${message}`);
})


var googlecodeAddress = (address ,callback) =>{

}

module.exports = {
  googlecodeAddress,
};
