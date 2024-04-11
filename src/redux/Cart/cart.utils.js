export const addItemToCart = (cartItems, addingItem) => {
  const exist = cartItems.find((item) => item.id === addingItem.id);
  if (exist) {
    return cartItems.map((item) =>
      item.id === addingItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...addingItem, quantity: 1 }];
};
