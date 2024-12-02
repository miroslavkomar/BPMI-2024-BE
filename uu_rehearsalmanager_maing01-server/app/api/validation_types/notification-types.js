/* eslint-disable */

const notificationListDtoInType = shape({
    userId: uuIdentity().isRequired(),
    seen: boolean(),
    pageInfo: shape({
        pageIndex: integer(),
        pageSize: integer()
    })
});

const notificationCreateDtoInType = shape({
    text: string(4000).isRequired(),
    userId: uuIdentity().isRequired()
});
