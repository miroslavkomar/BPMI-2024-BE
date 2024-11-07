"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class SceneMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1, id: 1 }, { unique: true });
    await super.createIndex( { awid: 1, actId: 1});
  }

  async create(scene){
    return super.insertOne(scene);
  }

  async list(awid, actId, pageInfo) {
    return super.find({awid: awid, actId: actId}, pageInfo, {"sys.cts": 1});
  }

  async update(scene) {
    let filter = {
      awid: scene.awid,
      id: scene.id,
    };
    return await super.findOneAndUpdate(filter, scene, "NONE");
  }

}

module.exports = SceneMongo;
