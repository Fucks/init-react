import * as Constants from 'actions/Constants';

const defaultState = {
  data: [],
  team: {},
  page: {
    query: '',
    limit: 10,
    page: 1
  }
}

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {

    case Constants.DATA_FETCHING:
      return Object.assign({}, state, {
        page: action.payload.page
      })
    break;

    case Constants.FETCH_USERS:
      return Object.assign({}, state, {
        data: action.payload.data,
        page: action.payload.page
      })
    break;

    default:
      return state;

  }
}
