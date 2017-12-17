import { combineReducers } from 'redux';
import {usersReducer as userState} from './users-reducer'

const app = combineReducers({
  userState
})

export default app;
