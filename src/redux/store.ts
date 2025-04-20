import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "./features/screenSlice";
import themeReducer from "./features/themeSlice"

export const store = configureStore({
  reducer: {
    screen: screenReducer,
    theme: themeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
