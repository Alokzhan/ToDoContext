import React from 'react';
import { useTodo } from '../src/contexts/ToDoContext';
function TodoItem({ todo }) {
  const { toggleComplete, deleteTodo } = useTodo();

  return (
    <div className="flex items-center justify-between bg-gray-700 rounded-lg px-4 py-2 w-full">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="mr-2"
        />
        <span className={todo.completed ? 'line-through text-gray-400' : 'text-white'}>
          {todo.todo}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-3 py-1"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;