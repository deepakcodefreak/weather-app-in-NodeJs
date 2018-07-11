// const request = require('request');
const yargs = require('yargs');
const googlecode = require('./googlecode/googlecode.js')
const weather = require('./weather/weather.js')
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
// console.log(argv.address);

googlecode.googlecodeAddress(argv.address , (errorMessage,result) => {
  if(errorMessage){
    console.log(errorMessage);
  }else{

    weather.getweather( result.latitude , result.longitude , (errorMessage,Weatherresult)=>{
    if(errorMessage){
      console.log(errorMessage);
    } else {
      console.log(result.address);
      console.log(JSON.stringify(Weatherresult,undefined,2));
        }
      });

  }
})


// 961e350b8068aff82013001bdc0cbf61
