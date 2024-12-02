/* eslint-disable */

const NotificationAbl = require("../../abl/notification-abl.js");

class NotificationController {

    list(ucEnv) {
        return NotificationAbl.list(ucEnv);
    }

    create(ucEnv) {
        return NotificationAbl.create(ucEnv);
    }

}

module.exports = new NotificationController();