export const getRandomInt = (min, max) => Math.round(Math.random() * max) + min; // Returns a random integer value in given range from parameters

export const sleep = (m) => new Promise((resolve) => setTimeout(resolve, m)); // Returns a Promise object,it resolves when the given timeout is over

export const writeLocal = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value)); // Writes the given value to given key in localStorage

export const readLocal = (key) => JSON.parse(localStorage.getItem(key)); // Reads the value of given key from localStorage and returns

// localStorage functions shouldn't be here but I didn't know where to put it.
