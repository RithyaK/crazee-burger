export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const findinArray = (id, array) => {
  return array.find((itemInArray) => itemInArray.id === id);
};
