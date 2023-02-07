import React from 'react';
import TodoList from '../TodoList ';
import { useNavigate } from 'react-router-dom';
function TodosPage() {
  const navigate = useNavigate();
  return (
    <>
      <TodoList />
      <button onClick={() => navigate('/add-todo')}>Add a todo</button>
    </>
  );
}

export default TodosPage;
