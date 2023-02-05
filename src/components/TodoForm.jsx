import React from 'react';

const TodoForm = ({ todo, onSubmit }) => {
  const { title: Ttitle, description: Tdescription, date: Tdate } = todo;

  const [title, setTitle] = useState(Ttitle || '');
  const [description, setDescription] = useState(Tdescription || '');
  const [date, setDate] = useState(Tdate || new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, date });
    setTitle('');
    setDescription('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
