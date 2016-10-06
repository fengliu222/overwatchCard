var express = require('express');
var app = express();
app.use(express.static('./'));

// 如果不希望使用 masterKey 权限，可以将下面一行删除

// 端口一定要从环境变量 `LC_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
var PORT = parseInt(process.env.LC_APP_PORT || 30);
app.listen(PORT, function() {
	console.log('Node app is running, port:', PORT);
});