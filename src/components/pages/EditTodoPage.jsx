import TodoForm from '../TodoForm';
import React from 'react';
import { useLocation } from 'react-router-dom';

function EditTodoPage() {
  const location = useLocation();
  const todo = location?.state?.todo;
  console.log('🚀 ~ file: EditTodoPage.jsx:8 ~ EditTodoPage ~ todo', todo);
  if (!todo?.title) {
    return <div>Oops...something broke :s</div>;
  }

  return <TodoForm todo={todo} mode="create" />;
}

export default EditTodoPage;
