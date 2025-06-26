// hooks/useTodos.ts
import { useState } from "react";

import { addTodo, deleteTodo } from "../lib/redux-toolkit/slices/todoSlice";
import useAppSelector from "./useAppSelector";
import useAppDispatch from "./useAppDispatch";

export function useTodos() {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return {
    todos,
    text,
    setText,
    handleAddTodo,
    handleDelete,
  };
}
