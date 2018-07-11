var request = require('request');

var googlecodeAddress = (address ,callback) =>{

  var encodedAddress = encodeURIComponent(address)

  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}%key=AIzaSyBs6VkyURI6n5RRra8a929r_WH--KWD6qw`,
    json:true,
  },function(error,response,body){
    // console.log(error);
    // console.log(response);
    // console.log(JSON.stringify(body,undefined,2));
    if (error) {
      callback('Unable to connect to google server')
    }
    else if(body.status === 'ZERO_RESULTS'){
      callback('Unable to find the address');
    }
      else if(body.status === 'OK'){
        callback(undefined,{
          address:body.results[0].formatted_address,
          latitude:body.results[0].geometry.location.lat,
          longitude:body.results[0].geometry.location.lng,
        })

      }
    })


}

module.exports = {
  googlecodeAddress,
};
