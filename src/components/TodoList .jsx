import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import formatDate from '../utils/formatDate';
import { deleteTodo } from '../store/slices/todos.slice';
const TodoList = () => {
  const [toggleReadMore, setToggleReadMore] = useState(false);

  const todos = useSelector((state) => state.todos.todos);
  console.log('🚀 ~ file: TodoList .jsx:6 ~ TodoList ~ todos', todos);
  const dispatch = useDispatch();
  // const todoSlice = state.actions.deleteTodo

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            display: 'flex',
            gap: '10px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            backgroundColor: '#ae6d6d',
            padding: '1vmin',
            marginBottom: '10px',
            borderRadius: '5px',
            width: '25vw',
          }}
        >
          <h3>{todo.title}</h3>
          <h3>Description</h3>
          <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            "{todo.description.slice(0, toggleReadMore ? todo.description.length + 1 : 50)}"
            <span
              style={{ cursor: 'pointer', fontStyle: 'italic' }}
              onClick={() => setToggleReadMore((s) => !s)}
            >
              read more
            </span>
          </p>

          <div
            style={{
              borderTop: '2px solid #fff',
              paddingTop: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            {formatDate(todo.date)}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
