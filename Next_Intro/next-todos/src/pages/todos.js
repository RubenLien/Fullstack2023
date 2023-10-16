import { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch("/api/todos");
      const data = await response.json();
      setTodos(data);
    }

    fetchTodos();
  }, []);

  const addTodo = async () => {
    const newId = Date.now();
    const response = await fetch("/api/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: newId, task })
    });
    const newTodo = await response.json();
    setTodos([...todos, newTodo]);
    setTask("");
  };

  const deleteTodo = async (id) => {
    const response = await fetch("/api/todos", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    });

    if (response.ok) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
      <h1 className="text-4xl mb-4 font-semibold text-gray-700">Todos</h1>
      <ul className="w-full max-w-md mb-4">
        {todos.map((todo) => (
          <li key={todo.id} className="border-b border-gray-300 py-2 px-4 bg-white hover:bg-gray-100 transition ease-in-out duration-150 flex justify-between">
            {todo.task}
            <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-200 transition ease-in-out duration-150">
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
      <input 
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="p-2 border rounded-md w-full max-w-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-200 transition ease-in-out duration-150"
      />
      <button 
        onClick={addTodo}
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition ease-in-out duration-150"
      >
        Add
      </button>
    </div>
  );

}
