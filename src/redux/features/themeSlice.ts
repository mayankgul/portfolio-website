import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state
interface ThemeState {
  mode: "light" | "dark"
}

const getDefaultTheme = () => {
  // if (typeof window !== "undefined" && window.matchMedia) {
  //   return window.matchMedia("(prefers-color-scheme: dark)").matches
  //       ? "dark"
  //       : "light";
  // }
  //
  // return "light";

  return "dark"
}

const initialState: ThemeState = {
  mode: getDefaultTheme()
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.mode = action.payload
    }
  },
});

// Export the action
export const { toggleTheme, setTheme } = themeSlice.actions;

// Export the reducer
export default themeSlice.reducer;
