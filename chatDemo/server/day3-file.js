/**
 * Created by Echo on 2015/11/23.
 */
var fs = require("fs");

var data = fs.readFileSync('chatDemo/chat.html');

console.log(data.toString());
console.log("����ִ�н���!");

var data2 = fs.readFile('chatDemo/chat.html', function(err, data){
    if(!err) console.log(data.toString());
});


console.log("����ִ�н����ڶ����첽�ص�!");