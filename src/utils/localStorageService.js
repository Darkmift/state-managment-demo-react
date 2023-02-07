const setData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const localStorageService = { setData, getData };

export default localStorageService;
