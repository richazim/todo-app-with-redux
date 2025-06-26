import { useTodos } from "./hooks/useTodos";

const App = () => {
  const { todos, text, setText, handleAddTodo, handleDelete } = useTodos();

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
