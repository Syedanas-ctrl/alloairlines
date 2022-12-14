import { createSlice } from "@reduxjs/toolkit";

const mealsSelSlice = createSlice({
  name: "mealsSelected",
  initialState: [],
  reducers: {
    addMeal: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare: (
        id,
        seat_id,
        meal_id,
        meal_title,
        drink_id,
        drink_title,
        tot_price
      ) => {
        return {
          payload: {
            id: id,
            seat_id: seat_id,
            meal_id: meal_id,
            meal_title: meal_title,
            drink_id: drink_id,
            drink_title: drink_title,
            price: tot_price,
          },
        };
      },
    },
    deleteMeal: (state, action) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    orderMeal: (state, action) => {
      const id = action.payload;
      return state.filter((todo) => todo.seat_id !== id);
    }
  },
});

export const chosenMeals = (state) => state.mealsSelected;
export const { addMeal, deleteMeal, orderMeal } = mealsSelSlice.actions;
export default mealsSelSlice.reducer;
