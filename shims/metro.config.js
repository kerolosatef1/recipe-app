const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

const emptyModule = path.resolve(__dirname, "empty-module.js");

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (
    moduleName === "expo-auth-session" ||
    moduleName.startsWith("expo-auth-session/")
  ) {
    return { filePath: emptyModule, type: "sourceFile" };
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;