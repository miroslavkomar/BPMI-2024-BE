"use strict";
const RehersalAbl = require("../../abl/rehersal-abl.js");

class RehersalController {

  create(ucEnv) {
    return RehersalAbl.create(ucEnv);
  }

  list(ucEnv) {
    return RehersalAbl.list(ucEnv);
  }

  update(ucEnv) {
    return RehersalAbl.update(ucEnv);
  }

}

module.exports = new RehersalController();
