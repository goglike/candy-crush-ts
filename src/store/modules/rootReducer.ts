import {combineReducers} from "redux";
import authSlice from "./auth/authSlice.js";
import {catalogReducer} from "./catalog/catalogReducer.ts";

const rootReducer = combineReducers({
    auth: authSlice,
    catalog: catalogReducer,

})
export default rootReducer