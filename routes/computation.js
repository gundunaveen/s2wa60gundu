var express = require('express');
var router = express.Router();

var storeValue;

/* GET home page. */
router.get('/', function(req, res, next) {
    
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams

    
      storeValue=Number(search_params.get("x"))
    // if paramter is not specified  value of Number(search_params.get("x")) is always zero
    //console.log(Number(search_params.get("x"))+"hello")
    if(storeValue == 0)

    storeValue=Math.random()

    res.write('Math.log() applied to '+storeValue+" is "+Math.log(storeValue)+"\n");
    res.end('Math.log10() applied to '+storeValue+" is "+Math.log10(storeValue));
 });


module.exports = router;