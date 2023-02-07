import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../context/user.context';
import { useNavigate } from 'react-router-dom';

import uuid from '../../utils/uuid';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, logUser } = useContext(UserContext);
  const { name: uName, email: uEmail } = user;
  const navigate = useNavigate();

  useEffect(() => {
    if (uName.length) navigate('/todos');
  }, [uName, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email?.length || !password?.length) {
      throw new Error('Invalid Credentials');
    }
    logUser({ email, password });
  };

  const uuid1 = uuid();
  const uuid2 = uuid();

  return (
    <div className="login" style={{ width: '40vw' }}>
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', minWidth: '30vw', gap: '20px' }}
      >
        <label htmlFor={uuid1} style={{ display: 'flex', justifyContent: 'space-between' }}>
          Email:
          <input
            id={uuid1}
            type="text"
            // placeholder="Email"
            placeholder="jhon@site.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor={uuid2} style={{ display: 'flex', justifyContent: 'space-between' }}>
          Password:
          <input
            id={uuid2}
            type="password"
            placeholder="12345"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
      {uName && <div>Hello: {uName}</div>}
    </div>
  );
}

export default LoginPage;
