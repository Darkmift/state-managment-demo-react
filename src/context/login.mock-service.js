const users = [
  { name: 'John', email: 'jhon@site.com', password: '12345' },
  { name: 'Bob', email: 'bob@site.com', password: '12345' },
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
    resolve(returnUser);
  });

const loginMockService = async ({ email, password }) => {
  try {
    const res = await logUserIn(email, password);
    return res;
  } catch (error) {
    console.log('🚀 ~ file: login.mock-service.js:28 ~ loginMockService ~ error', error);
    return null;
  }
};

// const loginMockService = (email, password) => async (dispatch) => {
//   try {
//     const res = await logUserIn(email, password);
//     dispatch({ type: 'SET_USER', payload: res.data });
//   } catch (err) {
//     console.error(err);
//   }
// };

export default loginMockService;
