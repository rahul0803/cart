import React from 'react';
import { useDispatch } from 'react-redux';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item.id });
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.price}</p>
      <button onClick={handleRemoveFromCart}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;
