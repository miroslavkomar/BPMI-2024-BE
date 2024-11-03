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
  }
};

class SceneAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("scene");
  }

  async create(ucEnv) {
    logger.debug("Validating input")
    let dtoIn = ucEnv.getDtoIn();
    let validationResult = this.validator.validate("sceneCreateDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.createUnsupportedKeys.code, Errors.Create.invalidDtoIn);

    dtoIn  = {...dtoIn, ...{
      awid: ucEnv.getUri().getAwid(),
      name: "",
      ordinalNumber: await this.dao.getActSceneCount(dtoIn.actId) + 1,
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

}

module.exports = new SceneAbl();
