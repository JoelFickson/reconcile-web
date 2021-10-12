import {combineReducers} from '@reduxjs/toolkit'
import ReconciliationReducer from "../reducers/RecinciliationReducer";

const rootReducer = combineReducers({ReconciliationReducer})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
