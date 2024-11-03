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

const List = {
  UC_CODE: `${RehearsalmanagerMainUseCaseError.ERROR_PREFIX}/scene/list`,

  invalidDtoIn: class extends RehearsalmanagerMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}/invalidDtoIn`;
      this.message = 'DtoIn is not valid.';
    }
  },
  SceneDaoListFailed: class extends RehearsalmanagerMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}/sceneDaoListFailed`;
      this.message = 'Getting scene list failed';
    }
  }
}

module.exports = {
  Create,
  List
}
