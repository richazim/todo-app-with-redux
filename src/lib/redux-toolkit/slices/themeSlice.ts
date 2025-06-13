import { createSlice } from "@reduxjs/toolkit";

// 1. Déclaration du type
type ThemeMode = "light" | "dark";

// 3. Slice avec typage explicite du state
const themeSlice = createSlice({
  name: "theme",
  initialState: "dark" as ThemeMode,
  reducers: {
    toggleTheme(state) {
        return state === "dark" ? "light" : "dark"
    },
  },
});

// 4. Exports
export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

