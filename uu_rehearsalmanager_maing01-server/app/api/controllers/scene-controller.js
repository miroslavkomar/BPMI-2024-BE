"use strict";
const SceneAbl = require("../../abl/scene-abl.js");

class SceneController {

  create(ucEnv) {
    return SceneAbl.create(ucEnv);
  }

  list(ucEnv) {
    return SceneAbl.list(ucEnv);
  }

}

module.exports = new SceneController();
