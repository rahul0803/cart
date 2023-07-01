import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../Components/CartItem';

const MyCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleCheckout = () => {
    // Perform any necessary checkout logic
    dispatch({ type: 'CLEAR_CART' });
    alert('Items have been checked out.');
  };

  return (
    <div className="my-cart">
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="sidebar">
        <h3>Checkout</h3>
        <ul>
          {cart.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <p>Total Price: ${cart.reduce((total, item) => total + item.price, 0)}</p>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default MyCart;
