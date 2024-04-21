import React, { useState } from 'react';
import TodoList from './todoList';

function Main() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'wake up at 7 ',  dueDate: '4/21/2024' },
    { id: 2, text: 'go to ITI', dueDate: '4/21/2024' },
  ]);

  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    {
      const newTodo = {
        id: todos.length + 1,
        text: newTodoText,
        dueDate: new Date().toLocaleDateString(),
      };
      setTodos(todos.concat(newTodo));
      setNewTodoText('');
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className='my-5 mx-5'>
      <h1 className="h1 text-center mt-3 mb-4 pb-3 text-primary">Todo App</h1>
      <div className="ms-5 mb-5 d-flex">
        <input
          type="text"
          className="form-control "
          placeholder="Add new todo..."
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        
        <button
          className="btn btn-primary ms-5 "
          type="button"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default Main;
