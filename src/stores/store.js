//  Dependencies
// ===========================================================

import { combineReducers } from "redux"
import { configureStore } from '@reduxjs/toolkit'


//  Slices
// ===========================================================

import settingsReducer from './components/settingsSlice'


//  Store
// ===========================================================

export const store = configureStore({
  reducer: 
    combineReducers({
      settings: settingsReducer,
    })
})
