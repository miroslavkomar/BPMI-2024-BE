/* eslint-disable */
"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class LocationMongo extends UuObjectDao {
    async createSchema() {
        await super.createIndex({ awid: 1, id: 1 }, { unique: true });
        await super.createIndex( { awid: 1, actId: 1});
    }

    async list(awid, active, pageInfo) {
        return super.find({awid: awid, active: active}, pageInfo, {"sys.cts": 1});
    }

    async create(location){
        return super.insertOne(location);
    }
}

module.exports = LocationMongo;