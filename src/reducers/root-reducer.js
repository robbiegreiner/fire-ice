import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import  houseData from './houseData';
import  members from './members';

const rootReducer = combineReducers({
  fake,
  houseData,
  members
});


export default rootReducer;
