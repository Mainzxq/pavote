/**
 * Created by ZHANGXIAOQIAN162 on 2015/11/3.
 */
var express = require('express');
var fortune = require('./lib/fortune.js');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
   res.send('Hello World!');
});


app.get('/about', function(req, res){
    res.render('about', {fortune: fortune.getfortune()
    })
});


app.listen(app.get('port'), function(){
    console.log('这是运行在express下的，感觉不错！运行端口：'+app.get('port'+';按CTRL+C退出。'))
});