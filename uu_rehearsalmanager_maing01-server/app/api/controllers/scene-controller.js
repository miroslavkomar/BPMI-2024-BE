"use strict";
const SceneAbl = require("../../abl/scene-abl.js");

class SceneController {

  create(ucEnv) {
    return SceneAbl.create(ucEnv);
  }

}

module.exports = new SceneController();
