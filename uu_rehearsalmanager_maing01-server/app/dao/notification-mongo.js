"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;
const { ObjectId } = require("mongodb");

class NotificationMongo extends UuObjectDao {

  async createSchema() {
    await super.createIndex({ awid: 1, actId: 1 });
  }

  async list(awid, dtoIn) {
    const { pageInfo, seen, userId } = dtoIn;
    return super.find({ awid: awid, seen: seen, userId: userId }, pageInfo, { "sys.cts": 1 });
  }

  async create(notification) {
    return super.insertOne(notification);
  }
}

module.exports = NotificationMongo;