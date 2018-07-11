const request = require('request');

const getweather = (lat,lng,callback) => {

  request({
    url:`https://api.darksky.net/forecast/961e350b8068aff82013001bdc0cbf61/${lat},${lng}`,
    json:true,
  },function(error,response,body){

    if(!error && response.statusCode === 200){
      callback(undefined , { Temperature : body.currently.temperature,
                              apparentTemperature:body.currently.apparentTemperature, })
    }else {
      callback('Unable to Connect to Server')
    }

  })
}


module.exports.getweather = getweather;
