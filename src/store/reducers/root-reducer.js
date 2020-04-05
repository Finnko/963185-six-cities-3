import {combineReducers} from 'redux';
import dataReducer from './data/data-reducer';
import userReducer from './user/user-reducer';
import appReducer from './app/app-reducer';
import NameSpace from '../name-space';

const rootReducer = combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.USER]: userReducer,
  [NameSpace.APP]: appReducer,
});

export default rootReducer;
