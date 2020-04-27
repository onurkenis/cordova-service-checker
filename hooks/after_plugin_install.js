'use strict';

var FSUtils = require('./FSUtils');

var ROOT_GRADLE_FILE = 'platforms/android/build.gradle';
var COMMENT = '//This line is added by cordova-service-checker plugin'
var NEW_LINE = '\n';

module.exports = function (context) {

  if (!FSUtils.exists(ROOT_GRADLE_FILE)) {
    console.log('root gradle file does not exist. after_plugin_install script wont be executed.');
  }

  var rootGradleContent = FSUtils.readFile(ROOT_GRADLE_FILE, 'UTF-8');
  var lines = rootGradleContent.split(NEW_LINE);

  var repoAddedLines = addHuaweiRepo(lines);

  FSUtils.writeFile(ROOT_GRADLE_FILE, repoAddedLines.join(NEW_LINE));

}

function addHuaweiRepo(lines) {
  var HUAWEI_REPO = 'maven { url \'http://developer.huawei.com/repo/\' } ' + COMMENT
  var pattern = /(\s*)jcenter\(\)/m;

  var indexList = [];
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (pattern.test(line)) {
      indexList.push(i);
    }
  }

  for (var i = 0; i < indexList.length; i++) {
    lines.splice(indexList[i] + 1, 0, HUAWEI_REPO);
    if (i < indexList.length - 1) {
      indexList[i + 1] = indexList[i + 1] + 1;
    }
  }
  return lines;
}