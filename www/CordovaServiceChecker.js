var exec = require("cordova/exec");

exports.isHmsAvailable = async function () {
  let availability = false;

  await exec(
    function (rawResult) {
      availability = JSON.parse(rawResult).result;
    },
    isAvailableFail,
    "CordovaServiceChecker",
    "isHmsAvailable",
    []
  );

  return availability;
};

exports.isGmsAvailable = async function () {
  let availability = false;

  await exec(
    function (rawResult) {
      availability = JSON.parse(rawResult).result;
    },
    isAvailableFail,
    "CordovaServiceChecker",
    "isGmsAvailable",
    []
  );

  return availability;
};

function isAvailableFail() {
  console.log("Availability check: ", "failed");

  return false;
}
