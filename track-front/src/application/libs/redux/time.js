import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRunning: false,
  seconds: 0,
  minutes: 0,
  hours: 0,
};

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    
    incrementTimer: (state) => {
        
        state.seconds++;
        if (state.seconds >= 60) {
          state.seconds = 0;
          state.minutes++;
          if (state.minutes >= 60) {
            state.minutes = 0;
            state.hours++;
          }
        }
      },
    startTimer: (state, action) => {
      state.isRunning = true;
      state.seconds = action.payload.seconds;
      state.minutes = action.payload.minutes;
      state.hours = action.payload.hours;
    },
    stopTimer: (state) => {
      state.isRunning = false;
      state.seconds = 0;
      state.minutes = 0;
      state.hours = 0;
    },

    resetTimer: (state) => {
      state.isRunning = false;
    },
  },
});

export const { startTimer, stopTimer, resetTimer, incrementTimer } = timeSlice.actions;
export const selectTimer = (state) => {
    return state.timer
};
export default timeSlice.reducer;
