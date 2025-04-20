import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state
interface ScreenState {
  isMobile: boolean;
  isTablet: boolean;
}

const initialState: ScreenState = {
  isMobile: window.matchMedia("(max-width: 768px)").matches,
  isTablet: window.matchMedia("(min-width: 769px) and (max-width: 1024px)")
    .matches,
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    updateScreenSize: (
      state,
      action: PayloadAction<{ isMobile: boolean; isTablet: boolean }>
    ) => {
      state.isMobile = action.payload.isMobile;
      state.isTablet = action.payload.isTablet;
    },
  },
});

// Export the action
export const { updateScreenSize } = screenSlice.actions;

// Export the reducer
export default screenSlice.reducer;
