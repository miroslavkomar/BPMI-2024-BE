"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class SceneMongo extends UuObjectDao {
  async create(scene){
    return super.insertOne(scene);
  }

  async list(awid, actId, pageInfo) {
    return super.find({awid: awid, actId: actId}, pageInfo, {"sys.cts": 1});
  }

}

module.exports = SceneMongo;
