console.log(__dirname)
var fs = require('fs');
fs.readFile('../files/成绩.txt', 'UTF-8', function(err, dataStr) {
    if (err) {
        return console.log('成绩读取失败！' + err.message);
    }
    var arr = dataStr.split(' ');
    arr.filter(function(item, i) {
        arr[i] = item.replace('=', ':') + '\r\n';
    })
    console.log(arr);
    fs.writeFile('../files/成绩-ok.txt', arr.join(''), 'UTF-8', function(err) {
        if (err) {
            console.log('成绩写入失败!' + err.message)
        }
        console.log('成绩写入成功');
    })
})