export default (state, action) => {
  switch (action.type) {
    case "DELETE_CART_ITEM":
      let count = 0,
        filterredItems = state.items.filter((item) => {
          if (item.id === action.payload) {
            count = item.quantity;
          }
          return item.id !== action.payload;
        });
      return {
        ...state,
        quantity: state.quantity - count,
        items: filterredItems,
      };
    case "CLEAR_CART":
      return {
        items: [],
        quantity: 0,
        amount: 0,
      };
    case "ADD_CART_ITEM":
      let check = false;
      let cartItems = state.items.map((item) => {
        if (item?.id === action?.payload?.id) {
          check = true;
          return {
            ...item,
            quantity: item.quantity + 1,
            amount: item.amount + item.price,
          };
        }
        return item;
      });
      if (check) {
        return { ...state, quantity: state.quantity + 1, items: cartItems };
      }
      return {
        ...state,
        quantity: state.quantity + 1,
        items: [...state.items, { ...action.payload }],
      };
    case "DECREASE_CART_ITEM":
      let newCartItems = state.items
        .map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity - 1,
              amount: item.amount - item.price,
            };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
      return { ...state, quantity: state.quantity - 1, items: newCartItems };
    default:
      return state;
  }
};
