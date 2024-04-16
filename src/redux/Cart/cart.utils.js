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

export const removeFromCart = (cartItems, removeItemId) => {
  return cartItems.filter((item) => item.id !== removeItemId);
};

export const increaseQuantity = (cartItems, addItemId) => {
  return cartItems.map((item) =>
    item.id === addItemId ? { ...item, quantity: item.quantity + 1 } : item
  );
};

export const decreaseQuantity = (cartItems, removeItemId) => {
  return cartItems.map((item) =>
    item.id === removeItemId && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
