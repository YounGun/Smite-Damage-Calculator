
const Hirez = require('./node_modules/hirez.js/hirez');
let jsonData;

let hirez = new Hirez({
    devId: '2867',
    authKey: '638B819FB79F4761A9944E06F0B1DA14'
})

hirez.smite('pc').session.generate().then(() => {
  hirez.smite('pc').getGods().then((res) => {
    jsonData = JSON.stringify(res);
    var fs = require('fs');
    fs.writeFile("../smite-app/src/assets/godsData.json", jsonData, function(err) {
    if(err) {
        return console.log(err);
    }
}); 
  })
})