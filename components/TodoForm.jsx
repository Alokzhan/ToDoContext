import React, { useState } from 'react';
import { useTodo } from '../src/contexts';

function TodoForm() {
  const [todo, setTodo] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    addTodo({ todo, completed: false });
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task..."
        className="w-full text-black rounded-l-lg px-4 py-2 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg px-4 py-2"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;