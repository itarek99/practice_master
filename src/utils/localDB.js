const addToLocalStorage = (time) => {
  localStorage.setItem('time', time);
};

const getTimeFromLocalStorage = () => {
  return +localStorage.getItem('time');
};

export { addToLocalStorage, getTimeFromLocalStorage };
