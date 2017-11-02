import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import  houseData from './houseData';
import  members from './members';
import  currentView from './currentView';

const rootReducer = combineReducers({
  fake,
  houseData,
  members,
  currentView
});


export default rootReducer;
