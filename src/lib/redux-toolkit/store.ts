import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./slices/todoSlice";

const store = configureStore({
    reducer: {
        todos: todoReducer
    }
});

export default store;

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;