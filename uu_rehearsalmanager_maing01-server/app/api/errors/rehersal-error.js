"use strict";
const RehearsalmanagerMainUseCaseError = require("./rehearsalmanager-main-use-case-error.js");

const Create = {
  UC_CODE: `${RehearsalmanagerMainUseCaseError.ERROR_PREFIX}/rehersal/create`,

  invalidDtoIn: class extends RehearsalmanagerMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}/invalidDtoIn`;
      this.message = 'DtoIn is not valid.';
    }
  },
  RehersalDaoCreateFailed: class extends RehearsalmanagerMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}/rehersalDaoCreateFailed`;
      this.message = 'Creating rehersal failed';
    }
  }
}

const List = {
  UC_CODE: `${RehearsalmanagerMainUseCaseError.ERROR_PREFIX}/rehersal/list`,

  invalidDtoIn: class extends RehearsalmanagerMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}/invalidDtoIn`;
      this.message = 'DtoIn is not valid.';
    }
  },
  RehersalDaoListFailed: class extends RehearsalmanagerMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}/rehersalDaoListFailed`;
      this.message = 'Getting rehersal list failed';
    }
  }
}

const Update = {
  UC_CODE: `${RehearsalmanagerMainUseCaseError.ERROR_PREFIX}/rehersal/update`,

  invalidDtoIn: class extends RehearsalmanagerMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}/invalidDtoIn`;
      this.message = 'DtoIn is not valid.';
    }
  },
  RehersalDaoUpdateFailed: class extends RehearsalmanagerMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}/rehersalDaoUpdateFailed`;
      this.message = 'Updating rehersal failed';
    }
  }
}

module.exports = {
  Create,
  List,
  Update
}
