const fs = require('fs');
fs.readFile('../files/1.txt', 'UTF-8', function(err, dataStr) {
    if (err) {
        return console.log("读取文件失败！" + err.message);
    }
    console.log('读取文件成功' + dataStr);

})
fs.writeFile('../files/2.txt', 'abcd', 'UTF-8', function(err) {
    if (err) {
        return console.log('文件写入失败！' + err.message)
    }
    console.log('文件写入成功！');
})