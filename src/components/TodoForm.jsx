import uuid from '../utils/uuid';
import { TodoContext } from '../context/todos.context';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const defaultTodo = { id: null, title: '', description: '' };

const TodoForm = ({ todo = defaultTodo, mode }) => {
  const navigate = useNavigate();

  const { title: Ttitle, description: Tdescription, id, date } = todo;

  const { updateTodo, addTodo } = useContext(TodoContext);

  const [title, setTitle] = useState(Ttitle || '');
  const [description, setDescription] = useState(Tdescription || '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === 'create') addTodo({ title, description });
    if (mode === 'update') updateTodo({ id: todo.id, title, description, date });

    setTitle('');
    setDescription('');
    navigate('/todos');
  };

  const uuid1 = uuid();
  const uuid2 = uuid();

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', minWidth: '30vw', gap: '20px' }}
    >
      <label htmlFor={uuid1} style={{ display: 'flex', justifyContent: 'space-between' }}>
        Title:
        <input
          style={{ width: '20vw' }}
          id={uuid1}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label
        htmlFor={uuid2}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: '75px',
        }}
      >
        Description:
        <textarea
          style={{ width: '19vw', resize: 'none', padding: '1vmin' }}
          id={uuid2}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">{mode === 'create' ? 'Add' : 'Edit'} Todo</button>
    </form>
  );
};

export default TodoForm;
