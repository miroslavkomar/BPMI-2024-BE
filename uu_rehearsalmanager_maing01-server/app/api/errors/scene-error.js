"use strict";
const RehearsalmanagerMainUseCaseError = require("./rehearsalmanager-main-use-case-error.js");

const Create = {
  UC_CODE: `${RehearsalmanagerMainUseCaseError.ERROR_PREFIX}/scene/create`,

  invalidDtoIn: class extends RehearsalmanagerMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}/invalidDtoIn`;
      this.message = 'DtoIn is not valid.';
    }
  },
  SceneDaoCreateFailed: class extends RehearsalmanagerMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}/sceneDaoCreateFailed`;
      this.message = 'Creating scene failed';
    }

  }
}

module.exports = {
  Create
}
