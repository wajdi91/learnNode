var fs = require("fs");
var path = require("path");

module.exports = function(folder, ext, callback) {
  fs.readdir(folder, function(err, files) {
    if (err) return callback(err);
    callback(null, files.filter(e => path.extname(e) === "." + ext));
  });
};
