export const getCategory = (data, category) => {
  return data
    .filter((item) => item.category === category.toLowerCase())
    .slice(0, 4);
};
