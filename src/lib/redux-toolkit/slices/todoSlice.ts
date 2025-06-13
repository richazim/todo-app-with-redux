import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoState } from "../../../types/todo";

const initialState: TodoState = [];

// 4. Création du slice Redux
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

// 5. Export des actions
export const { addTodo, deleteTodo } = todoSlice.actions;

// 6. Export du reducer
export const todoReducer = todoSlice.reducer;
