import { createSlice } from "@reduxjs/toolkit";

const filterMenuSlice = createSlice({
  name: "filteredMenu",
  initialState: [],
  reducers: {
    setFilter: {
      reducer(state, action) {
        return (action.payload);
      },
    },
  },
});

export const filterMenu = (state) => state.filteredMenu;
export const { setFilter } = filterMenuSlice.actions;
export default filterMenuSlice.reducer;
