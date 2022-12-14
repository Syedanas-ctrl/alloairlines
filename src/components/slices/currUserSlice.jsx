import { createSlice } from "@reduxjs/toolkit";

const currUserSlice = createSlice({
    name: "currUser",
    initialState: 0,
    reducers: {
      setCurrUser : {
        reducer(state, action) {
          return (action.payload);
        },
      },
    },
});

export const selectCurrUser = (state) => state.currUser;
export const { setCurrUser } = currUserSlice.actions;
export default currUserSlice.reducer
