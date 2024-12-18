/* eslint-disable */

const rehearsalCreateDtoInType = shape({
  locationId: string(1, 128).isRequired(),
  date: datetime(),
  actId: string(1, 128),
  presenceList: array(shape({ uuIdentity: uuIdentity(), confirmed: boolean() }), 0, 10)
});

const rehearsalListDtoInType = shape({
  pageInfo: shape({
    pageIndex: integer(),
    pageSize: integer()
  })
});

const rehearsalUpdateDtoInType = shape({
  id: id().isRequired(),
  locationId: string(1, 128),
  date: datetime(),
  valid: boolean(),
  sceneList: array(string(1, 128)),
  presenceList: array(shape({ uuIdentity: uuIdentity(), confirmed: boolean() }), 0, 10),
});

const rehearsalMemberListDtoInType = shape({
  id: id().isRequired()
});

const rehearsalConfirmpresenceDtoInType = shape({
  id: id().isRequired()
})

const rehearsalRejectDtoInType = shape({
  id: id().isRequired()
})