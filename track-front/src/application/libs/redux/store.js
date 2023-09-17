import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./time";

const store = configureStore({
    reducer: {
        timer : timerReducer,
    }
})


export default store