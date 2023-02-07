import TodoForm from '../TodoForm';
import React from 'react'
import { useLocation } from 'react-router-dom';

function AddTodoPage() {

  return <TodoForm mode="create" />;
}

export default AddTodoPage