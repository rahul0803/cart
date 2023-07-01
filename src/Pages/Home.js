import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Product from '../Components/Product';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <div className="home">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
