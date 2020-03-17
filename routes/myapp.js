var express = require('express');
var router = express.Router();
var path = require("path")
var fs = require('fs')
var app = express()
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render("index", {
    title: "MyApp"
  })
});
router.get('/booklist', function (req, res, next) {
  fs.readFile('../myapp/public/data/booklist.json', function (error, data) {
    if (error) {
      console.log('ready file error')
    } else {
      res.json(JSON.parse(data.toString()))
    }
  })
})
// router.get('/booklist', function (req, res, next) {
  
// })
router.post('/addbook', (req, res) => {
  console.log(req.body)
  res.json(req.body)
  // fs.writeFile(filename,content,(err) => {
  //   if (err) {
  //     console.log('write file error')
  //     console.log(err)
  //   } else {
  //     console.log('success')
  //   }
  // })
})
router.post('/addsetting', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})
module.exports = router;