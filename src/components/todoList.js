import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function TodoList({ todos, onDeleteTodo }) {
  return (
    <>
      {todos.map(todo => (
        <div key={todo.id} className='d-flex justify-content-between ' >
           < div className='d-flex'>
         <input type='checkbox' className='form-check-input me-0 me-2'></input> <p>{todo.text}</p>
         </div>
         <div>
          <span>{todo.dueDate}</span>
          <a  className="text-danger ms-3 " data-mdb-tooltip-init title="Delete todo" onClick={() => onDeleteTodo(todo.id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoList;
