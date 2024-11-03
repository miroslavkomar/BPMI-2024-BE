"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class SceneMongo extends UuObjectDao {

  async create(scene){
    return super.insertOne(scene);
  }

  async getActSceneCount(actId) {
    return super.count({actId: actId})
  }

}

module.exports = SceneMongo;
