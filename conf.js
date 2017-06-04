var fs = require('fs'),
configPath = __dirname + '/.conf.json';
var opts = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));
exports.db=opts;