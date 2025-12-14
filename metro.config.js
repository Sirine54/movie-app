const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);
config.maxWorkers = 2; // reduce CPU overload
config.resetCache = false;
module.exports = withNativeWind(config, { input: "./app/globals.css" });
