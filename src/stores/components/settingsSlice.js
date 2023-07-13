//  Dependencies
// ===========================================================

import { createSlice } from '@reduxjs/toolkit'


//  Slice
// ===========================================================

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    user: window.localStorage.getItem("user") || null,
  },
  reducers: {
    updateUser(state, action) {
      state.user = action.payload;
      window.localStorage.setItem("user", action.payload);
    },
  }
})

// Export actions (creators are generated for each case reducer function)
export const { 
  updateUser,
} = settingsSlice.actions

// Export reducer
export default settingsSlice.reducer