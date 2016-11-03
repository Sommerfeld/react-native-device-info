/**
 * @providesModule react-native-device-info
 */

var RNDeviceInfo = require('react-native').NativeModules.RNDeviceInfo;

module.exports = {
  getUniqueID: function () {
    return RNDeviceInfo && RNDeviceInfo.uniqueId;
  },
  getInstanceID: function() {
    return RNDeviceInfo && RNDeviceInfo.instanceId;
  },
  getDeviceId: function () {
    return RNDeviceInfo && RNDeviceInfo.deviceId;
  },
  getManufacturer: function () {
    return RNDeviceInfo && RNDeviceInfo.systemManufacturer;
  },
  getModel: function () {
    return RNDeviceInfo && RNDeviceInfo.model;
  },
  getBrand: function () {
    return RNDeviceInfo && RNDeviceInfo.brand;
  },
  getSystemName: function () {
    return RNDeviceInfo && RNDeviceInfo.systemName;
  },
  getSystemVersion: function () {
    return RNDeviceInfo && RNDeviceInfo.systemVersion;
  },
  getBundleId: function() {
    return RNDeviceInfo && RNDeviceInfo.bundleId;
  },
  getBuildNumber: function() {
    return RNDeviceInfo && RNDeviceInfo.buildNumber;
  },
  getVersion: function() {
    return RNDeviceInfo && RNDeviceInfo.appVersion;
  },
  getReadableVersion: function() {
    return RNDeviceInfo && RNDeviceInfo.appVersion + "." + RNDeviceInfo.buildNumber;
  },
  getDeviceName: function() {
    return RNDeviceInfo && RNDeviceInfo.deviceName;
  },
  getUserAgent: function() {
    return RNDeviceInfo && RNDeviceInfo.userAgent;
  },
  getDeviceLocale: function() {
    return RNDeviceInfo && RNDeviceInfo.deviceLocale;
  },
  getDeviceCountry: function() {
    return RNDeviceInfo && RNDeviceInfo.deviceCountry;
  },
  getTimezone: function() {
    return RNDeviceInfo && RNDeviceInfo.timezone;
  },
  isEmulator: function() {
    return RNDeviceInfo && RNDeviceInfo.isEmulator;
  },
  isTablet: function() {
    return RNDeviceInfo && RNDeviceInfo.isTablet;
  },
};
