import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// reducersの返り値の型を流用する書き方
export type RootState = ReturnType<typeof reducers>;
