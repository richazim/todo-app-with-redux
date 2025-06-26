import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoStateType } from "../../../types/todo";

const initialState: TodoStateType = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Ajoute un todo avec un texte (action.payload est string)
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },

    // Supprime un todo avec un id (action.payload est number)
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
