/**
 * Created by ZHANGXIAOQIAN162 on 2015/11/3.
 */
var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send('Hello World!');
});

app.listen(8000, function(){
    console.log('����������express�µģ��о�����')
});