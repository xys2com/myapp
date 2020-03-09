var express = require('express');
var router = express.Router();
var path = require("path")
var media = path.join(__dirname, "../public/media")


/* GET home page. */
router.get('/', function (req, res, next) {
    var fs = require("fs")
    fs.readdir(media, (err, names) => {
        if (err) {
            console.log(err)
        } else {
            res.render("index", {
                title: "Music",
                musics: names
            })
        }
    })
});

router.get('/moon', function (req, res, next) {
    var fs = require("fs")
    fs.readdir(media, (err, names) => {
        if (err) {
            console.log(err)
        } else {
            res.render("moon", {
                title: "LakeMoon",
                musics: returnName(names)
            })
        }
    })
});

function returnName(arr){
    let newArr=[]
    for(let i in arr){
        newArr.push({
            name:arr[i].split(".")[0],
            type:arr[i].split(".")[1]
        })
        
    }
    return newArr
}
module.exports = router;