/**
 * Created by ZHANGXIAOQIAN162 on 2015/11/3.
 */
var express = require('express');
var fortune = require('./lib/fortune.js');
var app = express();
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});


app.set('port', process.env.PORT || 3000);
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
   res.send('Hello World!');
});


app.get('/about', function(req, res){
    res.render('main', {fortune: fortune.getfortune()})
});


app.listen(app.get('port'), function(){
    console.log('����������express�µģ��о��������ж˿ڣ�'+app.get('port')+';��CTRL+C�˳���')
});