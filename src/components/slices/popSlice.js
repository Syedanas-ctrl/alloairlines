import { createSlice } from "@reduxjs/toolkit";

const popSlice = createSlice({
  name: "popup",
  initialState: {
    filterPop: false,
    addPassengerPop: false,
    selectSeatPop: false
  },
  reducers: {
    changeFilterPop: (state, action) => {
        state.filterPop = action.payload
    },
    changeAddPassengerPop: (state, action) =>{
        state.addPassengerPop = action.payload
    },
    changeSelectSeatPop: (state, action) =>{
        state.selectSeatPop = action.payload
    },
  },
});

export const pop = (state) => state.popup;
export const { changeFilterPop, changeSelectSeatPop, changeAddPassengerPop } = popSlice.actions;
export default popSlice.reducer;