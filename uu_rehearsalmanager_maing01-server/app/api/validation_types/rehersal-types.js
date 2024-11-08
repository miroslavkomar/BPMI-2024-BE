/* eslint-disable */

const rehersalCreateDtoInType = shape({
  actId: string(1, 128).isRequired()
});

const rehersalListDtoInType = shape({
  actId: string(1, 128).isRequired(),
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer()
  })
});

const rehersalUpdateDtoInType = shape({
  id: id().isRequired(),
  name: string(1, 255),
  description: string(1, 4000),
  publicDescription: string(1, 4000),
  characterList: array(shape({
    name: string(1, 255),
    actorList: array(string(30), 0, 10)
  }), 0, 50)
});
