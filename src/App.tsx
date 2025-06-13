import { useState } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./lib/redux-toolkit/store"; // à créer si ce n’est pas encore fait
import { addTodo, deleteTodo } from "./lib/redux-toolkit/slices/todoSlice";

// 1. Hook typé pour Redux
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const App = () => {
  // 2. State local pour l'input texte
  const [text, setText] = useState("");

  // 3. Dispatch typé
  const dispatch = useAppDispatch();

  // 4. Sélectionne les todos du store
  const todos = useAppSelector((state) => state.todos);

  // 5. Ajout d'un todo
  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText(""); // reset après ajout
    }
  };

  // 6. Suppression d'un todo
  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  // 7. Affichage du composant
  return (
    <div className="flex flex-col gap-2 p-4">
      <h1 className="text-xl font-bold">Todo</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded"
        placeholder="Ajouter une tâche..."
      />

      <button
        onClick={handleAddTodo}
        className="border bg-black text-white p-2 rounded-xl"
      >
        Add Todo
      </button>

      <ul className="space-y-2 mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center">
            <span>{todo.text}</span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="border bg-red-600 text-white p-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
