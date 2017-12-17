import * as TeamActions from 'actions/team-actions';

export const getUsers = (page) =>{
  dispatch(TeamActions.fetchUsers(page))
}
