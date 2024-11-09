/* eslint-disable */

const locationListDtoInType = shape({
    active: oneOf(["true", "false"]).isRequired(),
    pageInfo: shape({
        pageIndex: integer(),
        pageSize: integer()
    })
});