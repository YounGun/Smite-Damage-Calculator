// https://www.npmjs.com/package/hirez.js
const Hirez = require('./node_modules/hirez.js/hirez');
let jsonGodsData;
let jsonItemsData;

let hirez = new Hirez({
    devId: '2867',
    authKey: '638B819FB79F4761A9944E06F0B1DA14'
})

hirez.smite('pc').session.generate().then(() => {
  hirez.smite('pc').getGods().then((res) => {
    jsonGodsData = JSON.stringify(res);
    var fs = require('fs');
    fs.writeFile("../smite-app/src/assets/godsData.json", jsonGodsData, function(err) {
    if(err) {
        return console.log(err);
    }
}); 
  })
  hirez.smite('pc').getItems().then((res) => {
    jsonItemsData = JSON.stringify(res);
    var fs = require('fs');
    fs.writeFile("../smite-app/src/assets/itemsData.json", jsonItemsData, function(err) {
    if(err) {
        return console.log(err);
    }
}); 
  })
})