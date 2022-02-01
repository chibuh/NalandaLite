import tryLogin from "./tryLogin";
import { combineReducers } from "redux";

const reducers = combineReducers({
    login : tryLogin
})

export default reducers;