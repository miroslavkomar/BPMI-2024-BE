/* eslint-disable */

const sceneCreateDtoInType = shape({
  actId: string(1, 128).isRequired()
});

const sceneListDtoInType = shape({
  actId: string(1, 128).isRequired(),
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer()
  })
});
