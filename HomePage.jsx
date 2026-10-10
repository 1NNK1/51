import React from 'react';
import ProductList from '../features/products/components/ProductList';

// Главная страница
const HomePage = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px', color: '#444' }}>Каталог электроники</h2>
      <ProductList />
    </div>
  );
};

export default HomePage;
