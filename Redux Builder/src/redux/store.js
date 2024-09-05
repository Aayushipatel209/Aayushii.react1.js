import {reducer as Counterreducer} from "./counter/reducer";





const rootreducer=combineReducers({Counterreducer})
export const store = legacy_createStore(rootreducer);
