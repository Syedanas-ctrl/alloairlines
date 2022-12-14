import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: [],
  reducers: {
    setMenu: {
      reducer(state, action) {
        return action.payload;
      },
    },
  },
});

export const selectWholeMenu = (state) => state.menu;
export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;
