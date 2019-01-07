cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com-socketmobile-scanapi-cordova/www/ScanApiCordova.js",
        "id": "com-socketmobile-scanapi-cordova.ScanApiCordova",
        "pluginId": "com-socketmobile-scanapi-cordova",
        "clobbers": [
            "SocketScanApi"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com-socketmobile-scanapi-cordova": "0.1.0",
    "cordova-plugin-whitelist": "1.3.3"
}
// BOTTOM OF METADATA
});