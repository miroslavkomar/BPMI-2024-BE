/* eslint-disable */
"use strict";
const {DaoFactory, ObjectStoreError} = require("uu_appg01_server").ObjectStore;
const { LoggerFactory } = require("uu_appg01_server").Logging;
const {Validator} = require("uu_appg01_server").Validation;
const {ValidationHelper} = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/location-error.js");
const logger = LoggerFactory.get("LocationAbl");

const WARNINGS = {
    listUnsupportedKeys: {
        code: `${Errors.List.UC_CODE}/unsupportedKeys`
    }
}

class LocationAbl {

    constructor() {
        this.validator = Validator.load();
        this.dao = DaoFactory.getDao("location");
    }

    async list(ucEnv) {
        logger.debug("Validating LocationList input");
        let dtoIn = ucEnv.getDtoIn();
        let validationResult = this.validator.validate("locationListDtoInType", dtoIn);
        let uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.listUnsupportedKeys.code, Errors.List.invalidDtoIn);

        let dtoOut;
        try {
            logger.debug("Going to get location list");
            dtoOut = await this.dao.list(ucEnv.getUri().getAwid(), dtoIn.pageInfo);
        } catch (e) {
            if (e instanceof ObjectStoreError) {
                throw new Errors.List.LocationDaoListFailed({uuAppErrorMap}, e);
            }
            throw e;
        }
        dtoOut.uuAppErrorMap = uuAppErrorMap;
        return dtoOut;
    }
}

module.exports = new LocationAbl();