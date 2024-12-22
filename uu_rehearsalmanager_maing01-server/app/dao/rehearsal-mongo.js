"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class RehearsalMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1, actId: 1 });
  }

  async create(rehearsal) {
    return super.insertOne(rehearsal);
  }

  async get(rehearsal) {
    const filter = {
      awid: rehearsal.awid,
      id: rehearsal.id,
    };

    return super.findOne(filter);
  }

  async list(awid, sceneIds, isOrganizer, dateFrom, dateTo, pageInfo) {
    const filter = {
      awid: awid,
      ...((dateFrom || dateTo) && {
        date: {
          ...(dateFrom && { $gte: dateFrom }),
          ...(dateTo && { $lte: dateTo }),
        },
      }),
    };
    if (isOrganizer) {
      filter.$or = [{valid: true}, {valid: false}];
    } else {
      if (sceneIds.length > 0) {
        filter.sceneList = { $in: sceneIds };
        }
      }
      filter.valid = true;
    return super.find(filter, pageInfo, { "sys.cts": 1 });
  }

  async update(rehearsal) {
    let filter = {
      awid: rehearsal.awid,
      id: rehearsal.id,
    };
    return await super.findOneAndUpdate(filter, rehearsal, "NONE");
  }

  async confirmPresence(rehearsal) {
    let filter = {
      awid: rehearsal.awid,
      id: rehearsal.id,
    };

    const userPresence = {
      uuIdentity: rehearsal.userId,
      confirmed: true,
    };

    return await super.findOneAndUpdate(filter, { $addToSet: { presenceList: userPresence } }, "NONE");
  }

  async reject(rehearsal) {
    let filter = {
      awid: rehearsal.awid,
      id: rehearsal.id,
    };

    let isConfirmed = await super.findOne({ ...filter, "presenceList.uuIdentity": rehearsal.userId });

    if (isConfirmed) {
      let update = {
        $set: {
          "presenceList.$.confirmed": false,
        },
      };
      console.log("isConfirmed");
      return await super.findOneAndUpdate({ ...filter, "presenceList.uuIdentity": rehearsal.userId }, update, "NONE");
    } else {
      let updateObj = {
        uuIdentity: rehearsal.userId,
        confirmed: false,
      };
      return await super.findOneAndUpdate(filter, { $addToSet: { presenceList: updateObj } }, "NONE");
    }
  }
}

module.exports = RehearsalMongo;
