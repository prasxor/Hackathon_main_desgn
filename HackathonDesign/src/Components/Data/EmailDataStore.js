let valuesArray = JSON.parse(localStorage.getItem('valuesArray')) || [];

// Function to add value to the array and store it in localStorage
export const addValue = (value) => {
  valuesArray.push(value);
  localStorage.setItem('valuesArray', JSON.stringify(valuesArray)); // Store updated array in localStorage
};

// Function to get all values (from memory or localStorage)
export const getValues = () => {
  return valuesArray;
};