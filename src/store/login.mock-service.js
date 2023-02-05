const users = [
  { name: 'John', email: 'Jhon@site.com', password: '12345' },
  { name: 'Bob', email: 'Bob@site.com', password: '12345' },
];

const logUserIn = (email, password) =>
  new Promise((resolve, reject) => {
    if (!email || !password) {
      reject(new Error('invalid credentials'));
    }
    const user = users.find((user) => user.email === email);
    if (!user?.email) {
      reject(new Error('invalid credentials'));
    }

    const returnUser = JSON.parse(JSON.stringify(user));
    delete returnUser.password;
    return returnUser;
  });

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await logUserIn(email, password);
    dispatch({ type: 'SET_USER', payload: res.data });
  } catch (err) {
    console.error(err);
  }
};
