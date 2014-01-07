var beefy = require('beefy');

var entry_points = { 'js/trybbs.js': 'app/js/trybbs.js' };
var server = beefy('./app', 'browserify', [ '-d' ], entry_points, true, log);
server.listen(9966);

function log(code, time, bytesize, logged_pathname, color) {}
