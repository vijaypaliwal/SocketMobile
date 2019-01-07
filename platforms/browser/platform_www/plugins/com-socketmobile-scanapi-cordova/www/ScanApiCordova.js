cordova.define("com-socketmobile-scanapi-cordova.ScanApiCordova", function(require, exports, module) { var exec = require('cordova/exec');

exports.useScanApi = function (arg0, success, error) {
    exec(success, error, 'ScanApiCordova', 'useScanApi', [arg0]);
};

});
