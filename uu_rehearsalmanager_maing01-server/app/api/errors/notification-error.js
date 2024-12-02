/* eslint-disable */
"use strict";
const RehearsalmanagerNotificationUseCaseError = require("./rehearsalmanager-notification-use-case-error.js");

const List = {
    UC_CODE: `${RehearsalmanagerNotificationUseCaseError.ERROR_PREFIX}list`,
    invalidDtoIn: class extends RehearsalmanagerNotificationUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${List.UC_CODE}/invalidDtoIn`;
            this.message = "DtoIn is not valid.";
        }
    },
    NotificationDaoListFailed: class extends RehearsalmanagerNotificationUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${List.UC_CODE}/notificationDaoListFailed`;
            this.message = "Getting notification list failed.";
        }
    }
}

const Create = {
    UC_CODE: `${RehearsalmanagerNotificationUseCaseError.ERROR_PREFIX}create`,
    invalidDtoIn: class extends RehearsalmanagerNotificationUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Create.UC_CODE}/invalidDtoIn`;
            this.message = "DtoIn is not valid.";
        }
    },
    NotificationDaoCreateFailed: class extends RehearsalmanagerNotificationUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Create.UC_CODE}/notificationDaoCreateFailed`;
            this.message = "Creating notification failed.";
        }
    }
}

module.exports = {
    List,
    Create
}