var exec = require("cordova/exec");

exports.isHmsAvailable = function (arg0, success, error) {
  exec(success, error, "CordovaServiceChecker", "isHmsAvailable", [arg0]);
};

exports.isGmsAvailable = function (arg0, success, error) {
  exec(success, error, "CordovaServiceChecker", "isGmsAvailable", [arg0]);
};
