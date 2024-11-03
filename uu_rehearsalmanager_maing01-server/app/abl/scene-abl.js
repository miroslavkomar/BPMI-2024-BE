"use strict";
const {DaoFactory, ObjectStoreError} = require("uu_appg01_server").ObjectStore;
const { LoggerFactory } = require("uu_appg01_server").Logging;
const {Validator} = require("uu_appg01_server").Validation;
const {ValidationHelper} = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/scene-error.js");
const logger = LoggerFactory.get("SceneAbl");

const WARNINGS = {
  createUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}/unsupportedKeys`
  },
  listUnsupportedKeys: {
    code: `${Errors.List.UC_CODE}/unsupportedKeys`
  }
};

class SceneAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("scene");
  }

  async create(ucEnv) {
    logger.debug("Validating CreateScene input")
    let dtoIn = ucEnv.getDtoIn();
    let validationResult = this.validator.validate("sceneCreateDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.createUnsupportedKeys.code, Errors.Create.invalidDtoIn);

    dtoIn  = {...dtoIn, ...{
      awid: ucEnv.getUri().getAwid(),
      name: "",
      description: "",
      publicDescription: "",
      directorId: ucEnv.getSession().getIdentity().getUuIdentity(),
      characterList: []
    }}

    let dtoOut;
    try {
      logger.debug("Going to create scene");
      dtoOut = await this.dao.create(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Create.SceneDaoCreateFailed({uuAppErrorMap}, e)
      }
      throw e;
    }
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async list(ucEnv) {
    logger.debug("Validating SceneList input");
    let dtoIn = ucEnv.getDtoIn();
    let validationResult = this.validator.validate("sceneListDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.listUnsupportedKeys.code, Errors.List.invalidDtoIn);

    let dtoOut;
    try {
      logger.debug("Going to get scene list");
      dtoOut = await this.dao.list(ucEnv.getUri().getAwid(), dtoIn.actId, dtoIn.pageInfo);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.List.SceneDaoListFailed({uuAppErrorMap}, e)
      }
      throw e;
    }
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

}

module.exports = new SceneAbl();
