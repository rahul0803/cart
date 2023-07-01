import { combineReducers } from 'redux';

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return action.payload;
    default:
      return state;
  }
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.find(item => item.id === action.payload.id)) {
        return state; // Item already exists in the cart
      }
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
