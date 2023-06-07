module.exports = (value) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateObject = new Date(value);
  return dateObject.toLocaleDateString(undefined, options);
};
