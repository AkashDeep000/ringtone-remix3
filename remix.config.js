/**
* @type {import('@remix-run/dev').AppConfig}
*/
module.exports = {

  serverBuildTarget: "cloudflare-pages",
  server: "./server.js",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: [".*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "functions/[[path]].js",
  publicPath: "ringtone.s3.eu-central-003.backblazeb2.com/build/",
};