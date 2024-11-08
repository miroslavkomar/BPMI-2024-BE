"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class RehersalMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex( { awid: 1, actId: 1});
  }

  async create(rehersal){
    return super.insertOne(rehersal);
  }

  async list(awid, actId, pageInfo) {
    return super.find({awid: awid, actId: actId}, pageInfo, {"sys.cts": 1});
  }

  async update(rehersal) {
    let filter = {
      awid: rehersal.awid,
      id: rehersal.id,
    };
    return await super.findOneAndUpdate(filter, rehersal, "NONE");
  }

}

module.exports = RehersalMongo;
