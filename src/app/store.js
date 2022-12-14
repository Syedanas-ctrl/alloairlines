import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from '../components/slices/AccountsSlice'
import mealsSelReducer from '../components/slices/mealsSelSlice'
import filterMenuReducer from '../components/slices/filterMenuSlice'
import popSliceReducer from "../components/slices/popSlice";
import menuReducer from "../components/slices/menuSlice"
import currUserReducer from "../components/slices/currUserSlice";

export const store = configureStore({
    reducer: {
        accounts: accountsReducer,
        mealsSelected: mealsSelReducer,
        filteredMenu: filterMenuReducer,
        popup: popSliceReducer,
        menu: menuReducer,
        currUser: currUserReducer
    }
})