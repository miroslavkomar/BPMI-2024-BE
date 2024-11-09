/* eslint-disable */
"use strict";
const LocationAbl = require("../../abl/location-abl.js");

class LocationController {

  list(ucEnv) {
    return LocationAbl.list(ucEnv);
  }

}

module.exports = new LocationController();