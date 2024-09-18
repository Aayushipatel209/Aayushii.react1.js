import { combineReducers, legacy_createStore } from "redux";
import {reducer as counterreducer} from "../redux/counter/reducer"




const rootreducer=combineReducers({ counterreducer})
export const store = legacy_createStore(rootreducer)
