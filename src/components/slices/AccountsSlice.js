import { createSlice } from "@reduxjs/toolkit";

const accountsSlice = createSlice({
    name: "accounts",
    initialState: [],
    reducers: {
      addAccount : {
        reducer(state, action) {
          state.push(action.payload);
        },
        prepare: (seat_no) => {
          return { payload: seat_no };
        },
      },
    },
});

export const selectAllAccounts = (state) => state.accounts;
export const { addAccount } = accountsSlice.actions;
export default accountsSlice.reducer