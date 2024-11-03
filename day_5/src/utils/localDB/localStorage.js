const getFavoriteItems = () => {
  const getFevData = localStorage.getItem("fev-items");
  if (getFevData) {
    return JSON.parse(getFevData);
  } else {
    return [];
  }
};
const setFavoriteItems = (fevItem) => {
  const items = getFavoriteItems();
  if (items.includes(fevItem)) {
    return alert("Data already exits!");
  } else {
    items.push(fevItem);
    const setFevItem = JSON.stringify(items);

    localStorage.setItem("fev-items", setFevItem);
  }
};

export { setFavoriteItems, getFavoriteItems };
