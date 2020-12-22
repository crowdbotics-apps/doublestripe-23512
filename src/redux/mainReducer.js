import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard12187543Reducer from '../features/Dashboard12187543/redux/reducers'
import SignUp23187542Reducer from '../features/SignUp23187542/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard12187543: Dashboard12187543Reducer,
SignUp23187542: SignUp23187542Reducer,

});