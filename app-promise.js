const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
.options({
  a: {
    demand:true,
    alias:'address',
    describe:'Address of the place for weather',
    string:true,
  }
})
.help()
.alias('help','h')
.argv

  var encodedAddress = encodeURIComponent(argv.address)
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}%key=AIzaSyBs6VkyURI6n5RRra8a929r_WH--KWD6qw`


axios.get(geocodeUrl).then((response)=>{
  if(response.data.status === 'ZERO_RESULTS'){
    throw new Error('Unable to find the address')
  }

var lat = response.data.results[0].geometry.location.lat;
var lng = response.data.results[0].geometry.location.lng;

var weatherUrl = `https://api.darksky.net/forecast/961e350b8068aff82013001bdc0cbf61/${lat},${lng}`

  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response)=>{
console.log(`Temperature : ${response.data.currently.temperature}`);
console.log(`apparentTemperature : ${response.data.currently.apparentTemperature}`);
})
.catch((err) => {
  if(err.code === 'ENOTFOUND'){
  console.log(`Unable to connect to APIs Servers`);
}else {
console.log(err.message);
}

})
