/* eslint-disable */
"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class LocationMongo extends UuObjectDao {
    async createSchema() {
        await super.createIndex({ awid: 1, id: 1 }, { unique: true });
        await super.createIndex( { awid: 1, actId: 1});
    }

    async list(awid, pageInfo) {
        return super.find({awid: awid}, pageInfo, {"sys.cts": 1});
    }
}

module.exports = LocationMongo;